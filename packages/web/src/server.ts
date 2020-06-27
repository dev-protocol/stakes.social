import express from 'express'
import next from 'next'
import nextI18Next from '@dev/i18n'
import nextI18NextMiddleware from 'next-i18next/middleware'

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000

const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

export const runServer = async () => {
  await app.prepare()
  const server = express()

  await nextI18Next.initPromise
  server.use(nextI18NextMiddleware(nextI18Next))

  // nextjs routing
  server.get('*', (req, res) => handle(req, res))
  server.post('*', (req, res) => handle(req, res))
  server.put('*', (req, res) => handle(req, res))
  server.patch('*', (req, res) => handle(req, res))
  server.delete('*', (req, res) => handle(req, res))

  try {
    server.listen(PORT, () => {
      console.log(`> Ready on http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error(err)
  }
}

runServer()
