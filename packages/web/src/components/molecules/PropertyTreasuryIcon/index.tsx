// @L2 optimized: TODO: GraphQL can already be replaced by Dev Kit
import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { PieChartOutlined } from '@ant-design/icons'
import { useGetPropertyBalanceQuery } from '@dev/graphql'
import { usePropertySymbol, useGetTreasuryAmount } from 'src/fixtures/dev-kit/hooks'
import { toNaturalNumber } from 'src/fixtures/utility'
import { ResponsiveModal } from 'src/components/atoms/ResponsiveModal'
import { useIsL1 } from 'src/fixtures/wallet/hooks'

interface Props {
  name: string
  propertyAddress: string
}

const TreasuryIcon = styled.span`
  z-index: 2;
`
const Skelton = styled.span`
  height: 25px;
`

export const PropertyTreasuryIcon = ({ name, propertyAddress }: Props) => {
  const { isL1 } = useIsL1()
  const { symbol } = usePropertySymbol(propertyAddress)
  const { data: creatorToken } = useGetPropertyBalanceQuery({
    variables: {
      account_address: '0x8F9dc5C9CE6834D8C9897Faf5d44Ac36CA073595',
      property_address: isL1 ? propertyAddress : ''
    }
  })
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { treasuryAmount } = useGetTreasuryAmount(isL1 ? propertyAddress : undefined)
  const treasuryTokenAmount = useMemo(() => {
    const amount = (creatorToken && creatorToken.property_balance[0]?.balance) || 0
    return toNaturalNumber(new BigNumber(amount))
  }, [creatorToken])
  const isVisibleIcon = useMemo(() => {
    return isL1 && treasuryAmount && treasuryAmount.toNumber() !== 0
  }, [isL1, treasuryAmount])

  const handleClick = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e)
    setIsModalVisible(true)
  }
  const closeModal = (e: any) => {
    e.stopPropagation()
    setIsModalVisible(false)
  }

  return isVisibleIcon ? (
    <TreasuryIcon>
      <PieChartOutlined style={{ color: '#1FED33' }} onClick={handleClick} />
      <ResponsiveModal title={name} visible={isModalVisible} onCancel={closeModal} footer={null}>
        <p>
          Treasury Holdings: {treasuryTokenAmount && treasuryTokenAmount.dp(0).toFormat()} {symbol}
        </p>
        <p>Treasury Reward: {treasuryAmount && treasuryAmount.toFormat(2)} DEV</p>
      </ResponsiveModal>
    </TreasuryIcon>
  ) : (
    <Skelton></Skelton>
  )
}
