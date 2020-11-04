import BigNumber from 'bignumber.js'

export const useApprove = () => {
  return async (spender: string, value: BigNumber) => console.log(spender, value)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useTheGraph = (key: string = '') => {
  return {
    data: {
      data: {
        pair: {
          reserveUSD: '100000',
          totalSupply: '100000',
          reserve0: '100000'
        }
      }
    }
  }
}
