import React, { useMemo } from 'react'
import Link from 'next/link'
import {
  useGetMyStakingAmount,
  useGetTotalStakingAmount,
  useGetTotalRewardsAmount,
  useGetMyStakingRewardAmount
} from 'src/fixtures/dev-kit/hooks'
import styled from 'styled-components'
import { useGetPropertyAuthenticationQuery } from '@dev/graphql'
import { truncate } from 'src/fixtures/utility/string'
import { LoremIpsum } from 'lorem-ipsum'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})
interface Props {
  propertyAddress: string
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  border: solid 1px #f0f0f0;
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  background: #fff;
`

const RowContainer = styled.div`
  display: grid;
  padding: 0 1.2em 1.2em;
  row-gap: 8px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'ownedstake totalstaked';
`

const Property = styled.div`
  display: flex;
  align-items: center;
`
const PropertyArea = styled(Property)`
  display: flex;
  justify-content: center;
  padding: 15px;
  grid-area: property;
`

const Title = styled.span`
  font-size: 1.4em;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 16px;
  padding-bottom: 16px;
`
const OwnedStake = styled.div`
  display: flex;
  grid-area: ownedstake;
  flex-direction: column;
`
const TotalStaked = styled.div`
  display: flex;
  grid-area: totalstaked;
  flex-direction: column;
`

const YourReward = styled.div`
  display: flex;
  flex-direction: column;
`

const CreatorReward = styled.div`
  display: flex;
  flex-direction: column;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const ButtonContainerArea = styled(ButtonContainer)`
  grid-area: buttoncontainer;
`

const StakeButton = styled.button<{ bgColor?: string }>`
  padding: 6px 24px;
  border-bottom-left-radius: 6px;
  width: 50%;
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
  width: 50%;
  border: transparent;

  background-color: transparent;
  color: grey;
  cursor: pointer;
`

const MutedSpan = styled.span`
  color: grey;
  font-size: 0.9em;
`

const FlexRow = styled.div`
  display: flex;
  margin-left: 16px;
  margin-bottom: 8px;

  img {
    border-radius: 90px;
  }
`

const PropertyDescription = styled.p`
  color: grey;
  margin: 0;
  flex-grow: 1;
  padding: 0 16px 8px 16px;
`

const FlewColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  max-lines: 3;
  padding-bottom: 16px;

  span {
    margin-left: 10px;
    font-size: 0.9em;
  }
`

export const PropertyCard = ({ propertyAddress }: Props) => {
  const { totalStakingAmount } = useGetTotalStakingAmount(propertyAddress)
  const { totalRewardsAmount } = useGetTotalRewardsAmount(propertyAddress)
  const { myStakingRewardAmount } = useGetMyStakingRewardAmount(propertyAddress)
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)
  const { data } = useGetPropertyAuthenticationQuery({ variables: { propertyAddress } })
  const includeAssets = useMemo(
    () => data && truncate(data.property_authentication.map(e => e.authentication_id).join(', '), 24),
    [data]
  )

  return (
    <Link href={'/[propertyAddress]'} as={`/${propertyAddress}`}>
      <Card>
        <PropertyArea>
          <img
            width="auto"
            height="auto"
            src="https://res.cloudinary.com/haas-storage/image/upload/v1597910958/Screenshot_from_2020-08-20_10-08-09-removebg-preview_td5opp.png"
          />
        </PropertyArea>
        <Title>{includeAssets || 'Property'}</Title>
        <PropertyDescription>{lorem.generateSentences(2)}</PropertyDescription>
        <FlexRow>
          <img
            width="60"
            height="60"
            src="https://res.cloudinary.com/haas-storage/image/upload/v1598963050/72989_gve7hf.jpg"
          />
          <FlewColumn>
            <span style={{ fontWeight: 'lighter' }}>Creator</span>
            <span style={{ color: '#1AC9FC' }}>Kazupon</span>
            <span>5.000 karma</span>
          </FlewColumn>
        </FlexRow>
        <RowContainer>
          <OwnedStake>
            <span>{myStakingAmount?.dp(1)?.toNumber() || 0} DEV</span>
            <MutedSpan>Your stake</MutedSpan>
          </OwnedStake>
          <YourReward>
            <span>{myStakingRewardAmount?.dp(1)?.toNumber() || 0} DEV</span>
            <MutedSpan>Your reward</MutedSpan>
          </YourReward>
          <TotalStaked>
            <span>{totalStakingAmount?.dp(1)?.toNumber() || 0} DEV</span>
            <MutedSpan>Total staked</MutedSpan>
          </TotalStaked>
          <CreatorReward>
            <span>{totalRewardsAmount?.dp(1)?.toNumber() || 0} DEV</span>
            <MutedSpan>Creator reward</MutedSpan>
          </CreatorReward>
        </RowContainer>
        <ButtonContainerArea>
          <StakeButton>Stake</StakeButton>
          <WithdrawButton>Withdraw</WithdrawButton>
        </ButtonContainerArea>
      </Card>
    </Link>
  )
}
