export const BaseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://khaos-eth-mainnet.azurewebsites.net'
    : 'https://khaos-eth-ropsten.azurewebsites.net'

export const SWRCachePath = {
  postSignGitHubMarketAsset: () => `${BaseUrl}/sign/github-market`
} as const
