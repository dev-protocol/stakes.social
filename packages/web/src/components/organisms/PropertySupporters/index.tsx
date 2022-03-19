// @L2 optimized
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Popover, Table } from 'antd'
import { format } from 'date-fns'
import { providers } from 'ethers'
import { Avatar } from 'src/components/molecules/Avatar'
import { getAccount } from 'src/fixtures/dev-for-apps/utility'
import { useDetectChain, useProvider } from 'src/fixtures/wallet/hooks'
import { useDetectSTokens } from 'src/fixtures/dev-kit/hooks'
import {
  getStokenPositions,
  getStokenTokenURI,
  getStokenOwnerOf,
  getStokenRewards,
  getStokenHeldAt
} from 'src/fixtures/dev-kit/client'
import { whenDefined, whenDefinedAll } from 'src/fixtures/utility'
import { ButtonWithGradient } from 'src/components/atoms/ButtonWithGradient'
import { useImageDataUriFetcher } from 'src/fixtures/ipfs/hooks'
import { STokensTableImage } from 'src/components/atoms/STokensTableImage'
import { LinkWithNetwork } from 'src/components/atoms/LinkWithNetwork'
import truncateEthAddress from 'truncate-eth-address'
import { addresses } from '@devprotocol/dev-kit'

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

interface Props {
  propertyAddress?: string
  authorAddress?: string
}

interface Position {
  amount: number
  sTokenId: number
}

interface TokenURI {
  name: string
  image: string
}

interface TableData {
  rank: number
  address: string
  amount: number
}

const formatter = new Intl.NumberFormat('en-US')

const fetchPosition = (sTokenId: number, nonConnectedEthersProvider?: providers.BaseProvider) => {
  return whenDefinedAll([nonConnectedEthersProvider, sTokenId], ([client, sTokenId]) =>
    getStokenPositions(client, sTokenId)
  )
}

const OfferPopover = () => {
  const [visiblePopover, setVisiblePopover] = useState(false)
  const handleVisibleChange = (visible: boolean) => {
    setVisiblePopover(visible)
  }

  return (
    <>
      <Popover
        content={
          <>
            <div>Thank you!</div>
            <div>Please wait for the next update.</div>
          </>
        }
        trigger="click"
        visible={visiblePopover}
        onVisibleChange={handleVisibleChange}
      >
        <ButtonWithGradient>Offer</ButtonWithGradient>
      </Popover>
    </>
  )
}

const Offer = ({ sTokenId }: { sTokenId: number }) => {
  const { nonConnectedEthersProvider } = useProvider()
  const { name } = useDetectChain(nonConnectedEthersProvider)

  const tofuNFT =
    name === 'arbitrum-one'
      ? `https://tofunft.com/nft/arbi/${addresses.arbitrum.one.sTokens}/${sTokenId}`
      : name === 'polygon'
      ? `https://tofunft.com/nft/polygon/${addresses.polygon.mainnet.sTokens}/${sTokenId}`
      : undefined

  return tofuNFT ? (
    <ButtonWithGradient href={tofuNFT} target="_blank">
      Offer
    </ButtonWithGradient>
  ) : (
    <OfferPopover />
  )
}

const tableColumns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
    render: (text: string) => <span>{text}</span>
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (base64Image: string) => {
      return <STokensTableImage imagePath={base64Image} />
    }
  },
  {
    title: 'Address',
    dataIndex: 'account',
    key: 'account',
    render: ({ address, name }: { address: string; name: string }) => (
      <>
        <div style={{ display: 'flex' }}>
          <Avatar accountAddress={address} size={'30'} />
          <span>{name}</span>
        </div>
        <span>{truncateEthAddress(address)}</span>
      </>
    )
  },
  {
    title: 'Value',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount: number) => (
      <span>{`${formatter.format(parseInt((amount / Math.pow(10, 18)).toFixed(0)))}`} DEV</span>
    )
  },
  {
    title: 'Since',
    dataIndex: 'since',
    key: 'since',
    render: (timestamp?: number) =>
      timestamp ? <span>{`${format(timestamp * 1000, 'M/d/Y')}`}</span> : <span>unknown</span>
  },
  {
    title: 'Pending Reward',
    dataIndex: 'reward',
    key: 'reward',
    render: (amount: number) => (
      <span>{`${formatter.format(parseInt((amount / Math.pow(10, 18)).toFixed(0)))}`} DEV</span>
    )
  },
  {
    title: '',
    dataIndex: 'action',
    key: 'action',
    render: ({ sTokenId }: { sTokenId: number }) => (
      <Actions>
        <Offer sTokenId={sTokenId} />
        <LinkWithNetwork href={`/positions/${sTokenId}`} passHref>
          <ButtonWithGradient>Positions</ButtonWithGradient>
        </LinkWithNetwork>
      </Actions>
    )
  }
]

const SupportersTable = ({ sTokenIds }: { sTokenIds: number[] }) => {
  const { nonConnectedEthersProvider, nonConnectedEthersL1Provider } = useProvider()
  const [tableData, setTableData] = useState<Array<TableData>>([])
  const [loading, setLoading] = useState(false)
  const { dataUriFetcher } = useImageDataUriFetcher()

  useEffect(() => {
    setLoading(true)

    const fetcher = async () => {
      const promises = sTokenIds.map(async (sTokenId: number) => {
        return fetchPosition(sTokenId, nonConnectedEthersProvider)
          ?.then((positions: any) => {
            return { amount: parseInt(positions.amount || '0'), sTokenId: sTokenId }
          })
          .catch(() => {})
      })
      const results = (await Promise.all(promises)) as Position[]
      const compFunc = (a: Position, b: Position): number => {
        if (a.amount < b.amount) {
          return 1
        } else if (a.amount > b.amount) {
          return -1
        }
        return 0
      }
      const sortedAmounts = results.filter((result: Position) => result.amount !== 0).sort(compFunc)
      const tableData = await Promise.all(
        sortedAmounts.map(async ({ sTokenId, amount }, idx: number) => {
          const ownerAccountAddress =
            (await whenDefined(nonConnectedEthersProvider, client => getStokenOwnerOf(client, sTokenId))) || ''
          const tokenURI: TokenURI =
            (await whenDefined(nonConnectedEthersProvider, client => getStokenTokenURI(client, sTokenId))) ||
            ({} as TokenURI)
          const { withdrawableReward: reward } = (await whenDefined(nonConnectedEthersProvider, client =>
            getStokenRewards(client, sTokenId)
          )) || { withdrawableReward: 0 }

          const [accountData, ens, transferEvent] = await Promise.all([
            getAccount(ownerAccountAddress),
            nonConnectedEthersL1Provider?.lookupAddress(ownerAccountAddress),
            whenDefined(nonConnectedEthersProvider, client => getStokenHeldAt(client, sTokenId))
          ])
          const since =
            transferEvent && transferEvent.length > 0 ? (await transferEvent[0].getBlock()).timestamp : undefined
          return {
            rank: idx + 1,
            action: {
              sTokenId
            },
            image: await dataUriFetcher(tokenURI?.image),
            address: ownerAccountAddress,
            account: {
              address: ownerAccountAddress,
              name: accountData && accountData.length == 1 ? accountData[0].name : ens ? ens : ''
            },
            amount,
            since,
            reward
          }
        })
      )
      setTableData(tableData)
      setLoading(false)
    }
    sTokenIds && sTokenIds.length > 0 && fetcher()
    // NOTE: Don't pass Eth provider to deps because it will enter an infinite loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sTokenIds])

  return <Table columns={tableColumns} dataSource={tableData} rowKey="rank" loading={loading} />
}

const PropertySupporters = ({ propertyAddress }: Props) => {
  const { sTokensByPropertyAddress: data } = useDetectSTokens(propertyAddress)
  return data && data.length > 0 ? (
    <SupportersTable sTokenIds={data} />
  ) : (
    <Table columns={tableColumns} dataSource={[]} rowKey="rank" />
  )
}

export default PropertySupporters
