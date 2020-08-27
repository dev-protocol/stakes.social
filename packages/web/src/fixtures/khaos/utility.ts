import { BaseUrl } from './cache-path'

export interface GitHubAssetInformation {
  address: string
  publicSignature: string
}

export const postSignGitHubMarketAsset = (
  signMessage: string,
  signature: string,
  personalAccessToken: string
): Promise<GitHubAssetInformation> =>
  fetch(`${BaseUrl}/sign/github-market`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      signature: signature,
      secret: personalAccessToken,
      message: signMessage
    })
  }).then(res => {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.resolve(Error('fail to sign github market asset'))
    }
  })
