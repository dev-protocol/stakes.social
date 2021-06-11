import React, { useCallback, useMemo } from 'react'
import styled from 'styled-components'
import {
  useGetMyHolderAmount,
  useWithdrawHolderReward,
  useGetEstimateGas4WithdrawHolderAmount
} from 'src/fixtures/dev-kit/hooks'
import { whenDefinedAll } from 'src/fixtures/utility'
import { useGetEthPrice } from 'src/fixtures/uniswap/hooks'
import { TransactForm } from 'src/components/molecules/TransactForm'
import { FormContainer } from 'src/components/molecules/TransactForm/FormContainer'
import { Estimated } from 'src/components/molecules/TransactForm/Estimated'
import { EstimatedGas } from 'src/components/molecules/TransactForm/EstimatedGas'
import { EstimatedGasNotes } from 'src/components/molecules/EstimatedGasNotes'

interface Props {
  className?: string
  title?: string
  propertyAddress: string
}

const EstimateGasUSD = styled.span`
  font-size: 0.9em;
  color: #a0a0a0;
`

export const WithdrawalForHolders = ({ className, title, propertyAddress }: Props) => {
  const { myHolderAmount } = useGetMyHolderAmount(propertyAddress)
  const { withdrawHolder } = useWithdrawHolderReward()
  const { estimateGas } = useGetEstimateGas4WithdrawHolderAmount(propertyAddress)
  const withdraw = useCallback(() => {
    withdrawHolder(propertyAddress)
  }, [withdrawHolder, propertyAddress])
  const Label = useMemo(
    () => (title ? () => <label htmlFor="withdrawalForHolders">{title}</label> : () => <></>),
    [title]
  )
  const { data: ethPrice } = useGetEthPrice()
  const estimateGasUSD = useMemo(
    () => whenDefinedAll([estimateGas, ethPrice], ([gas, eth]) => gas.multipliedBy(eth)),
    [estimateGas, ethPrice]
  )

  return (
    <FormContainer>
      <Label />
      <TransactForm
        className={className}
        id="withdrawalForHolders"
        enterButton="Withdraw"
        value={myHolderAmount?.toFixed()}
        onSearch={withdraw}
        suffix="DEV"
      ></TransactForm>
      <Estimated title="Withdrawable Amount">{<p>{myHolderAmount?.toFixed() || 0} DEV</p>}</Estimated>
      <EstimatedGasNotes>
        <EstimatedGas title="Gas Fee (this is prediction value)" size="small">
          {
            <p>
              {estimateGas ? estimateGas?.toFixed(6) : '-'} ETH
              <EstimateGasUSD>{estimateGasUSD ? ` $${estimateGasUSD.toFixed(2)}` : ''}</EstimateGasUSD>
            </p>
          }
        </EstimatedGas>
      </EstimatedGasNotes>
    </FormContainer>
  )
}
