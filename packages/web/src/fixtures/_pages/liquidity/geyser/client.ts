import { abi } from './abi'
import Web3 from 'web3'
import { Contract, EventData } from 'web3-eth-contract'
import { createContract } from 'src/fixtures/utility/contract-client'
import { toEVMBigNumber } from 'src/fixtures/utility'
import { utils } from '@devprotocol/alias-legacy-dev-kit'
import BigNumber from 'bignumber.js'

const { execute } = utils
const client: Map<string, WeakMap<Web3, Contract>> = new Map()

export const getContract = (web3: Web3, contractAddress: string): Contract => {
  const cache = client.get(contractAddress)
  const fromCache = cache?.get(web3)
  if (fromCache) {
    return fromCache
  }

  const contract = createContract(abi, contractAddress, web3) as unknown as Contract
  client.set(contractAddress, cache ? cache.set(web3, contract) : new WeakMap([[web3, contract]]))

  return contract
}

export const totalStaked = async (client: Web3, geyserAddress: string): Promise<BigNumber> => {
  return (contract =>
    contract
      ? execute({
          contract,
          method: 'totalStaked'
        })
      : Promise.resolve(''))(getContract(client, geyserAddress)).then(toEVMBigNumber)
}

export const totalStakingShares = async (client: Web3, geyserAddress: string): Promise<BigNumber> => {
  return (contract =>
    contract
      ? execute({
          contract,
          method: 'totalStakingShares'
        })
      : Promise.resolve(''))(getContract(client, geyserAddress)).then(toEVMBigNumber)
}

export const stake = async (client: Web3, amount: BigNumber, geyserAddress: string) => {
  return (contract =>
    contract
      ? execute({
          contract,
          client,
          mutation: true,
          method: 'stake',
          args: [amount.toFixed(), '0x0']
        })
      : Promise.resolve())(getContract(client, geyserAddress))
}

export const unstake = async (client: Web3, amount: BigNumber, geyserAddress: string) => {
  return (contract =>
    contract
      ? execute({
          contract,
          client,
          mutation: true,
          method: 'unstake',
          args: [amount.toFixed(), '0x0']
        })
      : Promise.resolve())(getContract(client, geyserAddress))
}

export const totalStakedFor = async (client: Web3, address: string, geyserAddress: string): Promise<BigNumber> => {
  return (contract =>
    contract
      ? execute({
          contract,
          method: 'totalStakedFor',
          args: [address]
        })
      : Promise.resolve(''))(getContract(client, geyserAddress)).then(toEVMBigNumber)
}

export type UnlockSchedule = {
  initialLockedShares: string
  unlockedShares: string
  lastUnlockTimestampSec: string
  endAtSec: string
  durationSec: string
}

export const unlockSchedules = async (client: Web3, index: number, geyserAddress: string): Promise<UnlockSchedule> => {
  return (contract =>
    contract
      ? execute<UnlockSchedule>({
          contract,
          method: 'unlockSchedules',
          args: [index.toFixed()]
        })
      : Promise.resolve({
          initialLockedShares: '0',
          unlockedShares: '0',
          lastUnlockTimestampSec: '0',
          endAtSec: '0',
          durationSec: '0'
        }))(getContract(client, geyserAddress))
}

export const unlockScheduleCount = async (client: Web3, geyserAddress: string): Promise<number> => {
  return (contract =>
    contract
      ? execute({
          contract,
          method: 'unlockScheduleCount'
        })
      : Promise.resolve(''))(getContract(client, geyserAddress)).then(Number)
}

export const totalLocked = async (client: Web3, geyserAddress: string): Promise<BigNumber> => {
  return (contract =>
    contract
      ? execute({
          contract,
          method: 'totalLocked'
        })
      : Promise.resolve(''))(getContract(client, geyserAddress)).then(toEVMBigNumber)
}

export const totalUnlocked = async (client: Web3, geyserAddress: string): Promise<BigNumber> => {
  return (contract =>
    contract
      ? execute({
          contract,
          method: 'totalUnlocked'
        })
      : Promise.resolve(''))(getContract(client, geyserAddress)).then(toEVMBigNumber)
}

export const allSchedules = async (client: Web3, geyserAddress: string): Promise<undefined | UnlockSchedule[]> => {
  const count = await unlockScheduleCount(client, geyserAddress)
  const schedules = await Promise.all(
    new Array(count).fill(0).map((_, index) => unlockSchedules(client, index, geyserAddress))
  )

  return schedules.length > 0 ? schedules : undefined
}

export const unstakeQuery = async (client: Web3, amount: BigNumber, geyserAddress: string): Promise<BigNumber> => {
  return (contract =>
    contract && client.currentProvider
      ? execute({
          contract,
          client,
          method: 'unstakeQuery',
          args: [amount.toFixed()]
        })
      : Promise.resolve(''))(getContract(client, geyserAddress)).then(toEVMBigNumber)
}

export const unlockTokens = async (client: Web3, geyserAddress: string): Promise<BigNumber> => {
  return (contract =>
    contract
      ? execute({
          contract,
          method: 'unlockTokens'
        })
      : Promise.resolve(''))(getContract(client, geyserAddress)).then(toEVMBigNumber)
}

export const allTokensLocked = async (client: Web3, geyserAddress: string): Promise<EventData[]> => {
  return (contract =>
    contract ? contract.getPastEvents('TokensLocked', { fromBlock: 0, toBlock: 'latest' }) : Promise.resolve([]))(
    getContract(client, geyserAddress)
  )
}

export const allTokensClaimed = async (client: Web3, geyserAddress: string): Promise<EventData[]> => {
  return (contract =>
    contract ? contract.getPastEvents('TokensClaimed', { fromBlock: 0, toBlock: 'latest' }) : Promise.resolve([]))(
    getContract(client, geyserAddress)
  )
}

export const getStaked = async (client: Web3, user: string, geyserAddress: string): Promise<EventData[]> => {
  return (contract =>
    contract
      ? contract.getPastEvents('Staked', { filter: { user }, fromBlock: 0, toBlock: 'latest' })
      : Promise.resolve([]))(getContract(client, geyserAddress))
}

export const bonusPeriodSec = async (client: Web3, geyserAddress: string): Promise<BigNumber> => {
  return (contract =>
    contract
      ? execute({
          contract,
          method: 'bonusPeriodSec'
        })
      : Promise.resolve(''))(getContract(client, geyserAddress)).then(toEVMBigNumber)
}

export const startBonus = async (client: Web3, geyserAddress: string): Promise<BigNumber> => {
  return (contract =>
    contract
      ? execute({
          contract,
          method: 'startBonus'
        })
      : Promise.resolve(''))(getContract(client, geyserAddress)).then(toEVMBigNumber)
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

export const updateAccounting = async (client: Web3, geyserAddress: string): Promise<AccountingObject> => {
  return (contract =>
    contract && client.currentProvider
      ? execute<Accounting>({
          contract,
          client,
          method: 'updateAccounting'
        })
      : Promise.resolve({
          0: '0',
          1: '0',
          2: '0',
          3: '0',
          4: '0',
          5: '0'
        }))(getContract(client, geyserAddress)).then(
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
