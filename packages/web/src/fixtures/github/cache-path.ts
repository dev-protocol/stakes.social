export const SWRCachePath = {
  getMarketInformation: (marketAddress: string) =>
    `https://raw.githubusercontent.com/dev-protocol/assets/main/market/${marketAddress}/info.json`,
  getPolicyInformation: (policyAddress: string) =>
    `https://raw.githubusercontent.com/dev-protocol/assets/main/market/${policyAddress}/info.json`
} as const
