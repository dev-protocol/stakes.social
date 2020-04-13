export const catchPath = {
  getTotalRewards: (propertyAddress: string) => `propertyAddresses/${propertyAddress}/getTotalRewards`,
  getTotalStaking: (propertyAddress: string) => `propertyAddresses/${propertyAddress}/getTotalStaking`
} as const
