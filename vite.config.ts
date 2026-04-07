import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used - do not remove them
    react(),
    tailwindcss(),
    (viteCompression as any)({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    (viteCompression as any)({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    (ViteImageOptimizer as any)({
      png: { quality: 80 },
      jpeg: { quality: 80 },
    }),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router', 'react-helmet-async'],
          ui: ['lucide-react', 'motion', 'embla-carousel-react'],
        },
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
