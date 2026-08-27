import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import type { IncomingMessage, ServerResponse } from 'node:http'

function visitorApiPlugin(): Plugin {
  let localCount = 48

  return {
    name: 'visitor-api',
    configureServer(server) {
      server.middlewares.use(
        '/api/visit',
        (request: IncomingMessage, response: ServerResponse) => {
          if (request.method && request.method !== 'GET' && request.method !== 'HEAD') {
            response.statusCode = 405
            response.end()
            return
          }

          const seen = /(?:^|;\s*)lk_visit=1(?:;|$)/.test(request.headers.cookie ?? '')
          if (!seen) {
            localCount += 1
            response.setHeader(
              'Set-Cookie',
              'lk_visit=1; Path=/; Max-Age=86400; SameSite=Lax; HttpOnly'
            )
          }

          response.setHeader('Content-Type', 'application/json')
          response.setHeader('Cache-Control', 'no-store')
          response.end(JSON.stringify({ count: localCount }))
        }
      )
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visitorApiPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
}) 