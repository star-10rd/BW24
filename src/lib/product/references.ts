import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

type AopsRegistry = { schema: string; version: number; years: Array<{year:number;collectionUrl:string}> };
let cached: Promise<Map<number,string>> | null = null;
export function getAopsYearMap(root=process.cwd()): Promise<Map<number,string>> {
  if (root!==process.cwd()) return load(root);
  cached ??= load(root); return cached;
}
async function load(root:string) {
  const x=JSON.parse(await readFile(resolve(root,'data/product/references/aops-years.json'),'utf8')) as AopsRegistry;
  if(x.schema!=='bw26-aops-year-references'||x.version!==1||x.years.length!==36) throw new Error('invalid AoPS registry');
  return new Map(x.years.map(e=>[e.year,e.collectionUrl]));
}
