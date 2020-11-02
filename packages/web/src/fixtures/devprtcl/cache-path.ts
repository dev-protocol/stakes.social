export const SWRCachePath = {
  getPropertyInformation: (propertyAddress: string) => `https://api.devprtcl.com/v1/property/${propertyAddress}`,
  getAuthorInformation: (authorAddress?: string) => `https://api.devprtcl.com/v1/author/${authorAddress}`
} as const
