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
  const _blocks = rewardCalculationResultData?.reward_calculation_result?.reduce(
    (a, c) => a + c.allocation?.condition?.blocks,
    0
  )
  const block = _blocks || 1

  return stakingReward && lockup ? stakingReward.div(block).times(172800).div(lockup).times(100) : new BigNumber(0)
}
