export const SWRCachePath = {
  getTotalRewards: (propertyAddress: string) => `propertyAddresses/${propertyAddress}/getTotalRewards`,
  getTotalStaking: (propertyAddress: string) => `propertyAddresses/${propertyAddress}/getTotalStaking`
} as const
