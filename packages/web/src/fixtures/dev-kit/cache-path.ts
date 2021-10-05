export const SWRCachePath = {
  getTotalRewardsAmount: (propertyAddress: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/getTotalRewardsAmount`,
  getTotalStakingAmount: (propertyAddress: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/getTotalStakingAmount`,
  getMyHolderAmount: (propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/getMyHolderAmount`,
  getTreasuryAmount: (propertyAddress: string) => `propertyAddresses/${propertyAddress}/getTreasuryAmount`,
  getMyStakingRewardAmount: (propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/getMyStakingRewardAmount`,
  getMyStakingAmount: (propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/getMyStakingAmount`,
  getTotalStakingAmountOnProtocol: (user?: string) => `getTotalStakingAmountOnProtocol/${user}`,
  getEstimateGas4WithdrawHolderAmount: (propertyAddress: string, user?: string) =>
    `getEstimateGas/${user}${propertyAddress}/estimateGas4WithdrawHolderAmount`,
  getEstimateGas4WithdrawStakingAmount: (propertyAddress: string, amount: string, user?: string) =>
    `getEstimateGas/${user}${propertyAddress}/${amount}/estimateGas4WithdrawStakingAmount`,
  getEstimateGas4Stake: (propertyAddress: string, user?: string, amount?: string) =>
    `getEstimateGas/${user}${propertyAddress}/${amount}/estimateGas4Stake`,
  getEstimateGas4CreateProperty: (name: string, symbol: string, author: string, user?: string) =>
    `getEstimateGas/${user}/${author}/${name}/${symbol}/estimateGas4CreateProperty`,
  getEstimateGas4CreateAndAuthenticate: (name: string, symbol: string, marketAddress: string, user?: string) =>
    `getEstimateGas/${user}/${marketAddress}/${symbol}/${name}/estimateGas4CreateAndAuthenticate`,
  calculateMaxRewardsPerBlock: (user?: string) => `calculateMaxRewardsPerBlock/${user}`,
  totalSupply: (user?: string) => `totalSupply/${user}`,
  holdersShare: (amount?: string, lockedups?: string, user?: string) =>
    `amount/${amount}/lockedups/${lockedups}/holdersShare/${user}`,
  propertyAuthor: (propertyAddress?: string, user?: string) => `propertyAddresses/${user}${propertyAddress}/author`,
  balanceOf: (user?: string) => `balanceOf/${user}`,
  allClaimedRewards: (user?: string) => `allClaimedRewards/${user}`,
  propertyName: (propertyAddress?: string, user?: string) => `propertyAddresses/${user}${propertyAddress}/name`,
  propertySymbol: (propertyAddress?: string, user?: string) => `propertyAddresses/${user}${propertyAddress}/symbol`,
  balanceOfProperty: (propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/balanceOf`,
  detectStokens: (propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/detectStokens`,
  positionsOfOwner: (user?: string) => `user/${user}/positionsOfOwner`,
  getStokenPositions: (sTokenId?: string) => `sTokenId/${sTokenId}/getStokenPositions`,
  getStokenRewards: (sTokenId?: string) => `sTokenId/${sTokenId}/getStokenRewards`,
  approve: (propertyAddress?: string, user?: string) => `propertyAddresses/${user}${propertyAddress}/approve`,
  depositToProperty: (propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/depositToProperty`,
  depositToPosition: (propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/depositToPosition`,
  withdrawByPosition: (propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/withdrawByPosition`,
  migrateToSTokens: (sTokenId?: string) => `sTokenId/${sTokenId}/migrateToSTokens`,
  getTokenURI: (sTokenId?: string) => `sTokenId/${sTokenId}/getTokenURI`,
  getStokenSymbol: (sTokenId?: string) => `sTokenId/${sTokenId}/getStokenSymbol`
} as const
