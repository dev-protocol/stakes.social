import BigNumber from 'bignumber.js'
import { toBigNumber } from 'src/fixtures/utility'

export const useTotalRewards = () => {
  return {
    data: toBigNumber(100000)
  }
}

export const useStake = () => {
  return async (amount: BigNumber) => console.log(amount)
}

export const useUnstake = () => {
  return async (amount: BigNumber) => console.log(amount)
}

export const useAllTokensClaimed = () => {
  return {
    data: toBigNumber(100000)
  }
}

export const useTotalStakingShares = () => {
  return {
    data: toBigNumber(100000)
  }
}

export const useTotalStaked = () => {
  return {
    data: toBigNumber(100000)
  }
}

export const useUpdateAccounting = () => {
  return {
    data: {
      totalLocked: '100000',
      totalUnlocked: '100000',
      totalsStakingShareSeconds: '100000',
      totalStakingShareSeconds: '100000',
      totalUserRewards: '100000',
      now: '100000'
    }
  }
}

export const useAllSchedules = () => {
  return {
    data: [
      {
        initialLockedShares: '100000',
        unlockedShares: '100000',
        lastUnlockTimestampSec: '100000',
        endAtSec: '100000',
        durationSec: '90000'
      }
    ]
  }
}

export const useFinalUnlockSchedules = () => {
  return {
    data: {
      initialLockedShares: '100000',
      unlockedShares: '100000',
      lastUnlockTimestampSec: '100000',
      endAtSec: '100000',
      durationSec: '100000'
    }
  }
}

export const useEntirePeriod = () => {
  return {
    data: 100000
  }
}

export const useEstimateReward = () => {
  return async (args: any) => console.log(args)
}

export const useIsAlreadyFinished = () => {
  return [false]
}

export const useRewardMultiplier = () => {
  return {
    data: 1,
    max: 5
  }
}

export const useTotalStakedFor = () => {
  return {
    data: toBigNumber('10000'),
    mutate: () => {}
  }
}

export const useMutateDepositDependence = () => {
  return {
    mutate: () => {}
  }
}

export const useAPY = () => {
  return {
    data: toBigNumber(1000)
  }
}

export const useUnstakeQuery = () => {
  return {
    data: toBigNumber(10000)
  }
}
