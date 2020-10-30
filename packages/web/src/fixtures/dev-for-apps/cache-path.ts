export const BaseUrl = 'https://dev-for-apps.azurewebsites.net/v1/for-apps' // TODO: Will be removed due to an old endpoint.
export const StrapiBaseUrl = 'https://dev-for-apps-rest.azurewebsites.net'

export const SWRCachePath = {
  getUser: (walletAddress: string) => `${BaseUrl}/mainnet/user/${walletAddress}`,
  getPropertyTags: (propertyAddress: string) => `${BaseUrl}/mainnet/property/${propertyAddress}/tags`,
  getAccount: (walletAddress: string) => `${StrapiBaseUrl}/accounts?address=${walletAddress}`,
  createAccount: () => `${StrapiBaseUrl}/accounts`,
  updateAccount: (id: number) => `${StrapiBaseUrl}/accounts/${id}`,
  uploadFile: () => `${StrapiBaseUrl}/upload`,
  getProperty: (propertyAddress?: string) => `${StrapiBaseUrl}/properties?address=${propertyAddress}`
} as const
