import { useGetRewardCalculationResultAggregateQuery } from '@dev/graphql'
import BigNumber from 'bignumber.js'

export const useAverageInterestRate = (metrics: string) => {
  const { data: rewardCalculationResultData } = useGetRewardCalculationResultAggregateQuery({
    variables: { metricsList: [metrics] }
  })
  const stakingReward = rewardCalculationResultData?.reward_calculation_result_aggregate.aggregate?.sum?.staking_reward
    ? new BigNumber(rewardCalculationResultData?.reward_calculation_result_aggregate.aggregate?.sum?.staking_reward)
    : undefined
  const lockup = rewardCalculationResultData?.reward_calculation_result_aggregate.aggregate?.sum?.lockup
    ? new BigNumber(rewardCalculationResultData?.reward_calculation_result_aggregate.aggregate?.sum?.lockup)
    : undefined

  return stakingReward && lockup ? lockup.div(stakingReward).times(100) : new BigNumber(0)
}
