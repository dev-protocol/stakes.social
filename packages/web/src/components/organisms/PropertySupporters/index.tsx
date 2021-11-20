// @L2 optimized
import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { format } from 'date-fns'
import { Avatar } from 'src/components/molecules/Avatar'
import { getAccount } from 'src/fixtures/dev-for-apps/utility'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { useDetectSTokens } from 'src/fixtures/dev-kit/hooks'
import { getStokenPositions, getStokenOwnerOf, getStokenRewards, getStokenHeldAt } from 'src/fixtures/dev-kit/client'
import { whenDefined, whenDefinedAll } from 'src/fixtures/utility'

interface Props {
  propertyAddress?: string
  authorAddress?: string
}

const formatter = new Intl.NumberFormat('en-US')

const fetchPosition = (nonConnectedEthersProvider: any, sTokenId: number) => {
  return whenDefinedAll([nonConnectedEthersProvider, sTokenId], ([client, sTokenId]) =>
    getStokenPositions(client, sTokenId)
  )
}

interface Position {
  amount: number
  sTokenId: number
}

interface TableData {
  rank: number
  address: string
  amount: number
}

const SupportersTable = ({ propertyAddress }: { propertyAddress?: string }) => {
  const { nonConnectedEthersProvider, nonConnectedEthersL1Provider } = useProvider()
  const [tableData, setTableData] = useState<Array<TableData>>([])
  const [loading, setLoading] = useState(false)
  const { sTokensByPropertyAddress: data } = useDetectSTokens(propertyAddress)

  useEffect(() => {
    setLoading(true)

    const fetcher = async () => {
      const promises = data.map(async (sTokenId: number) => {
        return fetchPosition(nonConnectedEthersProvider, sTokenId)
          ?.then((positions: any) => {
            return { amount: parseInt(positions.amount || '0'), sTokenId: sTokenId }
          })
          .catch(() => {})
      })
      const results: Position[] = await Promise.all(promises)
      const compFunc = (a: Position, b: Position): number => {
        if (a.amount < b.amount) {
          return 1
        } else if (a.amount > b.amount) {
          return -1
        }
        return 0
      }
      const sortedAmounts = results.sort(compFunc)
      const tableData = await Promise.all(
        sortedAmounts.map(async ({ sTokenId, amount }, idx: number) => {
          const ownerAccountAddress =
            (await whenDefined(nonConnectedEthersProvider, client => getStokenOwnerOf(client, sTokenId))) || ''
          const { withdrawableReward: reward } = (await whenDefined(nonConnectedEthersProvider, client =>
            getStokenRewards(client, sTokenId)
          )) || { withdrawableReward: 0 }

          const [accountData, ens, transferBlock] = await Promise.all([
            getAccount(ownerAccountAddress),
            nonConnectedEthersL1Provider?.lookupAddress(ownerAccountAddress),
            whenDefined(nonConnectedEthersProvider, client => getStokenHeldAt(client, sTokenId))
          ])
          const since =
            transferBlock && transferBlock.length > 0 ? (await transferBlock[0].getBlock()).timestamp : undefined
          return {
            rank: idx + 1,
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
    data && fetcher()
  }, [data, nonConnectedEthersProvider])

  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
      render: (text: string) => <span>{text}</span>
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
          <span>{address}</span>
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
    }
  ]

  return <Table columns={columns} dataSource={tableData} loading={loading} />
}

const PropertySupporters = ({ propertyAddress }: Props) => {
  return <SupportersTable propertyAddress={propertyAddress} />
}

export default PropertySupporters
