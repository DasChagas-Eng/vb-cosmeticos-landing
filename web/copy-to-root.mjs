// Copia o build (dist/) para a raiz do repositório, onde o GitHub Pages serve (main:/).
// Uso: npm run deploy
import { cpSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const dist = join(here, 'dist');
const repoRoot = join(here, '..');

if (!existsSync(dist)) {
  console.error('dist/ não existe — rode `npm run build` antes.');
  process.exit(1);
}

// limpa assets antigos (nomes com hash mudam a cada build)
rmSync(join(repoRoot, 'assets'), { recursive: true, force: true });

cpSync(dist, repoRoot, { recursive: true });
console.log('Build copiado para a raiz do repositório.');
