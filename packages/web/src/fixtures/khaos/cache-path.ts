export const BaseUrl = 'https://khaos-eth-mainnet.azurewebsites.net'

export const SWRCachePath = {
  postSignGitHubMarketAsset: () => `${BaseUrl}/sign/github-market`
} as const
