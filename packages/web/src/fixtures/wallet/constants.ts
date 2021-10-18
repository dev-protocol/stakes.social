export const WEB3_PROVIDER_ENDPOINT_HOSTS = {
  MAIN: 'https://eth-mainnet.alchemyapi.io/v2',
  ROPSTEN: 'https://eth-ropsten.alchemyapi.io/v2',
  ARB_ONE: 'https://arb-mainnet.g.alchemy.com/v2',
  ARB_RINKEBY: 'https://arb-rinkeby.g.alchemy.com/v2'
}

export const WEB3_PROVIDER_ENDPOINT_KEY = process.env.IS_PREVIEW
  ? 'ZeWhYPhzncyM-pDIyX-WuifD1Iosc06s' // For Staging
  : process.env.NODE_ENV === 'production'
  ? '0EvZQA7WvDYf40cz476eEIh348_PcZJu' // For Production build
  : 'p56_qS-3ABDzHGg9kQ-kyqqbQVNJmzUB' // For Local Development
