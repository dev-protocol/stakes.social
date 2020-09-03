export const useGetMarketInformation = () => {
  return {
    data: {
      name: 'npm',
      description: 'Marketize the number of downloads of public npm packages.',
      asset: {
        authentication: 'Your npm package',
        calculation: 'Number of downloads',
        usingKhaos: false
      }
    }
  }
}
export const useGetMarkets = () => {
  return {
    data: ['0x34A7AdC94C4D41C3e3469F98033B372cB2fAf318']
  }
}
