import React, { useCallback } from 'react'
import { useWithdrawStaking } from 'src/fixtures/dev-kit/hooks'
import { CancelForm } from 'src/components/molecules/CancelForm'
import { getMyStakingAmount } from 'src/fixtures/dev-kit/client'
import { toBigNumber } from 'src/fixtures/utility'
import { message } from 'antd'

interface Props {
  className?: string
  propertyAddress: string
}

export const CancelStaking = ({ className, propertyAddress }: Props) => {
  const { withdrawStaking } = useWithdrawStaking()

  const handleCancelStaking = useCallback(() => {
    getMyStakingAmount(propertyAddress).then(amount => {
      if (amount) {
        withdrawStaking(propertyAddress, toBigNumber(amount))
      } else {
        message.error('Please connect to your wallet.')
      }
    })
  }, [propertyAddress, withdrawStaking])

  return <CancelForm className={className} onClickCancel={handleCancelStaking} />
}
