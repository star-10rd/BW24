import { getPracticeCatalog } from '../../src/lib/product/practice-catalog';
import { getPublicSearchIndex } from '../../src/lib/product/search';

const [practice, index] = await Promise.all([getPracticeCatalog(), getPublicSearchIndex()]);
const allowedIds = new Set(practice.exercises.map((item) => item.id));
const allowedRoutes = new Set(practice.exercises.map((item) => item.route));
const controlledTopics = new Set(practice.topics.map((topic) => topic.id));

assert(index.length === practice.exercises.length, `search cardinality ${index.length}/${practice.exercises.length}`);
assert(index.length === 429, `search public baseline ${index.length}`);
assert(new Set(index.map((item) => item.id)).size === index.length, 'search IDs unique');
assert(new Set(index.map((item) => item.route)).size === index.length, 'search routes unique');
assert(index.every((item) => allowedIds.has(item.id)), 'search contains only public exercise IDs');
assert(index.every((item) => allowedRoutes.has(item.route)), 'search contains only canonical public routes');
assert(index.every((item) => item.statementText.trim().length > 0), 'search statements are non-empty');
assert(index.every((item) => item.topicIds.every((id) => controlledTopics.has(id))), 'search topics stay within controlled taxonomy');
assert(index.every((item) => !Object.prototype.hasOwnProperty.call(item, 'solutions') && !Object.prototype.hasOwnProperty.call(item, 'results')), 'search records contain no solution/result payload');
assert(index.every((item) => item.collection === 'contest' || item.collection === 'shortlist'), 'search collection values valid');
assert(index.filter((item) => item.collection === 'contest').length === 379, 'search contest baseline');
assert(index.filter((item) => item.collection === 'shortlist').length === 50, 'search shortlist baseline');

console.log('BW26 search verification passed.');
console.log(`  Public search records: ${index.length}`);
console.log('  Solution/result payload: absent');
console.log('  Routes: canonical public exercises only');

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(`search:check: ${message}`);
}
