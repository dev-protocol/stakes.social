import { createPolicySetContract } from '@devprtcl/dev-kit-js/esm/policy-set'
import { CustomOptions } from '@devprtcl/dev-kit-js/esm/option'
import Web3 from 'web3'

export const getPolicySetContract = (client: Web3, address?: string, options?: CustomOptions) =>
  createPolicySetContract(client)(address, options)
