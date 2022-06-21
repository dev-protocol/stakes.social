const APIS = 'alchemyapi.io'
const TS = 60000
const requests = new Map()

const keyByRequest = async event => `${event.request.url}/${JSON.stringify(await event.request.clone().json())}`
const handler = async event => {
  const key = await keyByRequest(event)
  const { request } = event
  if (!requests.get(key)) {
    requests.set(key, fetch(request.clone()))
    console.debug('send request', key)
    setTimeout(() => {
      console.debug('purge cache', key)
      requests.delete(key)
    }, TS)
  }

  const result = (await requests.get(key)).clone()
  console.debug('cached', key)
  return result
}

self.addEventListener('fetch', async event => {
  const {
    request: { url }
  } = event
  if (url.includes(APIS)) {
    event.respondWith(handler(event))
  }
})
