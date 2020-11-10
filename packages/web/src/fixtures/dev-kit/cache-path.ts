export const SWRCachePath = {
  getTotalRewardsAmount: (propertyAddress: string) => `propertyAddresses/${propertyAddress}/getTotalRewardsAmount`,
  getTotalStakingAmount: (propertyAddress: string) => `propertyAddresses/${propertyAddress}/getTotalStakingAmount`,
  getMyHolderAmount: (propertyAddress: string) => `propertyAddresses/${propertyAddress}/getMyHolderAmount`,
  getMyStakingRewardAmount: (propertyAddress: string) =>
    `propertyAddresses/${propertyAddress}/getMyStakingRewardAmount`,
  getMyStakingAmount: (propertyAddress: string) => `propertyAddresses/${propertyAddress}/getMyStakingAmount`,
  getTotalStakingAmountOnProtocol: `getTotalStakingAmountOnProtocol`,
  calculateMaxRewardsPerBlock: `calculateMaxRewardsPerBlock`,
  totalSupply: `totalSupply`,
  holdersShare: (amount?: string, lockedups?: string) => `amount/${amount}/lockedups/${lockedups}/holdersShare`,
  propertyAuthor: (propertyAddress?: string) => `propertyAddresses/${propertyAddress}/author`
} as const
