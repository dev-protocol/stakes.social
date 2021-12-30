import { Row, Col, Space, Result } from 'antd'
import React, { useMemo } from 'react'
import {
  useGetSTokenPositions,
  useGetStokenRewards,
  useGetStokenSymbol,
  useGetTokenURI
} from 'src/fixtures/dev-kit/hooks'
import { toNaturalNumber } from 'src/fixtures/utility'

interface NFTAssetProps {
  sToken: number
}

export const NFTAsset = ({ sToken }: NFTAssetProps) => {
  const { tokenURI } = useGetTokenURI(sToken)
  const { positions } = useGetSTokenPositions(sToken)
  const { symbol } = useGetStokenSymbol(sToken)
  const { rewards } = useGetStokenRewards(sToken)
  const positionAmount = useMemo(() => toNaturalNumber(positions?.amount), [positions?.amount])
  const rewardAmount = useMemo(() => toNaturalNumber(rewards?.entireReward), [rewards?.entireReward])
  console.log({ tokenURI })
  return (
    <Result
      status="success"
      title={`Get sToken#${sToken}`}
      subTitle={`Your staking position has been successfully converted to sToken#${sToken}, and you can now add, withdraw staking, claim rewards, and transfer sToken#${sToken}.`}
      extra={
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <img src={tokenURI?.image} style={{ width: '100%', maxHeight: '530px' }} />
          </Col>
          <Col xs={24} sm={12} style={{ textAlign: 'left' }}>
            <Space direction="vertical">
              <div style={{ marginTop: '12px' }}>
                <span style={{ fontSize: '0.8em' }}>Stake To</span>
                <div>
                  <div>{symbol}</div>
                  <span>{positions?.property}</span>
                </div>
              </div>

              <div style={{ marginTop: '12px' }}>
                <div style={{ fontSize: '0.8em' }}>Staked</div>
                <span>{positionAmount.toString()}</span> DEV
              </div>

              <div style={{ marginTop: '12px' }}>
                <div style={{ fontSize: '0.8em' }}>Entire Reward</div>
                <span>{rewardAmount.toString()}</span> DEV
              </div>
            </Space>
          </Col>
        </Row>
      }
    />
  )
}
