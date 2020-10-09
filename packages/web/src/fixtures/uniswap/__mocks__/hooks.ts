import BigNumber from 'bignumber.js'

export const useGetEthPrice = () => {
  return {
    data: new BigNumber('234.0')
  }
}

export const useGetDevEthPrice = () => {
  return {
    data: new BigNumber('0.12345')
  }
}

export const useGetDevPrice = () => {
  return {
    data: new BigNumber('2.0')
  }
}
