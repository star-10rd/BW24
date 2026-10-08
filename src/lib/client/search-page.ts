import type { Domain } from '../problems/types';

type SearchRecord = {
  id: string;
  route: string;
  collection: 'contest' | 'shortlist';
  year: number;
  numberOrSlug: string;
  domain: Domain;
  statementText: string;
  topicIds: string[];
  topicLabels: string[];
  localizedTopicLabels: string[];
};

type SearchData = {
  locale: 'en' | 'et';
  records: SearchRecord[];
  labels: {
    results: string;
    resultsLimited: string;
    noResults: string;
    prompt: string;
    problem: string;
    shortlistProblem: string;
    domains: Record<Domain, string>;
  };
};

type SearchCollection = 'all' | 'contest' | 'shortlist';

export function initSearchPage(): void {
  const node = document.getElementById('bw26-search-data');
  const form = document.querySelector<HTMLFormElement>('[data-search-form]');
  const input = document.querySelector<HTMLInputElement>('[data-search-input]');
  const collection = document.querySelector<HTMLSelectElement>('[data-search-collection]');
  const domain = document.querySelector<HTMLSelectElement>('[data-search-domain]');
  const status = document.querySelector<HTMLElement>('[data-search-status]');
  const list = document.querySelector<HTMLOListElement>('[data-search-results]');
  const clear = document.querySelector<HTMLButtonElement>('[data-search-clear]');
  if (!node || !form || !input || !collection || !domain || !status || !list || !clear) return;
  // Keep non-null aliases for nested callbacks; the DOM contract is established above.
  const searchInput = input;
  const collectionSelect = collection;
  const domainSelect = domain;
  const searchStatus = status;
  const resultsList = list;

  let data: SearchData;
  try { data = JSON.parse(node.textContent || '{}') as SearchData; } catch { return; }

  const params = new URLSearchParams(location.search);
  searchInput.value = params.get('q') ?? '';
  collectionSelect.value = validCollection(params.get('collection'));
  domainSelect.value = validDomain(params.get('domain'));

  let timer = 0;
  const schedule = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(run, 80);
  };

  form.addEventListener('submit', (event) => { event.preventDefault(); run(); });
  searchInput.addEventListener('input', schedule);
  collectionSelect.addEventListener('change', run);
  domainSelect.addEventListener('change', run);
  clear.addEventListener('click', () => {
    searchInput.value = '';
    collectionSelect.value = 'all';
    domainSelect.value = 'all';
    searchInput.focus();
    run();
  });

  run();

  function run(): void {
    const query = searchInput.value.trim();
    const q = normalize(query);
    const selectedCollection = validCollection(collectionSelect.value);
    const selectedDomain = validDomain(domainSelect.value);
    writeUrl(query, selectedCollection, selectedDomain);
    resultsList.replaceChildren();

    if (!q) {
      searchStatus.textContent = data.labels.prompt;
      return;
    }

    const scored = data.records
      .filter((record) => selectedCollection === 'all' || record.collection === selectedCollection)
      .filter((record) => selectedDomain === 'all' || record.domain === selectedDomain)
      .map((record) => ({ record, score: scoreRecord(record, q, data.labels.domains[record.domain]) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || b.record.year - a.record.year || a.record.numberOrSlug.localeCompare(b.record.numberOrSlug, undefined, { numeric: true }));
    const total = scored.length;
    const shown = scored.slice(0, 80);

    searchStatus.textContent = total === 0
      ? data.labels.noResults
      : total > shown.length
        ? data.labels.resultsLimited.replace('{count}', String(shown.length)).replace('{total}', String(total))
        : data.labels.results.replace('{count}', String(total));
    for (const { record } of shown) resultsList.append(renderResult(record, q));
  }

  function renderResult(record: SearchRecord, q: string): HTMLLIElement {
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = localize(record.route, data.locale);
    const identity = document.createElement('span');
    identity.className = 'search-result__identity';
    identity.textContent = record.collection === 'contest'
      ? `${record.year} · ${data.labels.problem} ${record.numberOrSlug}`
      : `${record.year} · ${data.labels.shortlistProblem}`;
    const meta = document.createElement('span');
    meta.className = 'search-result__meta';
    meta.textContent = `${record.domain} · ${data.labels.domains[record.domain]}`;
    const snippet = document.createElement('span');
    snippet.className = 'search-result__snippet';
    snippet.textContent = makeSnippet(record.statementText, q);
    anchor.append(identity, meta, snippet);
    li.append(anchor);
    return li;
  }
}

function scoreRecord(record: SearchRecord, query: string, localizedDomainLabel: string): number {
  const identity = normalize(`${record.year} ${record.numberOrSlug}`);
  const statement = normalize(record.statementText);
  const topics = normalize([...record.topicLabels, ...record.localizedTopicLabels, ...record.topicIds].join(' '));
  const domain = normalize(`${record.domain} ${localizedDomainLabel}`);
  const tokens = query.split(' ').filter(Boolean);

  if (identity === query) return 10000;
  let score = 0;
  if (identity.startsWith(query)) score += 3000;
  if (identity.includes(query)) score += 2000;
  if (topics.includes(query)) score += 1200;
  if (statement.includes(query)) score += 800;
  if (domain.includes(query)) score += 500;

  for (const token of tokens) {
    let tokenScore = 0;
    if (identity.includes(token)) tokenScore = Math.max(tokenScore, 350);
    if (topics.includes(token)) tokenScore = Math.max(tokenScore, 220);
    if (statement.includes(token)) tokenScore = Math.max(tokenScore, 100);
    if (domain.includes(token)) tokenScore = Math.max(tokenScore, 180);
    if (tokenScore === 0) return 0;
    score += tokenScore;
  }
  return score;
}

function makeSnippet(text: string, query: string): string {
  const normalizedText = normalize(text);
  const tokens = query.split(' ').filter((token) => token.length >= 2);
  let index = -1;
  for (const token of tokens) {
    index = normalizedText.indexOf(token);
    if (index >= 0) break;
  }
  if (index < 0) index = 0;
  const start = Math.max(0, index - 70);
  const end = Math.min(text.length, start + 220);
  const prefix = start > 0 ? '…' : '';
  const suffix = end < text.length ? '…' : '';
  return `${prefix}${text.slice(start, end).trim()}${suffix}`;
}

function normalize(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('en-US')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

function validCollection(value: string | null): SearchCollection {
  return value === 'contest' || value === 'shortlist' ? value : 'all';
}

function validDomain(value: string | null): 'all' | Domain {
  return value === 'A' || value === 'C' || value === 'G' || value === 'N' ? value : 'all';
}

function writeUrl(q: string, collection: SearchCollection, domain: 'all' | Domain): void {
  const params = new URLSearchParams();
  if (q) params.set('q', q);
  if (collection !== 'all') params.set('collection', collection);
  if (domain !== 'all') params.set('domain', domain);
  const query = params.toString();
  history.replaceState(history.state, '', query ? `${location.pathname}?${query}` : location.pathname);
}

function localize(route: string, locale: 'en' | 'et'): string {
  return locale === 'et' ? `/et${route}` : route;
}
