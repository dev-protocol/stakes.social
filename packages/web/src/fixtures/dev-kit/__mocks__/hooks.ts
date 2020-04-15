import BigNumber from 'bignumber.js'
export const useGetTotalRewardsAmount = () => {
  return { totalRewardsAmount: new BigNumber(10000) }
}

export const useGetTotalStakingAmount = () => {
  return { totalStakingAmount: new BigNumber(10000) }
}

export const useGetMyStakingAmount = () => {
  return { myStakingAmount: new BigNumber(5000) }
}

export const useWithdrawHolderReward = () => {
  return { withdraw: () => {} }
}
