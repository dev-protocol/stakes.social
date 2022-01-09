import { sign, emulate } from '@devprotocol/khaos-kit'
import { ChainName } from '../wallet/utility'

export interface GitHubAssetInformation {
  address: string
  publicSignature: string
}

export const postSignGitHubMarketAsset = (network: ChainName) => {
  const signer = sign(
    'github-market',
    network === 'ethereum' ? 'mainnet' : network === 'polygon' ? 'polygon-mainnet' : network
  )
  return (signMessage: string, signature: string, personalAccessToken: string): Promise<GitHubAssetInformation> =>
    signer({
      signature: signature,
      secret: personalAccessToken,
      message: signMessage
    }).catch(() => {
      return Promise.reject(Error('fail to sign github market asset'))
    })
}

export const emulateOraclizeGitHubMarketAsset = (network: ChainName) => {
  const emulator = emulate(
    'github-market',
    network === 'ethereum' ? 'mainnet' : network === 'polygon' ? 'polygon-mainnet' : network
  )
  return (githubRepository: string, publicSignature: string, account?: string) =>
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
}
