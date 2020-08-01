export const BaseUrl = 'https://dev-for-apps.azurewebsites.net/v1/for-apps'

export const SWRCachePath = {
  getUser: (walletAddress: string) => `${BaseUrl}/mainnet/user/${walletAddress}`
} as const
