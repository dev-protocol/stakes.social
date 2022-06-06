export const SWRCachePath = {
  getTotalRewardsAmount: (propertyAddress: string, user?: string, chain?: string) =>
    `propertyAddresses/${chain}/${user}${propertyAddress}/getTotalRewardsAmount`,
  getTotalStakingAmount: (propertyAddress: string, user?: string, chain?: string) =>
    `propertyAddresses/${chain}/${user}${propertyAddress}/getTotalStakingAmount`,
  getMyHolderAmount: (chain?: string, propertyAddress?: string, user?: string) =>
    `propertyAddresses/${chain}/${user}${propertyAddress}/getMyHolderAmount`,
  getTreasuryAmount: (chain?: string, propertyAddress?: string) =>
    `propertyAddresses/${chain}/${propertyAddress}/getTreasuryAmount`,
  getMyStakingRewardAmount: (chain?: string, propertyAddress?: string, user?: string) =>
    `propertyAddresses/${chain}/${user}${propertyAddress}/getMyStakingRewardAmount`,
  getMyStakingAmount: (chain?: string, propertyAddress?: string, user?: string) =>
    `propertyAddresses/${chain}/${user}${propertyAddress}/getMyStakingAmount`,
  getTotalStakingAmountOnProtocol: (chain?: string, user?: string) =>
    `getTotalStakingAmountOnProtocol/${chain}/${user}`,
  calculateMaxRewardsPerBlock: (chain?: string, user?: string) => `calculateMaxRewardsPerBlock/${chain}/${user}`,
  totalSupply: (chain?: string, user?: string) => `totalSupply/${chain}/${user}`,
  holdersShare: (chain?: string, amount?: string, lockedups?: string, user?: string) =>
    `${chain}/amount/${amount}/lockedups/${lockedups}/holdersShare/${user}`,
  propertyAuthor: (chain?: string, propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/author/${chain}`,
  balanceOf: (chain?: string, user?: string) => `balanceOf/${user}/${chain}`,
  allClaimedRewards: (user?: string) => `allClaimedRewards/${user}`,
  propertyName: (chain?: string, propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/name/${chain}`,
  propertySymbol: (chain?: string, propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/symbol/${chain}`,
  balanceOfProperty: (chain?: string, propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/balanceOf/${chain}`,
  detectStokens: (chain?: string, propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/detectStokens/${chain}`,
  positionsOfOwner: (chain?: string, user?: string) => `user/${user}/positionsOfOwner/${chain}`,
  getStokenTokenURI: (chain?: string, sTokenId?: number) => `sTokenId/${sTokenId}/getStokenTokenURI/${chain}`,
  getStokenOwnerOf: (chain?: string, sTokenId?: string) => `sTokenId/${sTokenId}/getStokenOwnerOf/${chain}`,
  getStokenPositions: (chain?: string, sTokenId?: string) => `sTokenId/${sTokenId}/getStokenPositions/${chain}`,
  getStokenRewards: (chain?: string, sTokenId?: string) => `sTokenId/${sTokenId}/getStokenRewards/${chain}`,
  approve: (propertyAddress?: string, user?: string) => `propertyAddresses/${user}${propertyAddress}/approve`,
  depositToProperty: (propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/depositToProperty`,
  depositToPosition: (propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/depositToPosition`,
  withdrawByPosition: (propertyAddress?: string, user?: string) =>
    `propertyAddresses/${user}${propertyAddress}/withdrawByPosition`,
  migrateToSTokens: (sTokenId?: string) => `sTokenId/${sTokenId}/migrateToSTokens`,
  getTokenURI: (chain?: string, sTokenId?: string) => `sTokenId/${sTokenId}/getTokenURI/${chain}`,
  getStokenSymbol: (sTokenId?: string) => `sTokenId/${sTokenId}/getStokenSymbol`,
  getStokenHeldAt: (chain?: string, sTokenId?: number) => `sTokenId/${sTokenId}/getStokenHeldAt/${chain}`,
  enabledMarkets: (chain?: string) => `enabledMarkets/${chain}`,
  getAuthenticatedProperties: (chain?: string, marketAddress?: string) =>
    `getAuthenticatedProperties/${chain}/${marketAddress}`,
  useGetAssetsByProperties: (chain?: string, propertyAddress?: string) =>
    `useGetAssetsByProperties/${chain}/${propertyAddress}`
} as const
