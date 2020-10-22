import { abi } from './abi'
import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'
import { createContract } from 'src/fixtures/utility/contract-client'
import { getAccountAddress } from 'src/fixtures/wallet/utility'
import { toBigNumber } from 'src/fixtures/utility'
import { GEYSER_ETHDEV_V2_ADDRESS } from '../constants/address'
import { utils } from '@devprtcl/dev-kit-js'
import BigNumber from 'bignumber.js'
import { INITIAL_SHARES_PER_TOKEN, ONE_MONTH_SECONDS } from '../constants/number'

const { execute } = utils
const client: Map<string, Contract> = new Map()

export const getClient = (contractAddress = GEYSER_ETHDEV_V2_ADDRESS): [Contract, Web3] => {
  const { ethereum } = window
  if (!ethereum) {
    throw new Error('Ethereum provider is not found')
  }
  const web3 = new Web3(ethereum)

  const stored = client.get(contractAddress)
  if (stored) {
    return [stored, web3]
  }

  const contract = (createContract(abi, contractAddress, web3) as unknown) as Contract
  client.set(contractAddress, contract)

  return [contract, web3]
}

export const totalStaked = async () => {
  return (([contract]) =>
    execute({
      contract,
      method: 'totalStaked'
    }))(getClient()).then(toBigNumber)
}

export const totalStakingShares = async () => {
  return (([contract]) =>
    execute({
      contract,
      method: 'totalStakingShares'
    }))(getClient()).then(toBigNumber)
}

// export const estimateReward = async (amount: BigNumber): Promise<BigNumber> => {
//   const [tStakingShares, tStaked, tUnlocked, { totalStakingShareSeconds }] = await Promise.all([
//     totalStakingShares(),
//     totalStaked(),
//     totalUnlocked(),
//     updateAccounting()
//   ])
//   const mintedStakingShares = tStakingShares.isZero()
//     ? tStakingShares.times(amount).div(tStaked)
//     : amount.times(INITIAL_SHARES_PER_TOKEN)
//   const newTotalStakingShareSeconds = toBigNumber(totalStakingShareSeconds).plus(
//     tStakingShares.times(ONE_MONTH_SECONDS)
//   )
//   const stakingSharesToBurn = tStakingShares.plus(mintedStakingShares).times(amount).div(tStaked.plus(amount))
//   let sharesLeftToBurn = toBigNumber(stakingSharesToBurn.toFixed())
//   let reward = toBigNumber(0)
//   while (sharesLeftToBurn.isGreaterThan(0)) {
//     if (mintedStakingShares.isLessThanOrEqualTo(sharesLeftToBurn)) {
//       reward = reward.plus(
//         tUnlocked.times(mintedStakingShares.times(ONE_MONTH_SECONDS)).div(newTotalStakingShareSeconds)
//       )
//       sharesLeftToBurn = sharesLeftToBurn.minus(mintedStakingShares)
//     } else {
//       reward = reward.plus(tUnlocked.times(sharesLeftToBurn.times(ONE_MONTH_SECONDS)).div(newTotalStakingShareSeconds))
//       sharesLeftToBurn = toBigNumber(0)
//     }
//   }

//   return reward
// }

export const stake = async (amount: BigNumber) => {
  return process.env.NODE_ENV === 'production'
    ? (([contract, client]) =>
        execute({
          contract,
          client,
          mutation: true,
          method: 'stake',
          args: [amount.toFixed(), '']
        }))(getClient())
    : new Promise(resolve => setTimeout(resolve, 3000))
}

export const unstake = async (amount: BigNumber) => {
  return process.env.NODE_ENV === 'production'
    ? (([contract, client]) =>
        execute({
          contract,
          client,
          mutation: true,
          method: 'unstake',
          args: [amount.toFixed(), '']
        }))(getClient())
    : new Promise(resolve => setTimeout(resolve, 3000))
}

export const totalStakedFor = async () => {
  const address = await getAccountAddress()
  if (address === undefined) {
    return toBigNumber(0)
  }
  return (([contract]) =>
    execute({
      contract,
      method: 'totalStakedFor',
      args: [address]
    }))(getClient()).then(toBigNumber)
}

type UnlockSchedule = {
  initialLockedShares: string
  unlockedShares: string
  lastUnlockTimestampSec: string
  endAtSec: string
  durationSec: string
}

export const unlockSchedules = async (index: number): Promise<UnlockSchedule> => {
  return (([contract]) =>
    execute<UnlockSchedule>({
      contract,
      method: 'unlockSchedules',
      args: [index.toString()]
    }))(getClient())
}

export const unlockScheduleCount = async (): Promise<number> => {
  return (([contract]) =>
    execute({
      contract,
      method: 'unlockScheduleCount'
    }))(getClient()).then(Number)
}

export const totalLocked = async (): Promise<BigNumber> => {
  return (([contract]) =>
    execute({
      contract,
      method: 'totalLocked'
    }))(getClient()).then(toBigNumber)
}

export const totalUnlocked = async (): Promise<BigNumber> => {
  return (([contract]) =>
    execute({
      contract,
      method: 'totalUnlocked'
    }))(getClient()).then(toBigNumber)
}

export const finalUnlockSchedules = async (): Promise<UnlockSchedule> => {
  const count = await unlockScheduleCount()
  const schedules = await Promise.all(new Array(count).fill(0).map((_, index) => unlockSchedules(index)))
  return schedules.reduce((a, c) => (toBigNumber(a.endAtSec).isGreaterThan(c.endAtSec) ? a : c))
}

export const unstakeQuery = async (amount: BigNumber) => {
  return (([contract]) =>
    execute({
      contract,
      method: 'unstakeQuery',
      args: [amount.toString()]
    }))(getClient()).then(toBigNumber)
}

type Accounting = {
  0: string
  1: string
  2: string
  3: string
  4: string
  5: string
}

type AccountingObject = {
  totalLocked: string
  totalUnlocked: string
  totalsStakingShareSeconds: string
  totalStakingShareSeconds: string
  totalUserRewards: string
  now: string
}

export const updateAccounting = async (): Promise<AccountingObject> => {
  return (([contract]) =>
    execute<Accounting>({
      contract,
      method: 'updateAccounting'
    }))(
    getClient()
  ).then(
    ({
      0: totalLocked,
      1: totalUnlocked,
      2: totalsStakingShareSeconds,
      3: totalStakingShareSeconds,
      4: totalUserRewards,
      5: now
    }) => ({ totalLocked, totalUnlocked, totalsStakingShareSeconds, totalStakingShareSeconds, totalUserRewards, now })
  )
}
