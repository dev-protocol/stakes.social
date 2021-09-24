import { Row, Col, Space } from 'antd'
import React, { useMemo } from 'react'
import { H2 } from 'src/components/atoms/Typography'
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
  const { tokenURI } = useGetTokenURI()
  const { positions } = useGetSTokenPositions(sToken)
  const { symbol } = useGetStokenSymbol(sToken)
  const { rewards } = useGetStokenRewards()
  const positionAmount = useMemo(() => toNaturalNumber(positions?.amount), [positions?.amount])
  const rewardAmount = useMemo(() => toNaturalNumber(rewards?.entireReward), [rewards?.entireReward])
  return (
    <div>
      <H2>Get sToken {sToken}</H2>
      <div style={{ maxWidth: '726px', margin: 'auto' }}>
        <Row style={{ padding: '0px 24px' }}>
          <Col span={12}>
            <img src={tokenURI?.image} width="200" height="250px" />
          </Col>
          <Col span={12} style={{ textAlign: 'left' }}>
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
                <span>{positionAmount}</span>DEV
              </div>

              <div style={{ marginTop: '12px' }}>
                <div style={{ fontSize: '0.8em' }}>Entire Reward</div>
                <span>{rewardAmount}</span>DEV
              </div>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  )
}
