import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const clientDirectory = path.join(projectRoot, 'dist', 'client');
const outputDirectory = path.join(projectRoot, 'netlify-dist');

const routes = [
  '/',
  '/industry/retail',
  '/industry/corporate',
  '/industry/residential',
  '/industry/logistics',
  '/industry/schools',
  '/industry/hospitality',
];

await rm(outputDirectory, { force: true, recursive: true });
await cp(clientDirectory, outputDirectory, { recursive: true });

const serverModule = await import('../dist/server/index.js');
const worker = serverModule.default;

for (const route of routes) {
  const response = await worker.fetch(new Request(`https://eyora-industries.netlify.app${route}`));
  if (!response.ok) {
    throw new Error(`Unable to render ${route}: ${response.status} ${response.statusText}`);
  }

  const outputFile = route === '/'
    ? path.join(outputDirectory, 'index.html')
    : path.join(outputDirectory, route.slice(1), 'index.html');

  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, await response.text(), 'utf8');
  console.log(`Rendered ${route}`);
}

