import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `vite preview` sert les mêmes en-têtes que la production :
// la CSP de vercel.json est ainsi vérifiée en local avant chaque déploiement.
const vercel = JSON.parse(readFileSync(new URL('./vercel.json', import.meta.url)))
const securityHeaders = Object.fromEntries(
  vercel.headers[0].headers.map(({ key, value }) => [key, value]),
)

export default defineConfig({
  plugins: [react()],
  build: {
    // Rien en data: URI, pour garder une CSP sans exception.
    assetsInlineLimit: 0,
  },
  preview: {
    headers: securityHeaders,
  },
})
