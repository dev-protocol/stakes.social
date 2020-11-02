export const SWRCachePath = {
  useTotalStaked: `geyser/useTotalStaked`,
  getTotalLocked: `geyser/getTotalLocked`,
  getTotalUnlocked: `geyser/getTotalUnlocked`,
  getFinalUnlockSchedules: `geyser/getFinalUnlockSchedules`,
  getTotalStakingShares: `geyser/getTotalStakingShares`,
  getUpdateAccounting: `geyser/getUpdateAccounting`,
  useAllTokensClaimed: `geyser/useAllTokensClaimed`,
  useIsAlreadyFinished: (time: number) => `geyser/${time}/useIsAlreadyFinished`
} as const
