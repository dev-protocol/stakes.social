import BigNumber from 'bignumber.js'
import React, { useMemo, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useGetDevPrice } from 'src/fixtures/uniswap/hooks'
import { useListPropertyQuery } from '@dev/graphql'
import {
  useAPY,
  useAnnualSupplyGrowthRatio,
  useCirculatingSupply,
  useTotalSupply,
  useTotalStakingRatio,
  useTotalStakingAmountOnProtocol
} from 'src/fixtures/dev-kit/hooks'
import { toNaturalNumber } from 'src/fixtures/utility'

interface Props {}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  border: solid 1px #f0f0f0;
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  background: #fff;
`

const Title = styled.span`
  font-size: 1.4em;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 32px;
  margin-left: 16px;
  padding-bottom: 8px;
`

const Description = styled.p`
  color: grey;
  padding: 16px;
  padding-top: 24px;
  flex-grow: 1;
  margin: 0;
`

const DashboardValue = styled.span`
  color: #2f80ed;
  font-size: 2em;
  padding: 16px;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0;
`

const DevTotalCap = (_: {}) => {
  const { totalSupply } = useTotalSupply()
  const { data: devPrice } = useGetDevPrice()

  const devTotalCap = useMemo(() => {
    const marketCap = devPrice.toNumber() * toNaturalNumber(totalSupply).toNumber()
    const formatMarketCap = new BigNumber(Math.round(marketCap)).toFormat()
    return formatMarketCap
  }, [devPrice, totalSupply])

  return devTotalCap ? <span>{devTotalCap}</span> : <></>
}

const DevMarketCap = (_: {}) => {
  const [devMarketCap, setDevMarketCap] = useState<string>('')
  const { circulatingSupply } = useCirculatingSupply()
  const { data: devPrice } = useGetDevPrice()

  useEffect(() => {
    circulatingSupply().then((circulatingSupplyValue: any) => {
      const marketCap = devPrice.toNumber() * toNaturalNumber(circulatingSupplyValue).toNumber()
      const formatMarketCap = new BigNumber(Math.round(marketCap)).toFormat()
      setDevMarketCap(formatMarketCap)
    })
  }, [devPrice, circulatingSupply])

  return devMarketCap ? <span>{devMarketCap}</span> : <></>
}

const DevPrice = (_: {}) => {
  const { data: devPrice } = useGetDevPrice()
  return devPrice ? <span>{Math.round(devPrice?.toNumber() * 100) / 100}</span> : <></>
}

const DevStakingRatio = (_: {}) => {
  const { totalStakingRatio } = useTotalStakingRatio()
  return totalStakingRatio ? <span>{Math.round(totalStakingRatio * 10000) / 100}</span> : <></>
}

const DevStakingValue = (_: {}) => {
  const { data: devPrice } = useGetDevPrice()
  const { totalStakingAmount } = useTotalStakingAmountOnProtocol()
  const totalStakingAmountValue = toNaturalNumber(new BigNumber(totalStakingAmount || 0))
  const devStakingValue = new BigNumber(Math.round(totalStakingAmountValue.toNumber() * devPrice.toNumber()))
  return totalStakingAmount ? <span>{devStakingValue.toFormat()}</span> : <></>
}

const CreatorAPY = (_: {}) => {
  const { creators } = useAPY()
  return creators ? <span>{creators?.dp(2).toNumber()}</span> : <></>
}

const StakerAPY = (_: {}) => {
  const { apy } = useAPY()
  return apy ? <span>{apy?.dp(2).toNumber()}</span> : <></>
}

const SupplyGrowth = (_: {}) => {
  const { annualSupplyGrowthRatio } = useAnnualSupplyGrowthRatio()
  return annualSupplyGrowthRatio ? <span>{annualSupplyGrowthRatio?.dp(2).toNumber()}</span> : <></>
}

const AssetOnboarded = (_: {}) => {
  const { data } = useListPropertyQuery({
    variables: {
      limit: 1
    }
  })
  const formatAssetOnboarded = new BigNumber(data?.property_factory_create_aggregate.aggregate?.count || 0)
  return data?.property_factory_create_aggregate ? <span>{formatAssetOnboarded.toFormat()}</span> : <></>
}

const CreatorsRewardsDev = (_: {}) => {
  const { creators } = useAPY()
  const { totalStakingAmount } = useTotalStakingAmountOnProtocol()
  const totalStakingAmountValue = toNaturalNumber(new BigNumber(totalStakingAmount || 0))
  const creatorsRewardsDev =
    creators && totalStakingAmount
      ? new BigNumber(creators.div(100).toNumber() * totalStakingAmountValue.toNumber())
      : null
  return creatorsRewardsDev ? <span>{creatorsRewardsDev?.dp(0).toFormat()}</span> : <></>
}

const CreatorsRewardsUsd = (_: {}) => {
  const { data: devPrice } = useGetDevPrice()
  const { creators } = useAPY()
  const { totalStakingAmount } = useTotalStakingAmountOnProtocol()
  const totalStakingAmountValue = toNaturalNumber(new BigNumber(totalStakingAmount || 0))
  const creatorsRewardsDev =
    creators && totalStakingAmount
      ? new BigNumber(creators.div(100).toNumber() * totalStakingAmountValue.toNumber() * devPrice.toNumber())
      : null
  return creatorsRewardsDev ? <span>{creatorsRewardsDev?.dp(0).toFormat()}</span> : <></>
}

const items = [
  {
    title: 'DEV TOTAL CAP',
    unit: '$',
    unitPosition: 'prefix',
    description: 'The total value of all DEV.',
    valueRender: function devMarketCapRender() {
      return <DevTotalCap />
    }
  },
  {
    title: 'DEV MARKET CAP',
    unit: '$',
    unitPosition: 'prefix',
    description: 'The total value of all DEV circulationg.',
    valueRender: function devMarketCapRender() {
      return <DevMarketCap />
    }
  },
  {
    title: 'DEV PRICE',
    unit: '$',
    unitPosition: 'prefix',
    description: 'The current price of DEV token.',
    valueRender: function devPriceRender() {
      return <DevPrice />
    }
  },
  {
    title: 'DEV STAKED RATIO',
    unit: '%',
    unitPosition: 'suffix',
    description: 'The percentage of DEV tokens that are staked from circulating supply.',
    valueRender: function devStakingRatioRender() {
      return <DevStakingRatio />
    }
  },
  {
    title: 'STAKED DEV VALUE',
    unit: '$',
    unitPosition: 'prefix',
    description: 'The total value of DEV staked.',
    valueRender: function devStakingValueRender() {
      return <DevStakingValue />
    }
  },
  {
    title: 'CREATOR APY',
    unit: '%',
    unitPosition: 'suffix',
    description: 'The current yield for creators.',
    valueRender: function creatorAPYRender() {
      return <CreatorAPY />
    }
  },
  {
    title: 'STAKER APY',
    unit: '%',
    unitPosition: 'suffix',
    description: 'The current yield for stakers.',
    valueRender: function stakerAPYRender() {
      return <StakerAPY />
    }
  },
  {
    title: 'SUPPLY GROWTH',
    unit: '%',
    unitPosition: 'suffix',
    description: 'The current supply growth of DEV.',
    valueRender: function supplyGrowthRender() {
      return <SupplyGrowth />
    }
  },
  {
    title: 'ASSET ONBOARDED',
    unit: '',
    description: 'The total number of creator assets onboarded.',
    valueRender: function assetOnboardedRender() {
      return <AssetOnboarded />
    }
  },
  {
    title: "CREATOR'S REWARDS DEV",
    unit: '',
    description: "The value of current creator's rewards.",
    valueRender: function creatorsReardsDevRender() {
      return <CreatorsRewardsDev />
    }
  },
  {
    title: "CREATOR'S REWARDS USD",
    unit: '$',
    unitPosition: 'prefix',
    description: "The value of current creator's rewards in USD.",
    valueRender: function creatorsReardsUsdRender() {
      return <CreatorsRewardsUsd />
    }
  }
]

export const DevStats = (_: Props) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', rowGap: '0', columnGap: '15px' }}>
      {items.map(item => (
        <div key={item.title} style={{ margin: '15px 0' }}>
          <Card>
            <Title>{item.title}</Title>
            <DashboardValue>
              {item.unitPosition == 'prefix' ? <span>{item.unit}</span> : <></>}
              {item.valueRender ? item.valueRender() : <span>-</span>}
              {item.unitPosition == 'suffix' ? <span>{item.unit}</span> : <></>}
            </DashboardValue>
            <Description>{item.description}</Description>
          </Card>
        </div>
      ))}
    </div>
  )
}
