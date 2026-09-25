interface ProblemsFilterData {
  validYears: number[];
  validTopics: string[];
  labels: { results: string; noResults: string; selectedTopics: string };
}
const DOMAINS = ['A', 'C', 'G', 'N'];

export function initProblemsFilter(): void {
  const dataNode = document.getElementById('bw26-problems-filter-data');
  const form = document.querySelector<HTMLFormElement>('[data-problems-filter]');
  if (!dataNode || !form) return;
  let data: ProblemsFilterData;
  try { data = JSON.parse(dataNode.textContent || '{}') as ProblemsFilterData; } catch { return; }
  const validYears = new Set(data.validYears.map(Number));
  const validTopics = new Set(data.validTopics);
  const rows = [...document.querySelectorAll<HTMLElement>('[data-problem-row]')];
  const count = document.querySelector<HTMLElement>('[data-problems-count]');
  const empty = document.querySelector<HTMLElement>('[data-problems-empty]');
  const selection = document.querySelector<HTMLElement>('[data-problems-selection]');
  const quickYear = form.querySelector<HTMLSelectElement>('[data-year-quick]');
  const reset = form.querySelector<HTMLButtonElement>('[data-problems-reset]');

  const readQuery = (): void => {
    const params = new URLSearchParams(location.search);
    const yearParam = params.get('years');
    const domainParam = params.get('domains');
    const years = parseCsv(yearParam).map(Number).filter((year) => validYears.has(year));
    const domains = parseCsv(domainParam).filter((domain) => DOMAINS.includes(domain));
    const topics = parseCsv(params.get('topics')).filter((topic) => validTopics.has(topic));
    const solution = params.get('solution') === '1';
    setChecks('year', yearParam === 'none' ? [] : (years.length ? years.map(String) : [...validYears].map(String)));
    setChecks('domain', domainParam === 'none' ? [] : (domains.length ? domains : DOMAINS));
    setChecks('topic', topics);
    const verified = form.querySelector<HTMLInputElement>('input[name="verified"]');
    if (verified) verified.checked = solution;
    syncQuickYear();
    apply(true);
  };

  const filters = () => ({
    years: new Set([...form.querySelectorAll<HTMLInputElement>('input[name="year"]:checked')].map((input) => Number(input.value)).filter((year) => validYears.has(year))),
    domains: new Set([...form.querySelectorAll<HTMLInputElement>('input[name="domain"]:checked')].map((input) => input.value).filter((domain) => DOMAINS.includes(domain))),
    topics: new Set([...form.querySelectorAll<HTMLInputElement>('input[name="topic"]:checked')].map((input) => input.value).filter((topic) => validTopics.has(topic))),
    verified: form.querySelector<HTMLInputElement>('input[name="verified"]')?.checked === true,
  });

  const apply = (writeUrl = true): void => {
    const f = filters();
    let visible = 0;
    for (const row of rows) {
      const year = Number(row.dataset.year);
      const domain = row.dataset.domain ?? '';
      const topics = new Set((row.dataset.subtopics ?? '').split(' ').filter(Boolean));
      const solution = row.dataset.solution === '1';
      const matches = f.years.has(year) && f.domains.has(domain) && (f.topics.size === 0 || [...f.topics].some((topic) => topics.has(topic))) && (!f.verified || solution);
      row.hidden = !matches;
      if (matches) visible += 1;
    }
    if (count) count.textContent = data.labels.results.replace('{count}', String(visible));
    if (empty) empty.hidden = visible !== 0;
    if (selection) {
      const labels = [...form.querySelectorAll<HTMLInputElement>('input[name="topic"]:checked')].map((input) => input.dataset.label ?? input.value);
      selection.textContent = labels.length ? `${data.labels.selectedTopics}: ${labels.join(' · ')}` : '';
      selection.hidden = labels.length === 0;
    }
    if (writeUrl) writeQuery(f);
  };

  const writeQuery = (f: ReturnType<typeof filters>): void => {
    const params = new URLSearchParams();
    if (f.years.size !== validYears.size) params.set('years', f.years.size ? [...f.years].sort((a, b) => a - b).join(',') : 'none');
    if (f.domains.size !== DOMAINS.length) params.set('domains', f.domains.size ? DOMAINS.filter((domain) => f.domains.has(domain)).join(',') : 'none');
    if (f.topics.size) params.set('topics', [...f.topics].sort().join(','));
    if (f.verified) params.set('solution', '1');
    const query = params.toString();
    history.replaceState(history.state, '', `${location.pathname}${query ? `?${query}` : ''}`);
  };

  const setChecks = (name: string, values: string[]): void => {
    const set = new Set(values);
    for (const input of form.querySelectorAll<HTMLInputElement>(`input[name="${name}"]`)) input.checked = set.has(input.value);
  };


  const syncQuickYear = (): void => {
    if (!quickYear) return;
    const checked = [...form.querySelectorAll<HTMLInputElement>('input[name="year"]:checked')].map((input) => input.value);
    quickYear.value = checked.length === validYears.size ? 'all' : checked.length === 1 ? checked[0]! : 'custom';
  };

  quickYear?.addEventListener('change', () => {
    if (quickYear.value === 'all') setChecks('year', [...validYears].map(String));
    else if (validYears.has(Number(quickYear.value))) setChecks('year', [quickYear.value]);
    apply(true);
  });
  reset?.addEventListener('click', () => {
    setChecks('year', [...validYears].map(String)); setChecks('domain', DOMAINS); setChecks('topic', []);
    const verified = form.querySelector<HTMLInputElement>('input[name="verified"]'); if (verified) verified.checked = false;
    syncQuickYear(); apply(true);
  });

  form.addEventListener('change', (event) => { if ((event.target as HTMLInputElement).name === 'year') syncQuickYear(); apply(true); });
  window.addEventListener('popstate', readQuery);
  readQuery();
}

function parseCsv(value: string | null): string[] {
  if (!value) return [];
  return [...new Set(value.split(',').map((item) => item.trim()).filter(Boolean))];
}
