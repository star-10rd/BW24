#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const readJson = (p) => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const fail = (msg) => { throw new Error(msg); };

const aopsPath = 'data/product/references/aops-years.json';
const resultsPath = 'data/product/results/registry.json';
for (const p of [aopsPath, resultsPath]) if (!fs.existsSync(path.join(root,p))) fail(`missing ${p}`);

const aops = readJson(aopsPath);
if (aops.schema !== 'bw26-aops-year-references' || aops.version !== 1) fail('unexpected AoPS schema/version');
if (!Array.isArray(aops.years) || aops.years.length !== 36) fail(`AoPS registry must contain 36 years; got ${aops.years?.length}`);
for (let y=1990;y<=2025;y++) if (!aops.years.some(x=>x.year===y)) fail(`AoPS registry missing ${y}`);
const unresolved=aops.years.filter(x=>!x.collectionUrl);
if (unresolved.length) fail(`AoPS registry has unresolved years: ${unresolved.map(x=>x.year).join(', ')}`);
const urls=aops.years.map(x=>x.collectionUrl);
if (new Set(urls).size!==urls.length) fail('duplicate AoPS collection URL');
for (const e of aops.years) if (!/^https:\/\/artofproblemsolving\.com\/community\/c\d+$/.test(e.collectionUrl)) fail(`${e.year}: malformed AoPS year URL`);
if (aops.years.find(x=>x.year===2020)?.collectionUrl !== 'https://artofproblemsolving.com/community/c1594133') fail('2020 AoPS collection mismatch');
if (aops.linkPolicy?.directProblemThreads !== false) fail('AoPS direct problem threads must remain disabled');

const reg=readJson(resultsPath);
if (reg.schema!=='bw26-balticway-results-registry' || reg.version!==2) fail('unexpected results registry schema/version');
if (!Array.isArray(reg.years)||reg.years.length!==34) fail('results registry must contain 34 years');
if (reg.displayPolicy?.selectionSignal!==false) fail('results must not be a selection signal');
let teamParticipations=0;
for (let y=1992;y<=2025;y++) {
  const e=reg.years.find(x=>x.year===y); if(!e) fail(`registry missing ${y}`);
  if(e.localFile!==`balticway-${y}.json`) fail(`${y}: local filename mismatch`);
  if(e.status!=='imported') fail(`${y}: expected imported status`);
  const p=path.join(root,'data/product/results',e.localFile); if(!fs.existsSync(p)) fail(`missing ${e.localFile}`);
  const x=JSON.parse(fs.readFileSync(p,'utf8'));
  if(x.schema!=='bw26-balticway-results'||x.version!==2||x.year!==y) fail(`${e.localFile}: bad schema/year`);
  if(x.maxProblemScore!==5||x.problemCount!==20) fail(`${e.localFile}: expected 20 problems scored 0-5`);
  if(!Array.isArray(x.teams)||!x.teams.length) fail(`${e.localFile}: missing teams`);
  if(e.teamCount!==x.teams.length) fail(`${e.localFile}: registry teamCount mismatch`);
  teamParticipations+=x.teams.length;
  let prevTotal=Infinity;
  const priorTotals=[];
  for(const team of x.teams){
    if(!Number.isInteger(team.rank)||team.rank<1) fail(`${e.localFile}: invalid rank`);
    if(typeof team.teamName!=='string'||!team.teamName.trim()) fail(`${e.localFile}: invalid teamName`);
    if(team.countryCode!==null && !/^[A-Z]{2}$/.test(team.countryCode)) fail(`${e.localFile}: invalid countryCode for ${team.teamName}`);
    if(!Array.isArray(team.scores)||team.scores.length!==20) fail(`${e.localFile}: ${team.teamName} must have 20 scores`);
    for(const s of team.scores) if(!Number.isInteger(s)||s<0||s>5) fail(`${e.localFile}: invalid score ${s}`);
    const sum=team.scores.reduce((a,b)=>a+b,0); if(sum!==team.total) fail(`${e.localFile}: ${team.teamName} total ${team.total} != ${sum}`);
    if(team.total>prevTotal) fail(`${e.localFile}: teams not in nonincreasing total order`);
    const expectedRank=1+priorTotals.filter(t=>t>team.total).length;
    if(team.rank!==expectedRank) fail(`${e.localFile}: ${team.teamName} rank ${team.rank} != derived ${expectedRank}`);
    priorTotals.push(team.total); prevTotal=team.total;
  }
}
if(teamParticipations!==362) fail(`expected 362 Baltic Way team participations; got ${teamParticipations}`);
if(reg.coverage?.teamParticipations!==362) fail('registry participation count mismatch');

// Independent known-source check: official 2025 P17 has scores 5,3,5,5,5,5,0,0,2,0,1.
const y2025=readJson('data/product/results/balticway-2025.json');
const p17=y2025.teams.map(t=>t.scores[16]);
const expected=[5,3,5,5,5,5,0,0,2,0,1];
if(JSON.stringify(p17)!==JSON.stringify(expected)) fail(`2025 P17 source check mismatch: ${JSON.stringify(p17)}`);
const dist=Array(6).fill(0); for(const s of p17) dist[s]++;
if(JSON.stringify(dist)!==JSON.stringify([3,1,1,1,0,5])) fail('2025 P17 distribution check failed');
const est=y2025.teams.find(t=>t.teamName==='Estonia'); if(est?.scores[16]!==3) fail('2025 P17 Estonia check failed');

console.log('BW26 P3E enrichment data v2 verification passed.');
console.log('  AoPS final-contest year mappings: 36/36');
console.log('  Baltic Way results years:          34/34 (1992-2025)');
console.log(`  Team participations:               ${teamParticipations}`);
console.log('  Score matrices:                    34/34');
console.log('  Per-team shape:                    20 integer scores in [0,5], totals verified');
console.log('  2025 P17 source/stat derivation:   PASS');
