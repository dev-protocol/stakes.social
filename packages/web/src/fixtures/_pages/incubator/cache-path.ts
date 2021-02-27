import { Incubator } from 'src/fixtures/dev-for-apps/utility'

export const SWRCachePath = {
  getReward: (repos: string) => `incubator/${repos}/getReward`,
  getEntireRewards: (incubators?: Incubator[]) =>
    `incubator/${incubators ? JSON.stringify(incubators) : ''}/getEntireRewards`
} as const
