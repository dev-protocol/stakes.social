export const WEB3_PROVIDER_ENDPOINT = process.env.IS_PREVIEW
  ? 'https://eth-mainnet.alchemyapi.io/v2/ZeWhYPhzncyM-pDIyX-WuifD1Iosc06s' // For Staging
  : process.env.NODE_ENV === 'production'
  ? 'https://eth-mainnet.alchemyapi.io/v2/0EvZQA7WvDYf40cz476eEIh348_PcZJu' // For Production build
  : 'https://eth-mainnet.alchemyapi.io/v2/p56_qS-3ABDzHGg9kQ-kyqqbQVNJmzUB' // For Local Development
