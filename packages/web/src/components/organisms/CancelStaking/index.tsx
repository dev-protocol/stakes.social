import React, { useState, useCallback } from 'react'
import { useWithdrawStaking, useCancelStaking } from 'src/fixtures/dev-kit/hooks'
import { CancelForm } from 'src/components/molecules/CancelForm'
import { useBlockNumberStream, useProvider } from 'src/fixtures/wallet/hooks'
import { whenDefined } from 'src/fixtures/utility'
import { getWithdrawalStatus } from 'src/fixtures/dev-kit/client'
import { useEffect } from 'react'

interface Props {
  className?: string
  propertyAddress: string
}

export const CancelStaking = ({ className, propertyAddress }: Props) => {
  const [withdrawable, setWithdrawable] = useState(false)
  const [isCountingBlocks, setIsCountingBlocks] = useState(false)
  const [remainBlocks, setRemainBlocks] = useState(0)
  const { cancel } = useCancelStaking()
  const { withdrawStaking } = useWithdrawStaking()
  const { blockNumber } = useBlockNumberStream(isCountingBlocks)
  const { web3 } = useProvider()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkWithdrawable = useCallback(
    () =>
      whenDefined(web3, x => {
        getWithdrawalStatus(x, propertyAddress).then(withdrawStatus => {
          setWithdrawable(
            withdrawable ? withdrawable : Boolean(withdrawStatus && blockNumber && withdrawStatus <= blockNumber)
          )
          setRemainBlocks((withdrawStatus || 0) - (blockNumber || 0))
          withdrawStatus && !withdrawable ? setIsCountingBlocks(true) : setIsCountingBlocks(false)
        })
      }),
    [propertyAddress, withdrawable, blockNumber, web3]
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
    />
  )
}
