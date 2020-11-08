export const SWRCachePath = {
  useTotalStaked: `geyser/useTotalStaked`,
  getTotalLocked: `geyser/getTotalLocked`,
  getTotalUnlocked: `geyser/getTotalUnlocked`,
  getFinalUnlockSchedules: `geyser/getFinalUnlockSchedules`,
  getTotalStakingShares: `geyser/getTotalStakingShares`,
  getUpdateAccounting: `geyser/getUpdateAccounting`,
  useAllTokensClaimed: `geyser/useAllTokensClaimed`,
  useIsAlreadyFinished: (time: number) => `geyser/${time}/useIsAlreadyFinished`,
  useRewardMultiplier: (user: string) => `geyser/${user}/useRewardMultiplier`,
  getBlock: (block?: number) => `geyser/${block}/getBlock`,
  getBonusPeriodSec: `geyser/bonusPeriodSec`,
  getStartBonus: `geyser/startBonus`,
  getStaked: (user?: string) => `geyser/${user}/getStaked`,
  totalStakedFor: (user?: string) => `geyser/${user}/totalStakedFor`,
  unstakeQuery: (amount?: string) => `geyser/${amount}/unstakeQuery`
} as const
