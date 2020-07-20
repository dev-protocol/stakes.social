export const BaseUrl = 'https://dev-for-apps.azurewebsites.net/v1/for-apps'

export const SWRCachePath = {
  getUser: (walletAddress: string) => `get ${BaseUrl}/mainnet/user/${walletAddress}`,
  postUser: (name: string, signature: string, walletAddress: string) => `post ${BaseUrl}/mainnet/user/${walletAddress}`
} as const
