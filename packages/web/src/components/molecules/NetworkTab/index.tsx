import React from 'react'
import { useRouter, NextRouter } from 'next/router'
import styled from 'styled-components'
import { useDetectChain, useProvider } from 'src/fixtures/wallet/hooks'
import { Button } from 'antd'
import { ChainName } from 'src/fixtures/wallet/utility'
import { switchChain } from 'src/fixtures/wallet/switch'
import { providers } from 'ethers'
import EthereumEthLogo from 'src/components/atoms/Svgs/svg/EthereumEthLogo.svg'
import ArbitrumLogo from 'src/components/atoms/Svgs/svg/ArbitrumLogo.svg'
import PolygonLogo from 'src/components/atoms/Svgs/svg/PolygonLogo.svg'

const Grid = styled.div`
  display: grid;
`

const NavOpenedWallet = styled(Grid)`
  gap: 1rem;
  border: 4px solid whitesmoke;
  border-radius: 20px;
  padding: 1rem;
  margin-top: 2rem;
`

const NavOpenedN = styled(Grid)`
  grid-auto-flow: column;
  justify-items: start;
  gap: 1rem;
`

const NetworkSwitch = styled(Button)`
  padding: 0;
  display: grid;
  gap: 0.2rem;
  grid-auto-flow: column;
  align-items: center;
`

const NetworkSwitchWithLogo = styled(NetworkSwitch)`
  padding: 0;
  display: grid;
  grid-template-columns: 2rem auto 1fr;
  justify-items: center;
`

const GrayCircle = styled.span`
  color: lightgray;
  &::before {
    content: '●';
  }
`

const GreenCircle = styled.span`
  color: #00b050;
  &::before {
    content: '●';
  }
`

const ConnectedOrDisconnected = ({ chainName }: { chainName: ChainName }) => {
  const { ethersProvider } = useProvider()
  const { name } = useDetectChain(ethersProvider)
  return chainName === name ? <GreenCircle /> : <GrayCircle />
}

const createSwitchNetwork =
  (router: NextRouter, provider?: providers.BaseProvider) => (chainName: ChainName) => async () => {
    const res = await switchChain(chainName, provider)
    if (res === true) {
      router.push(`/${chainName}`)
    }
  }

export const NetworkTab = () => {
  const router = useRouter()
  const { ethersProvider } = useProvider()
  const switchNetwork = createSwitchNetwork(router, ethersProvider)

  return (
    <>
      <NavOpenedWallet>
        <span>Select a network</span>
        <NavOpenedN>
          <NetworkSwitchWithLogo type="link" onClick={switchNetwork('ethereum')}>
            <EthereumEthLogo height="2rem" />
            <ConnectedOrDisconnected chainName="ethereum" />
            Ethereum
          </NetworkSwitchWithLogo>
          <NetworkSwitchWithLogo type="link" onClick={switchNetwork('arbitrum-one')}>
            <ArbitrumLogo height="2rem" />
            <ConnectedOrDisconnected chainName="arbitrum-one" />
            Arbitrum
          </NetworkSwitchWithLogo>
          <NetworkSwitchWithLogo type="link" onClick={switchNetwork('polygon')}>
            <PolygonLogo height="1.5rem" />
            <ConnectedOrDisconnected chainName="polygon" />
            Polygon
          </NetworkSwitchWithLogo>
        </NavOpenedN>
      </NavOpenedWallet>
    </>
  )
}
