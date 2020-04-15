export const isAvailableWallet = () => (window?.ethereum ? true : false)

export const getAccountAddress = () => {
  const { ethereum } = window
  if (ethereum) {
    return ethereum.selectedAddress
  }
  return undefined
}
