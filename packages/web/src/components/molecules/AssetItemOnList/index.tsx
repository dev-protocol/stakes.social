import { Button, Statistic } from 'antd'
import Link from 'next/link'
import React from 'react'
import { ButtonWithGradient } from 'src/components/atoms/ButtonWithGradient'
import { H3 } from 'src/components/atoms/Typography'
import { useGetProperty } from 'src/fixtures/dev-for-apps/hooks'
import {
  useBalanceOfProperty,
  useGetMyStakingAmount,
  usePropertyName,
  useGetMyStakingRewardAmount,
  useGetMyHolderAmount
} from 'src/fixtures/dev-kit/hooks'
import styled from 'styled-components'
import { AvatarProperty } from '../AvatarProperty'
import { useCurrency } from 'src/fixtures/currency/hooks'

interface Props {
  className?: string
  propertyAddress: string
  enableStake?: boolean
  enableWithdrawStakersReward?: boolean
  enableWithdrawHoldersReward?: boolean
  onClickStake?: (propertyAddress: string) => void
  onClickWithdrawStakersReward?: (propertyAddress: string) => void
  onClickWithdrawHoldersReward?: (propertyAddress: string) => void
  isPool?: Boolean
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
    'avatar avatar'
    'stake totalStake'
    'buttons buttons';
  grid-template-columns: repeat(2, 1fr);
  border-radius: 8px;
  box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.1), 0 2px 4px 2px rgba(0, 0, 0, 0.06);
  padding: 0.5em;

  @media (min-width: 768px) {
    grid-template-areas: 'avatar stake totalStake buttons';
    grid-template-columns: 1fr 1fr 1fr 240px;
  }
`

const AvatarWrap = styled.a`
  display: grid;
  gap: 1rem;
  align-items: center;
  grid-template-columns: 1fr 5fr;
`
const ButtonsWrap = styled.div`
  display: grid;
  gap: 1rem;
  align-items: center;
  grid-auto-flow: column;
`
const GridAvatar = styled(AvatarWrap)`
  grid-area: avatar;
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
  onClickWithdrawHoldersReward,
  isPool
}: Props) => {
  const { data: property } = useGetProperty(propertyAddress)
  const { balance } = useBalanceOfProperty(propertyAddress)
  const { name } = usePropertyName(propertyAddress)
  const { myStakingRewardAmount, currency: myStakingRewardAmountCurrency } = useGetMyStakingRewardAmount(
    propertyAddress
  )
  const { toCurrency } = useCurrency()
  const { myHolderAmount } = useGetMyHolderAmount(propertyAddress)
  const { myStakingAmount, currency: myStakingAmountCurrency } = useGetMyStakingAmount(propertyAddress)
  const propertyName = property && property.name ? property.name : name
  const hasNotBalanceOnTheProperty = balance ? balance.isZero() : false
  const onClick = (
    hook: undefined | typeof onClickStake | typeof onClickWithdrawStakersReward | typeof onClickWithdrawHoldersReward
  ) => () => (typeof hook === 'undefined' ? undefined : hook(propertyAddress))

  const getRewards = () => {
    let reward
    if (isPool === true) {
      const amount = toCurrency(myHolderAmount?.dp(2)).toNumber()
      reward = amount < 0.01 ? '<0.01' : amount
      return reward
    }
    reward = myStakingRewardAmount?.dp(2).toNumber()
    return reward || 0
  }

  return (
    <Wrap className={className}>
      <Link href={'/[propertyAddress]'} as={`/${propertyAddress}`} passHref>
        <GridAvatar>
          <AvatarProperty propertyAddress={propertyAddress} size={90} />
          <H3>{propertyName}</H3>
        </GridAvatar>
      </Link>
      <GridStake
        title="Your Stake"
        value={myStakingAmount?.dp(2).toNumber() || 0}
        suffix={myStakingAmountCurrency}
        precision={2}
      />
      <GridTotalStake title="Your Rewards" value={getRewards()} suffix={myStakingRewardAmountCurrency} precision={2} />
      <GridButtons>
        {enableStake && hasNotBalanceOnTheProperty ? (
          <ButtonWithGradient onClick={onClick(onClickStake)}>Stake</ButtonWithGradient>
        ) : (
          ''
        )}
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
