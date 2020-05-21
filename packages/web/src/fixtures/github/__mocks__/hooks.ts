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
