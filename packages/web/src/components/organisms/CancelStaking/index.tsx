import React, { useState, useCallback } from 'react'
import { useWithdrawStaking, useCancelStaking } from 'src/fixtures/dev-kit/hooks'
import { CancelForm } from 'src/components/molecules/CancelForm'
import { useBlockNumberStream } from 'src/fixtures/wallet/hooks'
import { getWithdrawalStatus } from 'src/fixtures/dev-kit/client'
import { useEffect } from 'react'

interface Props {
  className?: string
  propertyAddress: string
  label?: string
}

export const CancelStaking = ({ className, propertyAddress, label }: Props) => {
  const [withdrawable, setWithdrawable] = useState(false)
  const [isCountingBlocks, setIsCountingBlocks] = useState(false)
  const [remainBlocks, setRemainBlocks] = useState(0)
  const { cancel } = useCancelStaking()
  const { withdrawStaking } = useWithdrawStaking()
  const { blockNumber } = useBlockNumberStream(isCountingBlocks)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkWithdrawable = useCallback(
    () =>
      getWithdrawalStatus(propertyAddress).then(withdrawStatus => {
        setWithdrawable(
          withdrawable ? withdrawable : Boolean(withdrawStatus && blockNumber && withdrawStatus <= blockNumber)
        )
        setRemainBlocks((withdrawStatus || 0) - (blockNumber || 0))
        withdrawStatus && !withdrawable ? setIsCountingBlocks(true) : setIsCountingBlocks(false)
      }),
    [propertyAddress, withdrawable, blockNumber]
  )
  const handleCancelStaking = useCallback(() => {
    cancel(propertyAddress)
      .then(() => {
        setIsCountingBlocks(true)
      })
      .catch(() => {
        setIsCountingBlocks(false)
        setWithdrawable(false)
      })
  }, [propertyAddress, cancel])
  useEffect(() => {
    checkWithdrawable()
  }, [blockNumber, checkWithdrawable])
  const handleWithdrawStaking = useCallback(() => {
    withdrawStaking(propertyAddress)
  }, [propertyAddress, withdrawStaking])

  return (
    <CancelForm
      className={className}
      onClickCancel={handleCancelStaking}
      onClickWithdraw={handleWithdrawStaking}
      remainBlocks={remainBlocks}
      isCompleted={withdrawable}
      label={label}
    />
  )
}
