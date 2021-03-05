import { sign, emulate } from '@devprotocol/khaos-kit'

export interface GitHubAssetInformation {
  address: string
  publicSignature: string
}

const signer = sign('github-market')
const emulator = emulate('github-market')

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

export const emulateOraclizeGitHubMarketAsset = (githubRepository: string, publicSignature: string, account?: string) =>
  emulator({
    event: {
      args: {
        githubRepository,
        publicSignature,
        account
      }
    }
  }).catch(() => {
    return Promise.reject(Error('fail to dry-run for authentication with Khaos'))
  })
