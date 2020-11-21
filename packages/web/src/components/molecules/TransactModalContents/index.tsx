import React from 'react'
import styled from 'styled-components'
import { Stake } from 'src/components/organisms/Stake'
import { WithdrawWithEstimate } from 'src/components/organisms/Withdraw/WithdrawWithEstimate'
import { AvatarProperty } from '../AvatarProperty'
import { H4 } from 'src/components/atoms/Typography'
import { useGetProperty } from 'src/fixtures/dev-for-apps/hooks'
import { usePropertyName } from 'src/fixtures/dev-kit/hooks'
import { WithdrawalForHolders } from 'src/components/organisms/WithdrawalForHolders'

interface Props {
  className?: string
  propertyAddress: string
  type: 'stake' | 'withdraw' | 'holders'
}

const Wrap = styled.div`
  display: grid;
  gap: 2rem;
`

const InformationsWrap = styled.div`
  display: grid;
  gap: 1rem;
  align-items: center;
  grid-template-areas:
    'avatar name'
    'address address';
  grid-template-columns: 1fr 5fr;
`

const GridAvatar = styled(AvatarProperty)`
  grid-area: avatar;
`
const GridName = styled(H4)`
  grid-area: name;
`
const GridAddress = styled.span`
  grid-area: address;
  &::before {
    content: 'Address';
    display: block;
    color: #00000033;
    font-size: 0.8rem;
  }
`

export const TransactModalContents = ({ className, propertyAddress, type }: Props) => {
  const { data: property } = useGetProperty(propertyAddress)
  const { name } = usePropertyName(propertyAddress)
  const propertyName = property && property.name ? property.name : name
  const Form = type === 'stake' ? Stake : type === 'withdraw' ? WithdrawWithEstimate : WithdrawalForHolders

  return (
    <Wrap className={className}>
      <InformationsWrap>
        <GridAvatar propertyAddress={propertyAddress} size={60} />
        <GridName>{propertyName}</GridName>
        <GridAddress>{propertyAddress}</GridAddress>
      </InformationsWrap>
      <Form propertyAddress={propertyAddress} />
    </Wrap>
  )
}
