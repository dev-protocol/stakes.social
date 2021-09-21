import { Button, Divider, Row, Col, Space } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { H2 } from 'src/components/atoms/Typography'
import { Header } from 'src/components/organisms/Header'
import { Footer } from '../components/organisms/Footer'

const StyledButton = styled(Button)`
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  background-image: linear-gradient(to right, #2f80ed, #1ac9fc);
  border: 2px solid #2f80ed;
  &:hover {
    background-image: linear-gradient(to right, #2f80ed, #1ac9fc);
    border: 2px solid #2f80ed;
  }
`

const WrapButton = styled.div`
  margin: auto;
  width: 124px;
`

const ConvertToStokens = () => {
  return (
    <>
      <Header />
      <div style={{ margin: '12px 0' }}>
        <div style={{ textAlign: 'center' }}>
          <H2>You can convert the 1,000 staked position to sToken</H2>
          <WrapButton>
            <StyledButton type="primary">Convert</StyledButton>
          </WrapButton>
          <Divider dashed />
          <div>
            <H2>Get sToken #2</H2>
            <div style={{ maxWidth: '726px', margin: 'auto' }}>
              <Row style={{ padding: '0px 24px' }}>
                <Col span={12}>
                  <img
                    src="https://res.cloudinary.com/haas-storage/image/upload/v1600172007/25231_hng64u.png"
                    width="200"
                    height="250px"
                    style={{ maxWidth: '50%' }}
                  />
                </Col>
                <Col span={12} style={{ textAlign: 'left' }}>
                  <Space direction="vertical">
                    <div style={{ marginTop: '12px' }}>
                      <span style={{ fontSize: '0.8em' }}>Stake To</span>
                      <div>
                        <div>CHALK</div>
                        <span>0x970345727342983572</span>
                      </div>
                    </div>

                    <div style={{ marginTop: '12px' }}>
                      <div style={{ fontSize: '0.8em' }}>Staked</div>
                      <span>1000</span>DEV
                    </div>

                    <div style={{ marginTop: '12px' }}>
                      <div style={{ fontSize: '0.8em' }}>Entire Reward</div>
                      <span>1000</span>DEV
                    </div>
                  </Space>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default ConvertToStokens
