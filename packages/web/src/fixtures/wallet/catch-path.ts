export const cachePath = {
  connectWallet: () => `connectWallet`,
  getAccountAddress: () => `getAccountAddress`,
  getBlockNumber: () => `getBlockNumber`,
  getBlock: (blockNumber: string | number) => `getBlock/${blockNumber}`
}
