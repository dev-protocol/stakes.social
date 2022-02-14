import React, { useState } from 'react'
import { blueGradient } from 'src/styles/gradient'
import { boxShahowWithOnHover } from 'src/styles/boxShahow'
import styled from 'styled-components'
import EthereumEthLogo from 'src/components/atoms/Svgs/svg/EthereumEthLogo.svg'
import ArbitrumLogo from 'src/components/atoms/Svgs/svg/ArbitrumLogo.svg'
import PolygonLogo from 'src/components/atoms/Svgs/svg/PolygonLogo.svg'
import { Modal } from 'antd'
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
const ChainData = [
  {
    name: 'Ethereum',
    dexURL:
      'https://app.uniswap.org/#/swap?outputCurrency=0x5caf454ba92e6f2c929df14667ee360ed9fd5b26&use=V2&chain=mainnet',
    logo: 'EthereumEthLogo'
  },
  {
    name: 'Polygon',
    dexURL: 'https://quickswap.exchange/#/swap?outputCurrency=0xA5577D1cec2583058A6Bd6d5DEAC44797c205701',
    logo: 'PolygonLogo'
  },
  {
    name: 'Arbitrum',
    dexURL: 'https://app.uniswap.org/#/swap?outputCurrency=0x91F5dC90979b058eBA3be6B7B7e523df7e84e137&chain=arbitrum',
    logo: 'ArbitrumLogo'
  }
]

const returnLogoComponent = (logoName: string): any => {
  if (logoName === 'EthereumEthLogo') return <EthereumEthLogo height="2rem" />
  else if (logoName === 'PolygonLogo') return <PolygonLogo height="2rem" />
  else return <ArbitrumLogo height="2rem" />
}
export const BuyDevButton = ({ className }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <>
      <BuyButton className={className} rel="noreferrer" onClick={showModal}>
        <span style={{ color: 'white' }}>Buy DEV</span>
      </BuyButton>

      <Modal title="Buy Dev On" visible={isModalVisible} onCancel={handleCancel}>
        {ChainData.map(data => {
          return (
            <div key={data.name}>
              <BuyButton rel="noreferrer" href={data.dexURL} target="_blank">
                {returnLogoComponent(data.logo)}
                <span style={{ color: 'white' }}>{data.name}</span>
              </BuyButton>
              <br></br>
            </div>
          )
        })}
      </Modal>
    </>
  )
}
