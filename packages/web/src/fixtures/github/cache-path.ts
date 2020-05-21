export const SWRCachePath = {
  getMarketInformation: (marketAddress: string) =>
    `https://raw.githubusercontent.com/dev-protocol/assets/master/market/${marketAddress}/info.json`
} as const
