import { BaseUrl } from './cache-path'

export interface GitHubAssetInformation {
  address: string
  publicSignature: string
}

export const postSignGitHubMarketAsset = (
  signMessage: string,
  signature: string,
  publicAccessToken: string
): Promise<GitHubAssetInformation> =>
  fetch(`${BaseUrl}/sign/github-market`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      signature: signature,
      secret: publicAccessToken,
      message: signMessage
    })
  }).then(res => res.json())
