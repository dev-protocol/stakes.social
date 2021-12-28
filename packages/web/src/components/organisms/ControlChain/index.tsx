import React, { useEffect, useMemo } from 'react'
import { useDetectChain, useProvider } from 'src/fixtures/wallet/hooks'
import { useRouter } from 'next/router'
import { SUPPORTED_CHAINS } from 'src/fixtures/wallet/constants'
import { message, Modal } from 'antd'
import Link from 'next/link'
import { ChainName } from 'src/fixtures/wallet/utility'
import styled from 'styled-components'

const url = (path?: string, network?: ChainName) => `${network}/${path}`

const Content = styled.div`
  display: grid;
`

export const ControlChain = () => {
  const router = useRouter()
  const chainFromRouter = router?.query?.network
  const { ethersProvider } = useProvider()
  const { name } = useDetectChain(ethersProvider)
  const isRoot = useMemo(() => router?.pathname === '/', [router])
  const isSupportedChain = useMemo(() => SUPPORTED_CHAINS.some(x => x === chainFromRouter), [chainFromRouter])
  // const isAlreadyConnectToSupportedChain = useMemo(() => SUPPORTED_CHAINS.some(x => x === name), [name])
  const expectedChainName = useMemo(
    () =>
      chainFromRouter === 'arbitrum-one'
        ? 'Arbitrum'
        : chainFromRouter === 'ethereum'
        ? 'Ethereum'
        : chainFromRouter === 'ropsten'
        ? 'Ropsten'
        : chainFromRouter === 'arbitrum-rinkeby'
        ? 'Arbitrum Rinkeby'
        : 'Ethereum',
    [chainFromRouter]
  )
  const isAlreadyConnectToExpectedChain = useMemo(
    () => (chainFromRouter ? chainFromRouter === name : name === 'ethereum'),
    [name, chainFromRouter]
  )
  console.log({ router, name })

  useEffect(() => {
    if (!isAlreadyConnectToExpectedChain) {
      message.error(`Your wallet is not connected to ${expectedChainName}.`, 0)
    }
  }, [isAlreadyConnectToExpectedChain, isSupportedChain, expectedChainName])

  return !isRoot && !isSupportedChain ? (
    <Modal visible={true} closable={false} title="Choose network" footer={null}>
      <Content>
        <Link passHref href={url(router.asPath, 'ethereum')}>
          <a>Ethereum</a>
        </Link>
        <Link passHref href={url(router.asPath, 'arbitrum-one')}>
          <a>Arbitrum</a>
        </Link>
      </Content>
    </Modal>
  ) : (
    <></>
  )
}
