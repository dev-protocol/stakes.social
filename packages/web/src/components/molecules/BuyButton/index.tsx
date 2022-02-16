import * as React from 'react'
import { blueGradient } from 'src/styles/gradient'
import { boxShahowWithOnHover } from 'src/styles/boxShahow'
import styled from 'styled-components'
import { Modal, List } from 'antd'

import EthereumEthLogo from 'src/components/atoms/Svgs/svg/EthereumEthLogo.svg'
import ArbitrumLogo from 'src/components/atoms/Svgs/svg/ArbitrumLogo.svg'
import PolygonLogo from 'src/components/atoms/Svgs/svg/PolygonLogo.svg'

interface Props {
  className?: string
}

const BuyButton = styled.a`
  display: flex;
  justify-content: center;
  padding: 6px 24px;
  border-radius: 9px;
  border: none;
  cursor: pointer;
  ${blueGradient()}
  ${boxShahowWithOnHover()}
  &,
  :hover {
    color: white;
  }
`
const data = [
  {
    key: '1',
    logo: <PolygonLogo height="1.2rem" />,
    name: 'Polygon',
    link: 'https://quickswap.exchange/#/swap?outputCurrency=0xA5577D1cec2583058A6Bd6d5DEAC44797c205701'
  },
  {
    key: '2',
    logo: <ArbitrumLogo height="1.2rem" />,
    name: 'Arbitrum',
    link: 'https://app.uniswap.org/#/swap?outputCurrency=0x91F5dC90979b058eBA3be6B7B7e523df7e84e137&chain=arbitrum'
  },
  {
    key: '3',
    logo: <EthereumEthLogo height="1.2rem" />,
    name: 'Ethereum',
    link: 'https://app.uniswap.org/#/swap?outputCurrency=0x5caf454ba92e6f2c929df14667ee360ed9fd5b26&use=V2&chain=mainnet'
  }
]

export const BuyDevButton = ({ className }: Props) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <BuyButton className={className} target="_blank" onClick={showModal}>
        Buy DEV
      </BuyButton>
      <Modal
        title={<h2>Buy DEV token</h2>}
        width="fit-content"
        style={{ minWidth: '30em' }}
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={item.logo}
                title={
                  <a target="_blank" style={{ fontSize: '1.2em' }} href={item.link} rel="noreferrer">
                    {item.name}
                  </a>
                }
              />
            </List.Item>
          )}
        />
      </Modal>
    </>
  )
}
