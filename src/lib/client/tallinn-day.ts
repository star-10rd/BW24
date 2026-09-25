const DATE_RE=/^\d{4}-\d{2}-\d{2}$/;
const formatter=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Tallinn',year:'numeric',month:'2-digit',day:'2-digit'});
export function tallinnDate(now:Date|number=new Date()):string{
  const parts=formatter.formatToParts(now instanceof Date?now:new Date(now));
  const value=Object.fromEntries(parts.map(p=>[p.type,p.value]));
  return `${value.year}-${value.month}-${value.day}`;
}
export function isIsoDate(value:string):boolean{ return DATE_RE.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`)); }
export function millisecondsUntilNextTallinnDate(nowMs=Date.now()):number{
  const today=tallinnDate(nowMs); let low=nowMs, high=nowMs+30*60*60*1000;
  if(tallinnDate(high)===today) throw new Error('Could not locate next Tallinn date within 30 hours');
  while(high-low>1000){ const mid=Math.floor((low+high)/2); if(tallinnDate(mid)===today) low=mid; else high=mid; }
  return Math.max(0,high-nowMs);
}
