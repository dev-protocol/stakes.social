import React, { useState } from 'react'
import { useRouter, NextRouter } from 'next/router'
import { LinkWithNetwork } from 'src/components/atoms/LinkWithNetwork'
import styled from 'styled-components'
import { useConnectWallet, useProvider } from 'src/fixtures/wallet/hooks'
import StakesSocial from 'src/components/atoms/Svgs/svg/Stakes-social.svg'
import { ArrowUpOutlined } from '@ant-design/icons'
import { ChainName } from 'src/fixtures/wallet/utility'
import { switchChain } from 'src/fixtures/wallet/switch'
import { providers } from 'ethers'
import truncateEthAddress from 'truncate-eth-address'
import Davatar from '@davatar/react'
import { useBalanceOf } from 'src/fixtures/dev-kit/hooks'
import { DownOutlined } from '@ant-design/icons'
import { useNetworkInRouter } from 'src/fixtures/utility'
import { whenDefined } from '@devprotocol/util-ts'

const Nav = styled.nav``

const Logo = styled(StakesSocial)`
  fill: black;
`

const LogoText = styled.span`
  color: black;
  margin-left: 0.5em;
  font-size: 1.2rem;
  font-weight: bold;
`

export const Navigations = [
  {
    key: 'pools',
    label: 'Pools',
    pathname: '/',
    rewrite: true,
    isExternal: false
  },
  {
    key: 'liquidity',
    label: 'Liquidity',
    pathname: '/liquidity/v2',
    rewrite: true,
    isExternal: false
  },
  {
    key: 'create',
    label: 'Create',
    pathname: '/create',
    rewrite: true,
    isExternal: false
  },
  {
    key: 'dashboard',
    label: 'Dashboard',
    pathname: '/stats',
    rewrite: false,
    isExternal: false
  },
  {
    key: 'portfolio',
    label: 'Portfolio',
    pathname: '/profile',
    rewrite: true,
    isExternal: false
  },
  {
    key: 'grants',
    label: 'Grants',
    pathname: 'https://devprotocol.notion.site/Welcome-to-DEV-DAPP-STARTER-GRANTS-5cb95252f18540258111581ea54d8808',
    rewrite: false,
    isExternal: false
  }
]

const BtnStyles = `border border-gray-200 rounded py-2 px-4`

export const L2Navigations = [
  {
    key: 'pools',
    label: 'Pools',
    pathname: '/',
    rewrite: true,
    isExternal: false
  },
  {
    key: 'liquidity',
    label: 'Liquidity',
    pathname: '/liquidity/v2',
    rewrite: true,
    isExternal: false
  },
  {
    key: 'create',
    label: 'Create on Niwa',
    pathname: 'https://niwa.xyz',
    rewrite: true,
    isExternal: true
  },
  {
    key: 'dashboard',
    label: 'Dashboard',
    pathname: '/stats',
    rewrite: false,
    isExternal: false
  },
  {
    key: 'portfolio',
    label: 'Portfolio',
    pathname: '/profile',
    rewrite: true,
    isExternal: false
  },
  {
    key: 'grants',
    label: 'Grants',
    pathname: 'https://devprotocol.notion.site/Welcome-to-DEV-DAPP-STARTER-GRANTS-5cb95252f18540258111581ea54d8808',
    rewrite: false,
    isExternal: false
  }
]

const StakesSocialLogo = () => (
  <div className="flex items-center mb-2 sm:mb-0">
    <Logo id="headerlogo" height="1.2rem" />
    <LogoText>Stakes.social</LogoText>
  </div>
)

const createSwitchNetwork =
  (router: NextRouter, provider?: providers.BaseProvider) => (chainName: ChainName) => async () => {
    const res = await whenDefined(provider, prov => switchChain(chainName, prov))
    if (res === true || res === undefined) {
      router.push(`/${chainName}`)
    }
  }

const NetworkSelectedIndicator = ({ network, currentNetwork }: { network: ChainName; currentNetwork: ChainName }) => {
  return <>{network === currentNetwork && <span className="w-2 h-2 rounded bg-green-400 flex"></span>}</>
}

const NetworkDropdown = () => {
  const router = useRouter()
  const { ethersProvider } = useProvider()
  const { requestedChain: network } = useNetworkInRouter()
  const switchNetwork = createSwitchNetwork(router, ethersProvider)

  const [isVisible, setIsVisible] = useState(false)

  const optionTWClasses = 'py-2 px-4 cursor-pointer hover:bg-blue-500 rounded hover:text-white'

  return (
    <>
      {isVisible && <div className="fixed inset-0" onClick={() => setIsVisible(false)}></div>}
      <div className="relative font-semibold">
        <button
          className={`flex items-center justify-between w-44 mr-8 ${BtnStyles}`}
          onClick={() => setIsVisible(isVisible => !isVisible)}
        >
          <span className="capitalize font-semibold">{network}</span>
          <DownOutlined />
        </button>
        {isVisible && (
          <div className={`absolute top-12 bg-white w-44 z-50 border border-gray-200 rounded p-1`}>
            <div className={`${optionTWClasses} flex justify-between items-center`} onClick={switchNetwork('ethereum')}>
              <span>Ethereum</span>
              <NetworkSelectedIndicator currentNetwork={network} network="ethereum" />
            </div>
            <div className={`flex flex-col ${optionTWClasses}`} onClick={switchNetwork('arbitrum-one')}>
              <div className="flex justify-between items-center">
                <span>Arbitrum</span>
                <NetworkSelectedIndicator currentNetwork={network} network="arbitrum-one" />
              </div>
              {network === 'arbitrum-one' && (
                <a
                  className="text-xs font-normal flex items-center hover:text-white hover:underline"
                  href="https://bridge.arbitrum.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Ethereum Bridge</span>
                  <div className="rotate-45 ml-1 mb-1">
                    <ArrowUpOutlined />
                  </div>
                </a>
              )}
            </div>
            <div className={`${optionTWClasses} flex justify-between items-center`} onClick={switchNetwork('polygon')}>
              <span>Polygon</span>
              <NetworkSelectedIndicator currentNetwork={network} network="polygon" />
            </div>
            <div className="font-normal text-xs text-gray-400 mt-2">
              <div
                className="px-4 cursor-pointer pb-2 hover:underline flex justify-between items-center"
                onClick={switchNetwork('arbitrum-rinkeby')}
              >
                <span>Arbitrum Rinkeby</span>
                <NetworkSelectedIndicator currentNetwork={network} network="arbitrum-rinkeby" />
              </div>
              <div
                className="px-4 cursor-pointer pb-2 hover:underline flex justify-between items-center"
                onClick={switchNetwork('polygon-mumbai')}
              >
                <span>Polygon Mumbai</span>
                <NetworkSelectedIndicator currentNetwork={network} network="polygon-mumbai" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export const Navigation = () => {
  const { isConnected, connect, isConnecting } = useConnectWallet()
  const { accountAddress } = useProvider()
  const { amount, currency } = useBalanceOf()

  return (
    <Nav>
      <div className="flex justify-between p-2 items-align flex-col sm:flex-row">
        <LinkWithNetwork passHref href="/">
          <a className="flex items-center">
            <StakesSocialLogo />
          </a>
        </LinkWithNetwork>

        <div className="flex">
          <NetworkDropdown />

          {!isConnected && (
            <button className={BtnStyles} onClick={connect} disabled={isConnecting}>
              Sign In
            </button>
          )}
          {isConnected && accountAddress && (
            <div className={`flex font-semibold ${BtnStyles}`}>
              <div className="mr-6">
                <span>
                  {amount.toString()} {currency}
                </span>
              </div>
              <span className="mr-3">{truncateEthAddress(accountAddress)}</span>
              <Davatar size={18} address={accountAddress} />
            </div>
          )}
        </div>
      </div>
    </Nav>
  )
}
