import React, { useEffect, useMemo, useState } from 'react'
import { useDetectChain, useProvider } from 'src/fixtures/wallet/hooks'
import { NextRouter } from 'next/router'
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

const SPLITTER = '/'
const destination = (router: NextRouter, network: ChainName) => {
  const index = router.pathname.split(SPLITTER).findIndex(x => x === '[network]')
  const replaced =
    index > -1
      ? router.asPath
          .split(SPLITTER)
          .map((v, i) => {
            return i === index ? network : v
          })
          .join(SPLITTER)
      : `/${network}${router.asPath}`
  return replaced
}
const hyphenToCapitalize = (str: string) =>
  str
    .split(/(\s|-)+/)
    .map(v => {
      return v === '-' ? '' : v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
    })
    .join(' ')

export const ControlChain = ({ network }: { network?: ChainName }) => {
  const { router, requestedChain, fromRouter, isRoot } = useNetworkInRouter()
  const { ethersProvider } = useProvider()
  const { name } = useDetectChain(ethersProvider)
  const shouldChooseNetwork = useMemo(() => NETWORK_DEPENDENTS.some(test => test.test(router.asPath)), [router.asPath])
  const isAlreadyConnectedToExpectedChain = requestedChain === name
  const [openModal, setOpenModal] = useState<boolean>()

  useEffect(
    () =>
      setOpenModal(
        name !== undefined && (isRoot ? isRoot : fromRouter !== undefined) && !isAlreadyConnectedToExpectedChain
      ),
    [name, fromRouter, isRoot, isAlreadyConnectedToExpectedChain]
  )

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
      </Content>
    </Modal>
  ) : name ? (
    <Modal
      visible={openModal}
      title="Switch the network"
      okText="Switch"
      cancelText="No"
      okButtonProps={{ type: 'primary', href: destination(router, name) }}
      zIndex={9999}
      onCancel={() => setOpenModal(false)}
    >
      {`Your wallet is connected to ${hyphenToCapitalize(name)}. Do you want to switch the contents?`}
    </Modal>
  ) : (
    <></>
  )
}
