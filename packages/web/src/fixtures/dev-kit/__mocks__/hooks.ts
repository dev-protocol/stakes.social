import BigNumber from 'bignumber.js'
import { toBigNumber } from 'src/fixtures/utility'
export const useGetTotalRewardsAmount = () => {
  return { totalRewardsAmount: new BigNumber(10000) }
}

export const useGetTotalStakingAmount = () => {
  return { totalStakingAmount: new BigNumber(10000) }
}

export const useGetMyHolderAmount = () => {
  return { myHolderAmount: new BigNumber(6000) }
}

export const useGetMyStakingRewardAmount = () => {
  return { myStakingRewardAmount: new BigNumber(5000), dev: new BigNumber(3000) }
}

export const useGetMyStakingAmount = () => {
  return { myStakingAmount: new BigNumber(5000) }
}

export const useWithdrawHolderReward = () => {
  return { withdraw: () => {} }
}

export const useWithdrawStakingReward = () => {
  return { withdrawStakingReward: () => {} }
}

export const useWithdrawStaking = () => {
  return { withdrawStaking: () => {} }
}

export const useStake = () => {
  return { stake: () => {} }
}

export const useCancelStaking = () => {
  return { cancel: () => {} }
}

export const useStakingShare = () => {
  return { stakingShare: 0.2553481 }
}

export const useCreateProperty = () => {
  return { createProperty: () => {} }
}

export const useMarketScheme = () => {
  return { marketScheme: () => {} }
}

export const useAuthenticate = () => {
  return { authenticate: () => {} }
}

export const useCreateAndAuthenticate = () => {
  return { createAndAuthenticate: () => {} }
}

export const useAPY = () => {
  return { apy: new BigNumber(0.435) }
}

export const useAnnualSupplyGrowthRatio = () => {
  return { apy: new BigNumber(0.676) }
}

export const useGetPolicyAddressesList = () => {
  return { getPolicyAddressesList: async () => {} }
}

export const usePropertyAuthor = (propertyAddress?: string) => {
  return { author: `${propertyAddress}-author` }
}

export const useBalanceOf = () => {
  return { amount: toBigNumber(10), currency: 'DEV' }
}

export const useAllClaimedRewards = () => {
  return { amount: toBigNumber(10), currency: 'DEV' }
}

export const usePropertyName = (propertyAddress?: string) => {
  return { name: `${propertyAddress}-name` }
}

export const useBalanceOfProperty = () => {
  return { balance: toBigNumber(1000) }
}
