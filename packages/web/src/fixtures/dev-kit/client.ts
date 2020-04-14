import { contractFactory } from '@devprtcl/dev-kit-js'

export const newClient = () => {
  const { ethereum } = window
  if (ethereum) {
    return contractFactory(ethereum)
  }
  return undefined
}
