import { useGetRewardCalculationResultAggregateQuery } from '@dev/graphql'

export const useAverageInterestRate = (metrics: string) => {
  const { data: rewardCalculationResultData } = useGetRewardCalculationResultAggregateQuery({
    variables: { metricsList: [metrics] }
  })
  const stakingReward = rewardCalculationResultData?.reward_calculation_result_aggregate.aggregate?.sum?.staking_reward
  const lockup = rewardCalculationResultData?.reward_calculation_result_aggregate.aggregate?.sum?.lockup
  return stakingReward && lockup ? stakingReward / lockup : 0
}
