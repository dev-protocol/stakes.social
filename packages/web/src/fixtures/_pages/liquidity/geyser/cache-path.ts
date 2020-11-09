export const SWRCachePath = {
  useTotalStaked: (user?: string) => `geyser/${user}/useTotalStaked`,
  getTotalLocked: (user?: string) => `geyser/${user}/getTotalLocked`,
  getTotalUnlocked: (user?: string) => `geyser/${user}/getTotalUnlocked`,
  getFinalUnlockSchedules: (user?: string) => `geyser/${user}/getFinalUnlockSchedules`,
  getTotalStakingShares: (user?: string) => `geyser/${user}/getTotalStakingShares`,
  getUpdateAccounting: (user?: string) => `geyser/${user}/getUpdateAccounting`,
  useAllTokensClaimed: (user?: string) => `geyser/${user}/useAllTokensClaimed`,
  useIsAlreadyFinished: (time: number) => `geyser/${time}/useIsAlreadyFinished`,
  useRewardMultiplier: (user: string) => `geyser/${user}/useRewardMultiplier`,
  getBlock: (block?: number) => `geyser/${block}/getBlock`,
  getBonusPeriodSec: (user?: string) => `geyser/${user}/bonusPeriodSec`,
  getStartBonus: (user?: string) => `geyser/${user}/startBonus`,
  getStaked: (user?: string) => `geyser/${user}/getStaked`,
  totalStakedFor: (user?: string) => `geyser/${user}/totalStakedFor`
} as const
