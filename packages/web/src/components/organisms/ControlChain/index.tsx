import React, { useMemo } from 'react'
import { useDetectChain, useProvider } from 'src/fixtures/wallet/hooks'
import { NextRouter, useRouter } from 'next/router'
import { SUPPORTED_CHAINS } from 'src/fixtures/wallet/constants'
import { Modal } from 'antd'
import Link from 'next/link'
import { ChainName } from 'src/fixtures/wallet/utility'
import styled from 'styled-components'

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

export const ControlChain = () => {
  const router = useRouter()
  const chainFromRouter = router?.query?.network
  const { ethersProvider } = useProvider()
  const { name } = useDetectChain(ethersProvider)
  const isRoot = useMemo(() => router?.pathname === '/', [router])
  const requiredSupportedChain = useMemo(
    () => SUPPORTED_CHAINS.find(x => x === chainFromRouter) ?? (isRoot ? 'ethereum' : undefined),
    [chainFromRouter, isRoot]
  )
  const shouldChooseNetwork = useMemo(() => NETWORK_DEPENDENTS.some(test => test.test(router.asPath)), [router.asPath])
  const isAlreadyConnectedToExpectedChain = requiredSupportedChain === name

  return shouldChooseNetwork ? (
    <Modal visible={true} closable={false} title="Choose network" footer={null} zIndex={9999}>
      <Content>
        <Link passHref href={`/ethereum${router.asPath}`}>
          <a>Ethereum</a>
        </Link>
        <Link passHref href={`/arbitrum-one${router.asPath}`}>
          <a>Arbitrum</a>
        </Link>
      </Content>
    </Modal>
  ) : name && requiredSupportedChain !== undefined && !isAlreadyConnectedToExpectedChain ? (
    <Modal
      visible={true}
      title="Choose network"
      okText="Switch"
      cancelText="No"
      okButtonProps={{ type: 'primary', href: destination(router, name) }}
      zIndex={9999}
    >
      {`Your wallet is connected to ${hyphenToCapitalize(name)}. Do you want to switch the contents?`}
    </Modal>
  ) : (
    <></>
  )
}
