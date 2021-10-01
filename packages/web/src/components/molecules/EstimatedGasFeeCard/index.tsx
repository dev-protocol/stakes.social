import React from 'react'
import styled from 'styled-components'
import { Card } from 'antd'
import { EstimatedGasNotes } from 'src/components/molecules/EstimatedGasNotes'

interface Props {
  estimatedGasFee: string
  estimatedGasFeeUSD: string
}

export const EstimatedGas = styled(Card)`
  background: transparent;
  .ant-card-head {
    padding: 0 1.5rem;
  }
  .ant-card-head-title {
    font-size: 0.5rem 0;
  }
  .ant-card-body {
    font-size: 1rem;
    padding: 1rem 1.5rem;
    text-align: right;
  }
  p {
    margin: 0;
  }
`

const EstimateGasUSD = styled.span`
  font-size: 0.9em;
  color: #a0a0a0;
`

export const EstimatedGasFeeCard = ({ estimatedGasFee, estimatedGasFeeUSD }: Props) => {
  return (
    <EstimatedGasNotes>
      <EstimatedGas title="Gas Fee (predicted)" size="small">
        {
          <p>
            {estimatedGasFee ? estimatedGasFee : '-'} ETH
            <EstimateGasUSD>{estimatedGasFeeUSD ? ` $${estimatedGasFeeUSD}` : ''}</EstimateGasUSD>
          </p>
        }
      </EstimatedGas>
    </EstimatedGasNotes>
  )
}
