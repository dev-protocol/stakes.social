import { useGetRewardCalculationResultAggregateQuery } from '@dev/graphql'

export const useAverageInterestRate = (metrics: string) => {
  const { data: rewardCalculationResultData } = useGetRewardCalculationResultAggregateQuery({
    variables: { metricsList: [metrics] }
  })
  const lockup = rewardCalculationResultData?.reward_calculation_result_aggregate.aggregate?.sum?.lockup
  const stakingReward = rewardCalculationResultData?.reward_calculation_result_aggregate.aggregate?.sum?.staking_reward
  return lockup && stakingReward ? lockup / stakingReward : 0
}
