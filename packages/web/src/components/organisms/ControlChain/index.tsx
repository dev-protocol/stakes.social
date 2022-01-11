import React, { useMemo } from 'react'
import { useDetectChain, useProvider } from 'src/fixtures/wallet/hooks'
import { Modal } from 'antd'
import Link from 'next/link'
import { ChainName } from 'src/fixtures/wallet/utility'
import styled from 'styled-components'
import { useNetworkInRouter } from 'src/fixtures/utility'

export const NETWORK_DEPENDENTS = [/^\/0x/, /^\/create/, /^\/invite/, /^\/liquidity/, /^\/positions/, /^\/stats/]

const Content = styled.div`
  display: grid;
  gap: 2rem;
  a {
    display: block;
    padding: 1rem;
    text-align: center;
    border-radius: 5px;
    border: 2px solid;
  }
`

export const SPLITTER = '/'
const hyphenToCapitalize = (str: string) =>
  str
    .split(/(\s|-)+/)
    .map(v => {
      return v === '-' ? '' : v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
    })
    .join(' ')

export const ControlChain = ({ network }: { network?: ChainName }) => {
  const { router } = useNetworkInRouter()
  const { ethersProvider } = useProvider()
  const { name } = useDetectChain(ethersProvider)
  const shouldChooseNetwork = useMemo(() => NETWORK_DEPENDENTS.some(test => test.test(router.asPath)), [router.asPath])

  return network !== undefined && name !== undefined && network !== name ? (
    <Modal visible={true} closable={false} title="Please switch the network" footer={null} zIndex={9999}>
      {`Your wallet is connected to ${hyphenToCapitalize(
        name
      )}. But this page is only available in ${hyphenToCapitalize(network)}.`}
    </Modal>
  ) : shouldChooseNetwork ? (
    <Modal visible={true} closable={false} title="Select a network" footer={null} zIndex={9999}>
      <Content>
        <Link passHref href={`/ethereum${router.asPath}`}>
          <a>Ethereum</a>
        </Link>
        <Link passHref href={`/arbitrum-one${router.asPath}`}>
          <a>Arbitrum</a>
        </Link>
        <Link passHref href={`/polygon${router.asPath}`}>
          <a>Polygon</a>
        </Link>
      </Content>
    </Modal>
  ) : (
    <></>
  )
}
