import React, { useMemo } from 'react'
import Link from 'next/link'
import {
  useGetMyStakingAmount,
  useGetTotalStakingAmount,
  useGetTotalRewardsAmount,
  useGetMyStakingRewardAmount
} from 'src/fixtures/dev-kit/hooks'
import styled from 'styled-components'
import { truncate } from 'src/fixtures/utility/string'
import { LoremIpsum } from 'lorem-ipsum'
import { useGetPropertytInformation } from 'src/fixtures/devprtcl/hooks'
import { useGetProperty } from 'src/fixtures/dev-for-apps/hooks'
import { Avatar } from 'src/components/molecules/Avatar'
import BigNumber from 'bignumber.js'
import { CoverImageOrGradient } from 'src/components/atoms/CoverImageOrGradient'

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

interface Asset {
  authentication_id: string
}

interface Props {
  propertyAddress: string
  assets: Asset[]
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 500px;
  width: 345px;
  border: solid 1px #f0f0f0;
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  background: #fff;
  overflow: hidden;
`

const RowContainer = styled.div`
  display: grid;
  padding: 0 1.2em 1.2em;
  row-gap: 8px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'ownedstake totalstaked';
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

const StakeButton = styled.button<{ isPropertyStaked?: Boolean }>`
  padding: 6px 24px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: ${props => (props.isPropertyStaked ? '0px' : '6px')};
  width: ${props => (props.isPropertyStaked ? '50%' : '100%')};
  border: none;
  background-color: #2f80ed;
  color: white;

  cursor: pointer;
  :hover {
    transition: ease-in-out 0.2s;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`

const WithdrawButton = styled.button<{ isPropertyStaked?: Boolean }>`
  display: ${props => (props.isPropertyStaked ? 'flex' : 'none')};
  justify-content: center;
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

const formatter = new Intl.NumberFormat('en-US')

const PlaceholderCoverImageOrGradient = styled.div`
  padding-top: 20%;
  background: url('https://asset.stakes.social/logo/dev.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80px;
`

export const PropertyCard = ({ propertyAddress, assets }: Props) => {
  const { totalStakingAmount, currency: totalStakingAmountCurrency } = useGetTotalStakingAmount(propertyAddress)
  const { totalRewardsAmount, currency: totalRewardsAmountCurrency } = useGetTotalRewardsAmount(propertyAddress)
  const { myStakingRewardAmount, currency: myStakingRewardAmountCurrency } = useGetMyStakingRewardAmount(
    propertyAddress
  )
  const { myStakingAmount, currency: myStakingAmountCurrency } = useGetMyStakingAmount(propertyAddress)
  const { data: authorData } = useGetPropertytInformation(propertyAddress)
  const { data: dataProperty } = useGetProperty(propertyAddress)
  const includeAssets = useMemo(() => assets && truncate(assets.map(e => e.authentication_id).join(', '), 24), [assets])

  const zeroBigNumber = new BigNumber(0)

  console.table({ dataProperty })

  return (
    <Link href={'/[propertyAddress]'} as={`/${propertyAddress}`}>
      <Card>
        {dataProperty?.cover_image?.url ? (
          <CoverImageOrGradient src={dataProperty.cover_image.url} ratio={20} />
        ) : (
          <PlaceholderCoverImageOrGradient />
        )}
        <Title>{includeAssets || 'Property'}</Title>
        <PropertyDescription>{lorem.generateSentences(2)}</PropertyDescription>
        <FlexRow>
          <Avatar accountAddress={authorData?.author.address} size={'60'} />
          <FlewColumn>
            <span style={{ fontWeight: 'lighter' }}>Creator</span>
            <span style={{ color: '#1AC9FC' }}>{authorData?.name}</span>
            <span>{authorData?.author?.karma ? formatter.format(authorData?.author?.karma) : 0} Karma</span>
          </FlewColumn>
        </FlexRow>
        <RowContainer>
          <OwnedStake>
            <span>
              {myStakingAmount?.dp(0).toFixed() ? formatter.format(myStakingAmount?.dp(1).toNumber()) : 0}{' '}
              {myStakingAmountCurrency}
            </span>
            <MutedSpan>Your stake</MutedSpan>
          </OwnedStake>
          <YourReward>
            <span>
              {myStakingRewardAmount?.dp(0)?.toNumber()
                ? formatter.format(myStakingRewardAmount?.dp(0)?.toNumber())
                : 0}{' '}
              {myStakingRewardAmountCurrency}
            </span>
            <MutedSpan>Your reward</MutedSpan>
          </YourReward>
          <TotalStaked>
            <span>
              {totalStakingAmount?.dp(0).toNumber() ? formatter.format(totalStakingAmount?.dp(0).toNumber()) : 0}{' '}
              {totalStakingAmountCurrency}
            </span>
            <MutedSpan>Total staked</MutedSpan>
          </TotalStaked>
          <CreatorReward>
            <span>
              {totalRewardsAmount?.dp(0)?.toNumber() ? formatter.format(totalRewardsAmount?.dp(0).toNumber()) : 0}{' '}
              {totalRewardsAmountCurrency}
            </span>
            <MutedSpan>Creator reward</MutedSpan>
          </CreatorReward>
        </RowContainer>
        <ButtonContainerArea>
          <StakeButton isPropertyStaked={typeof myStakingAmount !== 'undefined' && myStakingAmount > zeroBigNumber}>
            Stake
          </StakeButton>
          <WithdrawButton isPropertyStaked={typeof myStakingAmount !== 'undefined' && myStakingAmount > zeroBigNumber}>
            Withdraw
          </WithdrawButton>
        </ButtonContainerArea>
      </Card>
    </Link>
  )
}
