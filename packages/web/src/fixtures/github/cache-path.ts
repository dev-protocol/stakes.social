export const SWRCachePath = {
  getMarketInformation: (marketAddress: string) =>
    `https://raw.githubusercontent.com/dev-protocol/assets/master/market/${marketAddress}/info.json`,
  getPolicyInformation: (policyAddress: string) =>
    `https://raw.githubusercontent.com/dev-protocol/assets/master/market/${policyAddress}/info.json`
} as const
