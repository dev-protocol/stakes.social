import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'

interface Props {
  apy?: BigNumber
  creators?: BigNumber
  annualSupplyGrowthRatio?: BigNumber
}

const Wrap = styled.div``
const Badge = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  grid-gap: 0.5rem;
`
const Statistics = styled.span`
  font-size: 1.5em;
  @media (min-width: 1024px) {
    font-size: 2em;
  }
  color: deeppink;
`
const StatisticsInt = styled.span`
  letter-spacing: 0.1rem;
`
const StatisticsDecimal = styled.span`
  font-weight: normal;
  font-size: 0.9em;
`

const int = (v: BigNumber): string => v.integerValue(BigNumber.ROUND_DOWN).toString()
const decimal = (v: BigNumber): string => v.minus(v.integerValue(BigNumber.ROUND_DOWN)).toString().replace('0.', '.')
const values = (v?: BigNumber, dp?: number) =>
  v ? (
    <>
      <StatisticsInt>{int(v)}</StatisticsInt>
      <StatisticsDecimal>{decimal(v.dp(dp || 5))}%</StatisticsDecimal>
    </>
  ) : (
    '-'
  )

const SupplySummaryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`

const SupplyBadge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  padding-bottom: 20px;
`

export const SupplySummary = ({ apy, creators, annualSupplyGrowthRatio }: Props) => {
  return (
    <Container>
      <h2>Current Staking Rewards</h2>
      <SupplySummaryContainer>
        <SupplyBadge>
          <Statistics>{apy?.dp(2).toNumber()}%</Statistics>
          <span>APY for Stakers</span>
        </SupplyBadge>
        <SupplyBadge>
          <Statistics>{creators?.dp(2).toNumber()}%</Statistics>
          <span>APY for Creators</span>
        </SupplyBadge>
        <SupplyBadge>
          <Statistics>{annualSupplyGrowthRatio?.dp(2).toNumber()}%</Statistics>
          <span>ASG of DEV</span>
        </SupplyBadge>
      </SupplySummaryContainer>
      <hr color="lightgrey" />
    </Container>
  )
}
export const SupplySummaly = ({ apy, creators, annualSupplyGrowthRatio }: Props) => {
  return (
    <Wrap>
      <Badge>
        <span>APY for Stakers:</span>
        <Statistics>{values(apy, 5)}</Statistics>
      </Badge>
      <Badge>
        <span>APY for Creators:</span>
        <Statistics>{values(creators, 5)}</Statistics>
      </Badge>
      <Badge>
        <span>Annual Supply Growth:</span>
        <Statistics>{values(annualSupplyGrowthRatio, 5)}</Statistics>
      </Badge>
    </Wrap>
  )
}
