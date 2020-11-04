import { abi } from './abi'
import Web3 from 'web3'
import { Contract, EventData } from 'web3-eth-contract'
import { createContract } from 'src/fixtures/utility/contract-client'
import { getAccountAddress } from 'src/fixtures/wallet/utility'
import { toBigNumber, toEVMBigNumber } from 'src/fixtures/utility'
import { GEYSER_ETHDEV_V2_ADDRESS } from '../constants/address'
import { utils } from '@devprtcl/dev-kit-js'
import BigNumber from 'bignumber.js'

const { execute } = utils
const client: Map<string, Contract> = new Map()

export const getClient = (contractAddress = GEYSER_ETHDEV_V2_ADDRESS): [] | [Contract, Web3] => {
  if (typeof window === 'undefined') {
    return []
  }
  const { ethereum } = window
  if (!ethereum) {
    return []
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

export const totalStaked = async (): Promise<BigNumber> => {
  return (([contract]) =>
    contract
      ? execute({
          contract,
          method: 'totalStaked'
        })
      : Promise.resolve(''))(getClient()).then(toEVMBigNumber)
}

export const totalStakingShares = async (): Promise<BigNumber> => {
  return (([contract]) =>
    contract
      ? execute({
          contract,
          method: 'totalStakingShares'
        })
      : Promise.resolve(''))(getClient()).then(toEVMBigNumber)
}

export const stake = async (amount: BigNumber) => {
  return process.env.NODE_ENV === 'production'
    ? (([contract, client]) =>
        contract && client
          ? execute({
              contract,
              client,
              mutation: true,
              method: 'stake',
              args: [amount.toFixed(), '']
            })
          : Promise.resolve())(getClient())
    : new Promise(resolve => setTimeout(resolve, 3000))
}

export const unstake = async (amount: BigNumber) => {
  return process.env.NODE_ENV === 'production'
    ? (([contract, client]) =>
        contract && client
          ? execute({
              contract,
              client,
              mutation: true,
              method: 'unstake',
              args: [amount.toFixed(), '']
            })
          : Promise.resolve())(getClient())
    : new Promise(resolve => setTimeout(resolve, 3000))
}

export const totalStakedFor = async (): Promise<BigNumber> => {
  const address = await getAccountAddress()
  if (address === undefined) {
    return toEVMBigNumber(0)
  }
  return (([contract]) =>
    contract
      ? execute({
          contract,
          method: 'totalStakedFor',
          args: [address]
        })
      : Promise.resolve(''))(getClient()).then(toEVMBigNumber)
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
    contract
      ? execute<UnlockSchedule>({
          contract,
          method: 'unlockSchedules',
          args: [index.toString()]
        })
      : Promise.resolve({
          initialLockedShares: '0',
          unlockedShares: '0',
          lastUnlockTimestampSec: '0',
          endAtSec: '0',
          durationSec: '0'
        }))(getClient())
}

export const unlockScheduleCount = async (): Promise<number> => {
  return (([contract]) =>
    contract
      ? execute({
          contract,
          method: 'unlockScheduleCount'
        })
      : Promise.resolve(''))(getClient()).then(Number)
}

export const totalLocked = async (): Promise<BigNumber> => {
  return (([contract]) =>
    contract
      ? execute({
          contract,
          method: 'totalLocked'
        })
      : Promise.resolve(''))(getClient()).then(toEVMBigNumber)
}

export const totalUnlocked = async (): Promise<BigNumber> => {
  return (([contract]) =>
    contract
      ? execute({
          contract,
          method: 'totalUnlocked'
        })
      : Promise.resolve(''))(getClient()).then(toEVMBigNumber)
}

export const finalUnlockSchedules = async (): Promise<undefined | UnlockSchedule> => {
  const count = await unlockScheduleCount()
  const schedules = await Promise.all(new Array(count).fill(0).map((_, index) => unlockSchedules(index)))
  return schedules.length > 1
    ? schedules.reduce((a, c) => (toBigNumber(a.endAtSec).isGreaterThan(c.endAtSec) ? a : c))
    : undefined
}

export const unstakeQuery = async (amount: BigNumber): Promise<BigNumber> => {
  return (([contract]) =>
    contract
      ? execute({
          contract,
          method: 'unstakeQuery',
          args: [amount.toString()]
        })
      : Promise.resolve(''))(getClient()).then(toEVMBigNumber)
}

export const unlockTokens = async (): Promise<BigNumber> => {
  return (([contract]) =>
    contract
      ? execute({
          contract,
          method: 'unlockTokens'
        })
      : Promise.resolve(''))(getClient()).then(toEVMBigNumber)
}

export const allTokensClaimed = async (): Promise<EventData[]> => {
  return (([contract]) =>
    contract ? contract.getPastEvents('TokensClaimed', { fromBlock: 0, toBlock: 'latest' }) : Promise.resolve([]))(
    getClient()
  )
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
    contract
      ? execute<Accounting>({
          contract,
          method: 'updateAccounting'
        })
      : Promise.resolve({
          0: '0',
          1: '0',
          2: '0',
          3: '0',
          4: '0',
          5: '0'
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
