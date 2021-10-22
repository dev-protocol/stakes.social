import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  useGetMyStakingAmount,
  useGetTotalStakingAmount,
  useGetTotalRewardsAmount,
  useGetMyStakingRewardAmount,
  usePropertyAuthor,
  usePropertyName
} from 'src/fixtures/dev-kit/hooks'
import { useIsL1, useProvider } from 'src/fixtures/wallet/hooks'
import styled from 'styled-components'
import { truncate } from 'src/fixtures/utility/string'
import { useGetPropertytInformation } from 'src/fixtures/devprtcl/hooks'
import { useGetProperty, useGetAccount } from 'src/fixtures/dev-for-apps/hooks'
import { Avatar } from 'src/components/molecules/Avatar'
import BigNumber from 'bignumber.js'
import { TransactModalContents } from 'src/components/molecules/TransactModalContents'
import { PropertyTreasuryIcon } from 'src/components/molecules/PropertyTreasuryIcon'
import { ResponsiveModal } from 'src/components/atoms/ResponsiveModal'
import { CoverImageOrGradient } from 'src/components/atoms/CoverImageOrGradient'
import { Grid } from 'src/components/atoms/Grid'

interface Props {
  propertyAddress: string
  assets: (string | undefined)[]
}

const Card = styled(Grid)`
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  justify-content: stretch;
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-bottom: 0;
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  pointer-events: auto;
  background: #fff;
  overflow: hidden;
  min-height: 520px;
`

const RowContainer = styled.div`
  display: grid;
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
  padding-top: 16px;
`

const CardContents = styled(Grid)`
  grid-auto-flow: row;
  grid-gap: 0.7rem;
  align-content: baseline;
  grid-template-rows: auto auto 1fr;
  padding: 4px 16px 0 16px;
`

const StakeButton = styled.button<{ isPropertyStaked?: Boolean }>`
  height: 35px;
  padding: 6px 24px;
  width: ${props => (props.isPropertyStaked ? '50%' : '100%')};
  border: none;
  background-color: #2f80ed;
  color: white;

  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  :hover {
    transition: ease-in-out 0.2s;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  ${props => props.disabled && 'opacity: 0.3'}
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

  img {
    border-radius: 90px;
  }
`

const PropertyDescription = styled.span`
  color: grey;
  margin: 0;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
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

interface ModalStates {
  visible: boolean
  title?: string
  contents?: React.ReactNode
}

const formatter = new Intl.NumberFormat('en-US')

const PlaceholderCoverImageOrGradient = styled.div`
  padding-top: 20%;
  background: url('https://asset.stakes.social/logo/dev.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80px;
`

export const PropertyCard = ({ propertyAddress, assets }: Props) => {
  const { accountAddress } = useProvider()
  const { isL1 } = useIsL1()
  const [modalStates, setModalStates] = useState<ModalStates>({ visible: false })
  const { totalStakingAmount, currency: totalStakingAmountCurrency } = useGetTotalStakingAmount(propertyAddress)
  const { totalRewardsAmount, currency: totalRewardsAmountCurrency } = useGetTotalRewardsAmount(propertyAddress)
  const { myStakingRewardAmount, currency: myStakingRewardAmountCurrency } =
    useGetMyStakingRewardAmount(propertyAddress)
  const { myStakingAmount, currency: myStakingAmountCurrency } = useGetMyStakingAmount(propertyAddress)
  const { data: authorData } = useGetPropertytInformation(isL1 ? propertyAddress : undefined)
  const { author: authorAddress } = usePropertyAuthor(propertyAddress)
  const { data: dataAuthor } = useGetAccount(authorAddress)
  const { data: dataProperty } = useGetProperty(propertyAddress)
  const { name: propertyName } = usePropertyName(propertyAddress)
  const includeAssets = useMemo(() => assets && truncate(assets.join(', '), 24), [assets])

  const zeroBigNumber = new BigNumber(0)

  const showModal = (type: 'stake' | 'withdraw' | 'holders') => {
    const contents = <TransactModalContents propertyAddress={propertyAddress} type={type} />
    const title = type === 'stake' ? 'Stake' : 'Withdraw'
    setModalStates({ visible: true, contents, title })
  }
  const closeModal = () => {
    setModalStates({ ...modalStates, visible: false })
  }
  return (
    <Card>
      {dataProperty?.cover_image?.url ? (
        <CoverImageOrGradient src={dataProperty.cover_image.url} ratio={20} />
      ) : (
        <PlaceholderCoverImageOrGradient />
      )}
      <Link href={'/[propertyAddress]'} as={`/${propertyAddress}`}>
        <CardContents>
          <Title>{includeAssets || propertyName || 'Property'}</Title>
          <PropertyTreasuryIcon name={includeAssets || propertyName || 'Property'} propertyAddress={propertyAddress} />
          <PropertyDescription>
            {dataProperty?.description ||
              'Stake DEV tokens to provide funding for OSS projects so that they can maintain development.'}
          </PropertyDescription>
          <FlexRow>
            <Avatar accountAddress={authorAddress} size={'60'} />
            <FlewColumn>
              <span style={{ fontWeight: 'lighter' }}>Creator</span>
              <span style={{ color: '#1AC9FC' }}>{dataAuthor?.name || authorAddress}</span>
              {authorData ? (
                <span>{authorData.author?.karma ? formatter.format(authorData.author?.karma) : 0} Karma</span>
              ) : (
                ''
              )}
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
        </CardContents>
      </Link>
      <ButtonContainer>
        <StakeButton
          disabled={accountAddress === authorAddress}
          onClick={() => showModal('stake')}
          isPropertyStaked={typeof myStakingAmount !== 'undefined' && myStakingAmount > zeroBigNumber}
        >
          Stake
        </StakeButton>
        <WithdrawButton
          onClick={() => showModal('withdraw')}
          isPropertyStaked={typeof myStakingAmount !== 'undefined' && myStakingAmount > zeroBigNumber}
        >
          Withdraw
        </WithdrawButton>
      </ButtonContainer>
      <ResponsiveModal visible={modalStates.visible} title={modalStates.title} onCancel={closeModal} footer={null}>
        {modalStates.contents}
      </ResponsiveModal>
    </Card>
  )
}
