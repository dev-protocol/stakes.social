import { sign } from '@devprotocol/khaos-kit'

export interface GitHubAssetInformation {
  address: string
  publicSignature: string
}

const signer = sign('github-market')

export const postSignGitHubMarketAsset = (
  signMessage: string,
  signature: string,
  personalAccessToken: string
): Promise<GitHubAssetInformation> =>
  signer({
    signature: signature,
    secret: personalAccessToken,
    message: signMessage
  }).catch(() => {
    return Promise.reject(Error('fail to sign github market asset'))
  })
