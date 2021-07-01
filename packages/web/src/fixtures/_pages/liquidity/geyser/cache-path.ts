export const SWRCachePath = {
  useTotalStaked: (address: string, user?: string) => `geyser/${user}/${address}/useTotalStaked`,
  getTotalLocked: (address: string, user?: string) => `geyser/${user}/${address}/getTotalLocked`,
  getTotalUnlocked: (address: string, user?: string) => `geyser/${user}/${address}/getTotalUnlocked`,
  getFinalUnlockSchedules: (address: string, user?: string) => `geyser/${user}/${address}/getFinalUnlockSchedules`,
  getTotalStakingShares: (address: string, user?: string) => `geyser/${user}/${address}/getTotalStakingShares`,
  getUpdateAccounting: (address: string, user?: string) => `geyser/${user}/${address}/getUpdateAccounting`,
  useAllTokensClaimed: (address: string, user?: string) => `geyser/${user}/${address}/useAllTokensClaimed`,
  allTokensLocked: (address: string) => `geyser/${address}/${address}/allTokensLocked`,
  useIsAlreadyFinished: (address: string, time: number) => `geyser/${time}/${address}/useIsAlreadyFinished`,
  useRewardMultiplier: (address: string, user: string) => `geyser/${user}/${address}/useRewardMultiplier`,
  getBlock: (address: string, block?: number) => `geyser/${block}/${address}/getBlock`,
  getBonusPeriodSec: (address: string, user?: string) => `geyser/${user}/${address}/bonusPeriodSec`,
  getStartBonus: (address: string, user?: string) => `geyser/${user}/${address}/startBonus`,
  getStaked: (address: string, user?: string) => `geyser/${user}/${address}/getStaked`,
  totalStakedFor: (address: string, user?: string) => `geyser/${user}/${address}/totalStakedFor`,
  unstakeQuery: (address: string, amount?: string) => `geyser/${amount}/${address}/unstakeQuery`
} as const
