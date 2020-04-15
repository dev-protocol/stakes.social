export const SWRCachePath = {
  getTotalRewardsAmount: (propertyAddress: string) => `propertyAddresses/${propertyAddress}/getTotalRewardsAmount`,
  getTotalStakingAmount: (propertyAddress: string) => `propertyAddresses/${propertyAddress}/getTotalStakingAmount`,
  getMyHolderAmount: (propertyAddress: string) => `propertyAddresses/${propertyAddress}/getMyHolderAmount`,
  getMyStakingAmount: (propertyAddress: string) => `propertyAddresses/${propertyAddress}/getMyStakingAmount`
} as const
