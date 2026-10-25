import {build} from 'esbuild';
await build({absWorkingDir:new URL('.',import.meta.url).pathname,entryPoints:['src/world.js'],outfile:'world.js',bundle:true,minify:true,format:'iife',target:['es2020'],legalComments:'external'});

import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const root=new URL('.',import.meta.url);
let html=await readFile(new URL('index.html',root),'utf8');
for(const file of ['world.js','style.css']){const hash=createHash('sha256').update(await readFile(new URL(file,root))).digest('hex').slice(0,10);html=html.replace(new RegExp(file.replace('.','\\.')+'\\?v=[^\"\']+','g'),file+'?v='+hash)}
await writeFile(new URL('index.html',root),html);
