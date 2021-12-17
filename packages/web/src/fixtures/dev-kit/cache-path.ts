export const SWRCachePath = {
  getTotalRewardsAmount: (propertyAddress: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/getTotalRewardsAmount`,
  getTotalStakingAmount: (propertyAddress: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/getTotalStakingAmount`,
  getMyHolderAmount: (propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/getMyHolderAmount`,
  getTreasuryAmount: (propertyAddress?: string) => `propertyAddresses/${propertyAddress}/getTreasuryAmount`,
  getMyStakingRewardAmount: (propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/getMyStakingRewardAmount`,
  getMyStakingAmount: (propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/getMyStakingAmount`,
  getTotalStakingAmountOnProtocol: (chain?: string, user?: string) =>
    `getTotalStakingAmountOnProtocol/${chain}/${user}`,
  calculateMaxRewardsPerBlock: (chain?: string, user?: string) => `calculateMaxRewardsPerBlock/${chain}/${user}`,
  totalSupply: (chain?: string, user?: string) => `totalSupply/${chain}/${user}`,
  holdersShare: (chain?: string, amount?: string, lockedups?: string, user?: string) =>
    `${chain}/amount/${amount}/lockedups/${lockedups}/holdersShare/${user}`,
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
  getStokenOwnerOf: (sTokenId?: string) => `sTokenId/${sTokenId}/getStokenOwnerOf`,
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
  getStokenSymbol: (sTokenId?: string) => `sTokenId/${sTokenId}/getStokenSymbol`,
  enabledMarkets: (network?: string) => `enabledMarkets/${network}`,
  getAuthenticatedProperties: (network?: string, marketAddress?: string) =>
    `getAuthenticatedProperties/${network}/${marketAddress}`,
  useGetAssetsByProperties: (network?: string, propertyAddress?: string) =>
    `useGetAssetsByProperties/${network}/${propertyAddress}`
} as const
