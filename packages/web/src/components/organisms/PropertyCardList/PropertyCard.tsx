import React, { useMemo } from 'react'
import Link from 'next/link'
import { useGetMyStakingAmount, useGetTotalStakingAmount } from 'src/fixtures/dev-kit/hooks'
import styled, { css } from 'styled-components'
import { useGetPropertyAuthenticationQuery } from '@dev/graphql'
import { truncate } from 'src/fixtures/utility/string'

interface Props {
  propertyAddress: string
  isGrid: boolean
}

const Card = styled.div`
  border: solid 1px #f0f0f0;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1.2em;
  cursor: pointer;
  background: #fff;
`

const RowContainer = styled.div<{ isGrid?: boolean }>`
  display: grid;
  column-gap: 5px;

  grid-template-columns: 2fr 1fr;
  grid-template-areas: 'property creator';

  ${({ isGrid }) => css`
    ${isGrid &&
    css`
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'property property'
        'creator creator'
        'ownedstake totalstake'
        'buttoncontianer buttoncontainer';
    `}

    ${!isGrid &&
    css`
      @media (min-width: 1024px) {
        grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
        grid-template-areas: 'property creator ownedstake totalstaked buttoncontainer';
      }
    `}
  `}
`

const Property = styled.div`
  display: flex;
  align-items: center;
`
const PropertyArea = styled(Property)`
  grid-area: property;
`

const Title = styled.span`
  font-size: 1.1em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  @media (min-width: 620px) {
    max-width: 200px;
  }

  max-width: 130px;
  grid-area: propertytitle;
  margin-left: 1em;
`
const Creator = styled.div`
  display: flex;
  grid-area: creator;
  flex-direction: column;
`
const OwnedStake = styled.div`
  display: none;

  @media (min-width: 1024px) {
    grid-area: ownedstake;
    flex-direction: column;
  }
  /* align-items: center; */
`
const TotalStaked = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    grid-area: totalstaked;
    flex-direction: column;
  }
`
const ButtonContainer = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
    grid-template-areas: 'property creator ownedstake totalstaked buttoncontainer';
  }
`

const ButtonContainerArea = styled(ButtonContainer)`
  grid-area: buttoncontainer;
`

const StakeButton = styled.button<{ bgColor?: string }>`
  padding: 6px 24px;
  border-radius: 9px;
  border: none;
  background-color: #2f80ed;
  color: white;

  cursor: pointer;
  :hover {
    transition: ease-in-out 0.2s;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`

const WithdrawButton = styled.button<{ bgColor?: string }>`
  padding: 6px 24px;
  border-radius: 9px;
  border: transparent;

  background-color: transparent;
  color: grey;
  cursor: pointer;
`

const MutedSpan = styled.span`
  color: grey;
  font-size: 0.9em;
`

export const PropertyCard = ({ propertyAddress, isGrid }: Props) => {
  const { totalStakingAmount } = useGetTotalStakingAmount(propertyAddress)
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)
  const { data } = useGetPropertyAuthenticationQuery({ variables: { propertyAddress } })
  const includeAssets = useMemo(
    () => data && truncate(data.property_authentication.map(e => e.authentication_id).join(', '), 24),
    [data]
  )

  return (
    <Link href={'/[propertyAddress]'} as={`/${propertyAddress}`}>
      <Card>
        <RowContainer isGrid={isGrid}>
          <PropertyArea>
            <img
              width="50px"
              height="25px"
              src="https://res.cloudinary.com/haas-storage/image/upload/v1597910958/Screenshot_from_2020-08-20_10-08-09-removebg-preview_td5opp.png"
            />

            <Title>{includeAssets}</Title>
          </PropertyArea>

          <Creator>
            <span>Chalk.eth</span>
            <MutedSpan>Creator</MutedSpan>
          </Creator>
          <OwnedStake>
            <span>{myStakingAmount?.dp(1)?.toNumber()} DEV</span>
            <MutedSpan>Your stake</MutedSpan>
          </OwnedStake>
          <TotalStaked>
            <span>{totalStakingAmount?.dp(1)?.toNumber()} DEV</span>
            <MutedSpan>Total staked</MutedSpan>
          </TotalStaked>
          <ButtonContainerArea>
            {/* TODO: Make sure that the button is clicked and not the parent underneath it */}
            <StakeButton>Stake</StakeButton>
            <WithdrawButton>Withdraw</WithdrawButton>
          </ButtonContainerArea>
        </RowContainer>
      </Card>
    </Link>
  )
}
