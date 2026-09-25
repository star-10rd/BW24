import { readFile } from 'node:fs/promises';
import { loadPublicCanonicalState } from '../../src/lib/corpus/load';
import { bindingsForOwner, materializeProblemAsset, ownerKey } from '../../src/lib/corpus/assets';
import { renderProblemMarkdown } from '../../src/lib/problems/renderMarkdown';
import type { ContentOwner } from '../corpus/schema';

const state=await loadPublicCanonicalState();
const hardPatterns:Array<[string,RegExp]>=[
  ['C0 control character',/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/],
  ['replacement character',/\ufffd/],
  ['known corrupt CJK extraction',/丰/],
  ['known OCR underscore word',/\b(?:tha_n|ca_n|a_nswer|a_nd|ma_ps)\b/i],
  ['known stray Number Theory heading',/^##\s*4\s+Number Theory\s*$/im],
  ['known Flensburg PDF branding',/B\s*ALTIC.{0,40}FLENSBURG/is],
];
const seenBindingKeys=new Set<string>();
const failures:string[]=[];
let statements=0,solutions=0,rendered=0;
const bindingKey=(versionId:string,owner:ContentOwner,key:string)=>`${versionId}|${ownerKey(owner)}|${key}`;
const messageFor=(error:unknown)=>error instanceof Error?error.message:String(error);

async function check(versionId:string,owner:ContentOwner,path:string,context:string){
  const markdown=await readFile(path,'utf8');
  for(const [label,pattern] of hardPatterns)if(pattern.test(markdown))throw new Error(`${context}: ${label}`);
  const bindings=bindingsForOwner(state.assetBindings,versionId,owner);
  const assets=await Promise.all(bindings.map(b=>materializeProblemAsset(b)));
  const result=await renderProblemMarkdown(markdown,assets,context);
  rendered++;
  for(const key of result.referencedAssets)seenBindingKeys.add(bindingKey(versionId,owner,key));
  const expected=new Set(bindings.map(b=>b.sourceKey));
  const actual=new Set(result.referencedAssets);
  for(const key of expected)if(!actual.has(key))throw new Error(`${context}: selected asset binding ${key} is not referenced by its owner Markdown`);
  for(const key of actual)if(!expected.has(key))throw new Error(`${context}: rendered unexpected asset ${key}`);
}

for(const selection of state.contentSelections){
  if(!('status' in selection.statement)){
    statements++;
    try{
      if(selection.statement.ref.kind!=='curated-file')throw new Error(`${selection.versionId}: P3E publication statement must be curated-file`);
      await check(selection.versionId,{kind:'statement'},selection.statement.ref.path,`${selection.versionId}: statement`);
    }catch(error){
      failures.push(messageFor(error));
    }
  }
  for(const solution of selection.solutions.items){
    solutions++;
    try{
      if(solution.ref.kind!=='curated-file')throw new Error(`${selection.versionId}/${solution.id}: P3E publication solution must be curated-file`);
      await check(selection.versionId,{kind:'solution',id:solution.id},solution.ref.path,`${selection.versionId}: ${solution.id}`);
    }catch(error){
      failures.push(messageFor(error));
    }
  }
}

if(statements!==769||solutions!==800)failures.push(`publication cardinality mismatch: ${statements} statements, ${solutions} solutions`);
if(failures.length===0&&seenBindingKeys.size!==207)failures.push(`expected all 207 selected asset bindings to be referenced; got ${seenBindingKeys.size}`);

if(failures.length>0){
  console.error(`BW26 publication check found ${failures.length} failure${failures.length===1?'':'s'}:`);
  for(const [index,failure] of failures.entries())console.error(`  ${index+1}. ${failure}`);
  console.error(`  successful renderer passes before/around failures: ${rendered}`);
  process.exitCode=1;
}else{
  console.log('BW26 publication check passed.');
  console.log(`  statements: ${statements}/769`);
  console.log(`  solution files: ${solutions}/800`);
  console.log(`  selected asset bindings referenced: ${seenBindingKeys.size}/207`);
  console.log(`  renderer passes: ${rendered}`);
}
