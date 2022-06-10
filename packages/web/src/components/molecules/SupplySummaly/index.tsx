import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'

interface Props {
  apy?: BigNumber
  creators?: BigNumber
  annualSupplyGrowthRatio?: BigNumber
  className?: string
}

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
`

const int = (v: BigNumber): string => v.integerValue(BigNumber.ROUND_DOWN).toString()
const decimal = (v: BigNumber): string => v.minus(v.integerValue(BigNumber.ROUND_DOWN)).toString().replace('0.', '.')
const values = (v?: BigNumber, dp?: number) =>
  v ? (
    <>
      <span>{int(v)}</span>
      <span>{decimal(v.dp(dp || 5))}%</span>
    </>
  ) : (
    '-'
  )

const SupplyBadge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  a {
    position: absolute;
    bottom: -20px;
    font-size: 0.6rem;
  }

  @media (max-width: 576px) {
    label {
      font-size: 0.6rem;
    }
  }
`

export const SupplySummary = ({ apy, creators, annualSupplyGrowthRatio, className }: Props) => {
  return (
    <div className={`${className} pb-2`}>
      <h2>Current Staking Rewards</h2>
      <div className="grid grid-cols-3 pb-8 pt-2">
        <SupplyBadge>
          <Statistics>{apy?.dp(2).toNumber()}%</Statistics>
          <label>Stakers APY</label>
        </SupplyBadge>
        <SupplyBadge>
          <Statistics>{creators?.dp(2).toNumber()}%</Statistics>
          <label>Creators APY</label>
          <a target="_blank" rel="noopener noreferrer" href="https://docs.devprotocol.xyz/introduction/devtoken/">
            Learn more
          </a>
        </SupplyBadge>
        <SupplyBadge>
          <Statistics>{annualSupplyGrowthRatio?.dp(2).toNumber()}%</Statistics>
          <label>DEV ASG</label>
        </SupplyBadge>
      </div>
      <hr color="lightgrey" />
    </div>
  )
}

export const SupplySummaly = ({ apy, creators, annualSupplyGrowthRatio }: Props) => {
  return (
    <div>
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
    </div>
  )
}
