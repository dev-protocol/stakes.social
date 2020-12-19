export const SWRCachePath = {
  getPropertyInformation: (propertyAddress?: string) => `https://api.devprotocol.xyz/v1/property/${propertyAddress}`,
  getAuthorInformation: (authorAddress?: string) => `https://api.devprotocol.xyz/v1/author/${authorAddress}`
} as const
