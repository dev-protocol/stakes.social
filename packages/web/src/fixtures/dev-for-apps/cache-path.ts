export const BaseUrl = 'https://dev-for-apps.azurewebsites.net/v1/for-apps' // TODO: Will be removed due to an old endpoint.
export const StrapiBaseUrl = 'https://dev-for-apps.azureedge.net'

export const SWRCachePath = {
  getUser: (walletAddress: string) => `${BaseUrl}/mainnet/user/${walletAddress}`,
  getPropertyTags: (propertyAddress: string) => `${BaseUrl}/mainnet/property/${propertyAddress}/tags`,
  getAccount: (walletAddress?: string) => `${StrapiBaseUrl}/accounts?address=${walletAddress}`,
  getProperty: (propertyAddress?: string) => `${StrapiBaseUrl}/properties?address=${propertyAddress}`,
  getPropertySettingsByProperty: (propertyAddress: string) =>
    `${StrapiBaseUrl}/property-settings?property_address=${propertyAddress}`,
  getPropertySettingsByAccount: (accountAddress: string) =>
    `${StrapiBaseUrl}/property-settings?address=${accountAddress}`,
  getPropertySetting: (propertyAddress: string, accountAddress: string) =>
    `${StrapiBaseUrl}/property-settings?property_address=${propertyAddress}&address=${accountAddress}`
} as const
