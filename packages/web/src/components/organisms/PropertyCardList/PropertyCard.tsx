import React, { useMemo } from 'react'
import Link from 'next/link'
import { Row, Col, Statistic } from 'antd'
import { useGetTotalRewardsAmount, useStakingShare, useGetMyStakingAmount } from 'src/fixtures/dev-kit/hooks'
import { truncate } from 'src/fixtures/utility/string'
import { useGetPropertyAuthenticationQuery } from '@dev/graphql'
import { CircleGraph } from 'src/components/atoms/CircleGraph'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'

interface Props {
  propertyAddress: string
}

const Card = styled.div`
  border: solid 1px #f0f0f0;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1.2em;
  cursor: pointer;
  background: #fff;
`
const ResponsiveRow = styled(Row)`
  @media (max-width: 768px) {
    margin-top: 1em;
  }
`
const ResponsiveCol = styled(Col)`
  @media (max-width: 768px) {
    width: 100%;
  }
`
const StatisticTitle = styled.span`
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
`
const StatisticWithLineBreakedTitle = styled(Statistic)`
  .ant-statistic-title {
    word-break: break-all;
  }
`

const AssetStrengthBase = ({ assetStrength }: { assetStrength: number }) => (
  <div>
    <StatisticTitle style={{ position: 'absolute' }}>
      {Math.floor(assetStrength * 100)}% of the total stakes
    </StatisticTitle>
    <CircleGraph percentage={assetStrength} />
  </div>
)

const AssetStrength = ({ property }: { property: string }) => {
  const { stakingShare: maybeAssetStrength } = useStakingShare(property)
  const assetStrength = useMemo(() => maybeAssetStrength || 0, [maybeAssetStrength])
  return <AssetStrengthBase assetStrength={assetStrength} />
}

// export const PropertyCard = ({ propertyAddress }: Props) => {
//   const { totalRewardsAmount } = useGetTotalRewardsAmount(propertyAddress)
//   const { data } = useGetPropertyAuthenticationQuery({ variables: { propertyAddress } })
//   const includeAssets = useMemo(
//     () => data && truncate(data.property_authentication.map(e => e.authentication_id).join(', '), 24),
//     [data]
//   )
//   const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)

//   return (
//     <Link href={'/[propertyAddress]'} as={`/${propertyAddress}`}>
//       <Card>
//         <Row>
//           <Col sm={24} md={10}>
//             <StatisticWithLineBreakedTitle title={propertyAddress} value={includeAssets} />
//           </Col>
//           <ResponsiveCol sm={24} md={14}>
//             <ResponsiveRow>
//               <Col span={12}>
//                 <Statistic
//                   title="Total Rewards"
//                   value={totalRewardsAmount && totalRewardsAmount.dp(5).toNumber()}
//                   suffix="DEV"
//                 />
//               </Col>
//               <Col span={9}>
//                 <Statistic
//                   title="Your Staking Amount"
//                   value={myStakingAmount && myStakingAmount.dp(5).toNumber()}
//                   suffix="DEV"
//                 />
//               </Col>
//               <Col span={3}>
//                 <AssetStrength property={propertyAddress} />
//               </Col>
//             </ResponsiveRow>
//           </ResponsiveCol>
//         </Row>
//       </Card>
//     </Link>
//   )
// }

const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 2fr;
`

const Logo = styled.div``
const Title = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`
const Creator = styled.div`
  display: flex;
  flex-direction: column;
`
const OwnedStake = styled.div`
  display: flex;
  flex-direction: column;
`
const TotalStaked = styled.div`
  display: flex;
  flex-direction: column;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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

  /* :hover {
    border: 1px solid lightgrey;
  } */
`

const MutedSpan = styled.span`
  color: grey;
  font-size: 0.9em;
`

export const PropertyCard = ({ propertyAddress }: Props) => {
  const { totalRewardsAmount } = useGetTotalRewardsAmount(propertyAddress)
  const { data } = useGetPropertyAuthenticationQuery({ variables: { propertyAddress } })
  const includeAssets = useMemo(
    () => data && truncate(data.property_authentication.map(e => e.authentication_id).join(', '), 24),
    [data]
  )
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)

  return (
    <Link href={'/[propertyAddress]'} as={`/${propertyAddress}`}>
      <Card>
        <RowContainer>
          <Logo> Logo here </Logo>
          <Title>
            <span>Chalk</span>
            <MutedSpan>Property</MutedSpan>
          </Title>
          <Creator>
            <span>Chalk.eth</span>
            <MutedSpan>Creator</MutedSpan>
          </Creator>
          <OwnedStake>
            <span>2,000 DEV</span>
            <MutedSpan>Your stake</MutedSpan>
          </OwnedStake>
          <TotalStaked>
            <span>250,000 DEV</span>
            <MutedSpan>Total staked</MutedSpan>
          </TotalStaked>
          <ButtonContainer>
            {/* TODO: Make sure that the button is clicked and not the parent underneath it */}
            <StakeButton>Stake</StakeButton>
            <WithdrawButton>Withdraw</WithdrawButton>
          </ButtonContainer>
        </RowContainer>
        {/* <Row>
          <Col sm={24} md={10}>
            <StatisticWithLineBreakedTitle title={propertyAddress} value={includeAssets} />
          </Col>
          <ResponsiveCol sm={24} md={14}>
            <ResponsiveRow>
              <Col span={12}>
                <Statistic
                  title="Total Rewards"
                  value={totalRewardsAmount && totalRewardsAmount.dp(5).toNumber()}
                  suffix="DEV"
                />
              </Col>
              <Col span={9}>
                <Statistic
                  title="Your Staking Amount"
                  value={myStakingAmount && myStakingAmount.dp(5).toNumber()}
                  suffix="DEV"
                />
              </Col>
              <Col span={3}>
                <AssetStrength property={propertyAddress} />
              </Col>
            </ResponsiveRow>
          </ResponsiveCol>
        </Row> */}
      </Card>
    </Link>
  )
}
