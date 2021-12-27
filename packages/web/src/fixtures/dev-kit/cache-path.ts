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
  propertyAuthor: (network?: string, propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/author/${network}`,
  balanceOf: (network?: string, user?: string) => `balanceOf/${user}/${network}`,
  allClaimedRewards: (user?: string) => `allClaimedRewards/${user}`,
  propertyName: (network?: string, propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/name/${network}`,
  propertySymbol: (network?: string, propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/symbol/${network}`,
  balanceOfProperty: (propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/balanceOf`,
  detectStokens: (network?: string, propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/detectStokens/${network}`,
  positionsOfOwner: (user?: string) => `user/${user}/positionsOfOwner`,
  getStokenTokenURI: (network?: string, sTokenId?: number) => `sTokenId/${sTokenId}/getStokenTokenURI/${network}`,
  getStokenOwnerOf: (sTokenId?: string) => `sTokenId/${sTokenId}/getStokenOwnerOf`,
  getStokenPositions: (network?: string, sTokenId?: string) => `sTokenId/${sTokenId}/getStokenPositions/${network}`,
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
  getStokenHeldAt: (network?: string, sTokenId?: number) => `sTokenId/${sTokenId}/getStokenHeldAt/${network}`,
  enabledMarkets: (network?: string) => `enabledMarkets/${network}`,
  getAuthenticatedProperties: (network?: string, marketAddress?: string) =>
    `getAuthenticatedProperties/${network}/${marketAddress}`,
  useGetAssetsByProperties: (network?: string, propertyAddress?: string) =>
    `useGetAssetsByProperties/${network}/${propertyAddress}`
} as const
