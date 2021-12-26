import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { format } from 'date-fns'
import styled from 'styled-components'
import { LeftOutlined, InboxOutlined } from '@ant-design/icons'
import { Table, Upload, message } from 'antd'
import { Container } from 'src/components/atoms/Container'
import { Avatar } from 'src/components/molecules/Avatar'
import { Header } from 'src/components/organisms/Header'
import { Footer } from 'src/components/organisms/Footer'
import { ButtonWithGradient } from 'src/components/atoms/ButtonWithGradient'
import {
  usePropertyAuthor,
  useGetSTokenTokenURI,
  useGetStokenRewards,
  useGetSTokenOwnerOf,
  useGetStokenHeldAt,
  useGetSTokenPositions,
  useSetSTokenTokenURIImage
} from 'src/fixtures/dev-kit/hooks'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { useGetAccount } from 'src/fixtures/dev-for-apps/hooks'
import { useIPFSImageUploader } from 'src/fixtures/ipfs/hooks'

const { Dragger } = Upload

type Props = {}

const Wrap = styled.div`
  margin: 1rem auto;
  max-width: 1048px;
  text-align: center;
`

const tableColumns = [
  {
    title: 'ID',
    dataIndex: 'sTokenId',
    key: 'sTokenId',
    render: (text: string) => <span>{text}</span>
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (imageURI: string) => (
      <div
        style={{
          backgroundImage: `url('${imageURI}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100px'
        }}
      />
    )
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
    title: 'Staked',
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
    render: (timestamp: any) => {
      return timestamp ? <span>{`${format(timestamp * 1000, 'M/d/Y')}`}</span> : <span>-</span>
    }
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

const formatter = new Intl.NumberFormat('en-US')

const STokenPosition = ({ sTokenId }: { sTokenId: number }) => {
  const [sinceTimestamp, setSinceTimestamp] = useState(undefined)
  const { tokenURI } = useGetSTokenTokenURI(sTokenId)
  const { owner: ownerAccountAddress } = useGetSTokenOwnerOf(sTokenId)
  const { data: accountData } = useGetAccount(ownerAccountAddress)
  const { positions } = useGetSTokenPositions(sTokenId)
  const { rewards } = useGetStokenRewards(sTokenId)
  const { since, block, loading } = useGetStokenHeldAt(ownerAccountAddress, sTokenId)
  useEffect(() => {
    const fetcher = async (since: any) => {
      const block = await since
      setSinceTimestamp(block?.timestamp)
    }
    block && fetcher(block)
  }, [since, block])

  const tableData = useMemo(() => {
    return [
      {
        sTokenId,
        image: tokenURI?.image,
        address: ownerAccountAddress,
        account: {
          address: ownerAccountAddress,
          name: accountData ? accountData?.name : ''
        },
        amount: positions?.amount,
        since: sinceTimestamp,
        reward: rewards?.withdrawableReward
      }
    ]
  }, [sTokenId, tokenURI, ownerAccountAddress, accountData, positions, rewards, sinceTimestamp])

  return (
    <Table
      columns={tableColumns}
      dataSource={tableData}
      rowKey="rank"
      loading={loading}
      pagination={{ position: [] }}
    />
  )
}

const STokenPositionDetail = (_: Props) => {
  const [fileObj, setFileObj] = useState<File | undefined>(undefined)
  const { stokenId: sTokenIdString } = useRouter().query as { stokenId: string }
  const sTokenId = parseInt(sTokenIdString)
  const { positions } = useGetSTokenPositions(sTokenId)

  const propertyAddress = useMemo(() => {
    return positions?.property
  }, [positions])

  const { accountAddress } = useProvider()
  const { author } = usePropertyAuthor(propertyAddress)
  const isAuthor = useMemo(() => {
    return accountAddress === author
  }, [accountAddress, author])

  // TODO: integrate to ipfs
  const draggerProps = {
    name: 'file',
    multiple: false,
    maxCount: 1,
    onChange(info: any) {
      console.log(info)
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        setFileObj(info.file)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
    onDrop(e: any) {
      console.log('Dropped files', e.dataTransfer.files)
    }
  }

  const { upload: uploader, error: uploaderError } = useIPFSImageUploader()
  const { callback: setStokenURIImage } = useSetSTokenTokenURIImage(sTokenId)

  const onSubmit = async () => {
    // upload image to IPFS
    if (!fileObj) {
      message.error(`file upload failed.`)
      return
    }
    const cid = fileObj && uploader(fileObj)
    if (uploaderError) {
      return
    }

    // set token uri
    setStokenURIImage(await cid)
      .then(() => message.success('Success to set sToken Image'))
      .catch(() => message.error('Fail to set sToken Image'))
  }

  return (
    <>
      <Header />
      <Wrap>
        <Container>
          {propertyAddress ? (
            <Link href={`/${propertyAddress}`} passHref>
              <a>
                <LeftOutlined />
                Project
              </a>
            </Link>
          ) : (
            <>
              <LeftOutlined />
              Project
            </>
          )}
          <h1>Attach Image to sToken ({`${sTokenId}`})</h1>
          <h3>Change the image of sToken#{`${sTokenId}`}</h3>
        </Container>
        <STokenPosition sTokenId={sTokenId} />
        {author === undefined && isAuthor && (
          <>
            <Dragger style={{ width: '100%', height: '100%' }} {...draggerProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
              </p>
            </Dragger>
            <ButtonWithGradient onSubmit={onSubmit}>Save</ButtonWithGradient>
          </>
        )}
      </Wrap>

      <Footer />
    </>
  )
}

export default STokenPositionDetail
