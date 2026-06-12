import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base = subpath do repositório no GitHub Pages (Pages serve de main:/, raiz do repo).
// `npm run deploy` builda e copia dist/ para a raiz do repositório.
export default defineConfig({
  plugins: [react()],
  base: '/vb-cosmeticos-landing/',
});
