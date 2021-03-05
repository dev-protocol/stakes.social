export const useCurrency = () => {
  return { currency: 'DEV', toCurrency: (x: any) => x, devToUSD: (x: any) => x }
}
