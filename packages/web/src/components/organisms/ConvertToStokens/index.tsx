import { Button, Divider } from 'antd'
import React, { useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { H2 } from 'src/components/atoms/Typography'
import { useDetectSTokens, useGetMyStakingAmount, useMigrateToSTokens } from 'src/fixtures/dev-kit/hooks'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { NFTAsset } from './NFTAsset'
import { toNaturalNumber } from 'src/fixtures/utility'

const StyledButton = styled(Button)`
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  background-image: linear-gradient(to right, #2f80ed, #1ac9fc);
  border: 2px solid #2f80ed;
  &:hover {
    background-image: linear-gradient(to right, #2f80ed, #1ac9fc);
    border: 2px solid #2f80ed;
  }
`

const WrapButton = styled.div`
  margin: auto;
  width: 124px;
`

interface ConvertToStokensProps {
  propertyAddress: string
}

export const ConvertToStokens = ({ propertyAddress }: ConvertToStokensProps) => {
  const { accountAddress } = useProvider()
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)
  const { migrateToSTokens } = useMigrateToSTokens()
  const { sTokens } = useDetectSTokens(propertyAddress, accountAddress)
  const stakingAmount = useMemo(() => toNaturalNumber(myStakingAmount), [myStakingAmount])
  const handleClickConvertButton = useCallback(
    () => migrateToSTokens(propertyAddress),
    [migrateToSTokens, propertyAddress]
  )
  const sToken = useMemo(() => sTokens?.[0], [sTokens])

  return (
    <div style={{ textAlign: 'center' }}>
      <H2>You can convert the {stakingAmount} staked position to sToken</H2>
      <WrapButton>
        <StyledButton type="primary" onClick={handleClickConvertButton}>
          Convert
        </StyledButton>
      </WrapButton>
      <Divider dashed />
      {sToken && <NFTAsset sToken={sToken} />}
    </div>
  )
}
