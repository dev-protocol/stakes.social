import { Button, Statistic } from 'antd'
import React from 'react'
import { ButtonWithGradient } from 'src/components/atoms/ButtonWithGradient'
import { H3 } from 'src/components/atoms/Typography'
import { useGetProperty } from 'src/fixtures/dev-for-apps/hooks'
import { useGetMyStakingAmount, useGetTotalStakingAmount, usePropertyName } from 'src/fixtures/dev-kit/hooks'
import styled from 'styled-components'
import { AvatarProperty } from '../AvatarProperty'

interface Props {
  className?: string
  propertyAddress: string
  enableStake?: boolean
  enableWithdrawStakersReward?: boolean
  enableWithdrawHoldersReward?: boolean
  onClickStake?: (propertyAddress: string) => void
  onClickWithdrawStakersReward?: (propertyAddress: string) => void
  onClickWithdrawHoldersReward?: (propertyAddress: string) => void
}

const StyledStatistic = styled(Statistic)`
  display: grid;
  grid-template-areas: 'value' 'title';
  .ant-statistic-title {
    grid-area: title;
    margin: 0;
  }
  .ant-statistic-content {
    grid-area: value;
  }
`

const Wrap = styled.div`
  display: grid;
  gap: 1rem;
  align-items: center;
  grid-template-areas:
    'avatar name name name'
    'stake stake totalStake totalStake'
    'buttons buttons buttons buttons';
  grid-template-columns: repeat(4, 1fr);
  @media (min-width: 768px) {
    grid-template-areas: 'avatar name stake totalStake buttons';
    grid-template-columns: 1fr 2fr 2fr 2fr 240px;
  }
`

const ButtonsWrap = styled.div`
  display: grid;
  gap: 1rem;
  align-items: center;
  grid-auto-flow: column;
`
const GridAvatar = styled(AvatarProperty)`
  grid-area: avatar;
`
const GridName = styled(H3)`
  grid-area: name;
`
const GridStake = styled(StyledStatistic)`
  grid-area: stake;
`
const GridTotalStake = styled(StyledStatistic)`
  grid-area: totalStake;
`
const GridButtons = styled(ButtonsWrap)`
  grid-area: buttons;
`

export const AssetItemOnList = ({
  className,
  propertyAddress,
  enableStake,
  enableWithdrawStakersReward,
  enableWithdrawHoldersReward,
  onClickStake,
  onClickWithdrawStakersReward,
  onClickWithdrawHoldersReward
}: Props) => {
  const { data: property } = useGetProperty(propertyAddress)
  const { name } = usePropertyName(propertyAddress)
  const { myStakingAmount, currency: myStakingAmountCurrency } = useGetMyStakingAmount(propertyAddress)
  const { totalStakingAmount, currency: totalStakingAmountCurrency } = useGetTotalStakingAmount(propertyAddress)
  const propertyName = property && property.name ? property.name : name
  const onClick = (
    hook: undefined | typeof onClickStake | typeof onClickWithdrawStakersReward | typeof onClickWithdrawHoldersReward
  ) => () => (typeof hook === 'undefined' ? undefined : hook(propertyAddress))

  return (
    <Wrap className={className}>
      <GridAvatar propertyAddress={propertyAddress} size={90} />
      <GridName>{propertyName}</GridName>
      <GridStake
        title="Your Stake"
        value={myStakingAmount?.dp(2).toNumber() || 'N/A'}
        suffix={myStakingAmountCurrency}
        precision={2}
      />
      <GridTotalStake
        title="Total Staked"
        value={totalStakingAmount?.dp(2).toNumber() || 'N/A'}
        suffix={totalStakingAmountCurrency}
        precision={2}
      />
      <GridButtons>
        {enableStake ? <ButtonWithGradient onClick={onClick(onClickStake)}>Stake</ButtonWithGradient> : ''}
        {enableWithdrawStakersReward ? (
          <Button type="link" onClick={onClick(onClickWithdrawStakersReward)}>
            Withdraw
          </Button>
        ) : (
          ''
        )}
        {enableWithdrawHoldersReward ? (
          <Button type="link" onClick={onClick(onClickWithdrawHoldersReward)}>
            Withdraw
          </Button>
        ) : (
          ''
        )}
      </GridButtons>
    </Wrap>
  )
}
