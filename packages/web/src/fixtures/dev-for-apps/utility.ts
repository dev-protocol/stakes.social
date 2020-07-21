import { BaseUrl } from './cache-path'

export interface UserInformation {
  displayName: string
}

export const getUser = (walletAddress: string): Promise<UserInformation> =>
  fetch(`${BaseUrl}/mainnet/user/${walletAddress}`)
    .then(res => res.json())
    .catch(() => '')

export const postUser = (
  name: string,
  signMessage: string,
  signature: string,
  walletAddress: string
): Promise<UserInformation> =>
  fetch(`${BaseUrl}/mainnet/user/${walletAddress}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      signature: signature,
      displayName: name,
      message: signMessage
    })
  }).then(res => res.json())
