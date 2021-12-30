import { Button, Divider } from 'antd'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { H2 } from 'src/components/atoms/Typography'
import { useGetMyStakingAmount, useMigrateToSTokens } from 'src/fixtures/dev-kit/hooks'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { NFTAsset } from './NFTAsset'
import { detectStokens } from 'src/fixtures/dev-kit/client'
import { whenDefinedAll } from 'src/fixtures/utility'

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
  const { accountAddress, ethersProvider } = useProvider()
  const [sToken, setSToken] = useState<number>()
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)
  const { migrateToSTokens } = useMigrateToSTokens()
  const handleClickConvertButton = useCallback(
    () =>
      migrateToSTokens(propertyAddress).then(async () => {
        console.log('done')
        const ids = await whenDefinedAll(
          [ethersProvider, propertyAddress, accountAddress],
          ([libWeb3, property, account]) => detectStokens(libWeb3, property, account)
        )
        console.log({ ids })
        setSToken(ids?.[0])
      }),
    [migrateToSTokens, ethersProvider, propertyAddress, accountAddress]
  )

  return (
    <div style={{ textAlign: 'center', margin: '8em 0' }}>
      {!sToken && (
        <>
          <H2>You can convert the {myStakingAmount?.toString() || 0} staked position to sToken</H2>
          <WrapButton>
            <StyledButton type="primary" onClick={handleClickConvertButton} disabled={myStakingAmount?.isZero()}>
              Convert
            </StyledButton>
          </WrapButton>
        </>
      )}
      <Divider dashed />
      {sToken && <NFTAsset sToken={sToken} />}
    </div>
  )
}
