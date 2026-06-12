import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base = subpath do repositório no GitHub Pages; build em docs/ (Pages serve de main:/docs)
export default defineConfig({
  plugins: [react()],
  base: '/vb-cosmeticos-landing/',
  build: { outDir: 'docs' },
});
