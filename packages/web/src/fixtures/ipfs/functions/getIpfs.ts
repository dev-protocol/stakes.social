import ipfsHttpClient from 'ipfs-http-client'
import { always } from 'ramda'

const signatures = {
  '/9j/': 'image/jpg',
  iVBORw0KGgo: 'image/png',
  R0lGODdh: 'image/gif',
  R0lGODlh: 'image/gif'
}

const getURI = (base64: string) => {
  for (let [key, value] of Object.entries(signatures)) {
    if (base64.startsWith(key)) {
      return 'data:' + value + ';base64,' + base64
    }
  }
  return base64
}

function bufferToBase64(buf: Uint8Array) {
  let binstr = Array.prototype.map
    .call(buf, function (ch) {
      return String.fromCharCode(ch)
    })
    .join('')
  return btoa(binstr)
}

export const getIpfs = async (ipfs: ReturnType<typeof ipfsHttpClient>, cid: string): Promise<string | undefined> =>
  (async iterator => {
    let content = new Uint8Array()
    for await (const data of iterator) {
      if (data.type === 'file' && data.content) {
        for await (const chunk of data.content) {
          let mergedArray = new Uint8Array(content.length + chunk.length)
          mergedArray.set(content)
          mergedArray.set(chunk, content.length)
          content = mergedArray
        }
      }
    }
    return content.length ? getURI(bufferToBase64(content)) : undefined
  })(ipfs.get(cid)).catch(always(undefined))
