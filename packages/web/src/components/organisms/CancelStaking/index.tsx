import React, { useCallback } from 'react'
import { useWithdrawStaking } from 'src/fixtures/dev-kit/hooks'
import { CancelForm } from 'src/components/molecules/CancelForm'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { whenDefined, toBigNumber } from 'src/fixtures/utility'
import { getMyStakingAmount } from 'src/fixtures/dev-kit/client'
import { message } from 'antd'

interface Props {
  className?: string
  propertyAddress: string
}

export const CancelStaking = ({ className, propertyAddress }: Props) => {
  const { withdrawStaking } = useWithdrawStaking()
  const { web3 } = useProvider()

  const handleCancelStaking = useCallback(() => {
    whenDefined(web3, x => {
      getMyStakingAmount(x, propertyAddress).then(amount => {
        if (amount) {
          withdrawStaking(propertyAddress, toBigNumber(amount))
        } else {
          message.error('Please connect to your wallet.')
        }
      })
    })
  }, [propertyAddress, withdrawStaking, web3])

  return <CancelForm className={className} onClickCancel={handleCancelStaking} />
}
