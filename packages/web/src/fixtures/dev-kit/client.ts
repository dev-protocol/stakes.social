import { contractFactory } from '@dev-protocol/dev-kit-js'

export const NewClient = () => {
  console.log(`teaetateatea`)
  const { ethereum } = window
  if (ethereum) {
    return contractFactory(ethereum)
  }

  return undefined
}
