export const SWRCachePath = {
  getTotalRewardsAmount: (propertyAddress: string) => `propertyAddresses/${propertyAddress}/getTotalRewardsAmount`,
  getTotalStakingAmount: (propertyAddress: string) => `propertyAddresses/${propertyAddress}/getTotalStakingAmount`,
  getMyHolderAmount: (propertyAddress: string) => `propertyAddresses/${propertyAddress}/getMyHolderAmount`,
  getMyStakingRewardAmount: (propertyAddress: string) =>
    `propertyAddresses/${propertyAddress}/getMyStakingRewardAmount`,
  getMyStakingAmount: (propertyAddress: string) => `propertyAddresses/${propertyAddress}/getMyStakingAmount`,
  getTotalStakingAmountOnProtocol: () => `getTotalStakingAmountOnProtocol`,
  getWithdrawalStatus: (propertyAddress: string) => `propertyAddresses/${propertyAddress}/getWithdrawalStatus`,
  calculateMaxRewardsPerBlock: () => `calculateMaxRewardsPerBlock`
} as const
