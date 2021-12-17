import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import { LeftOutlined, InboxOutlined } from '@ant-design/icons'
import { Upload, message } from 'antd'
import { Container } from 'src/components/atoms/Container'
import { Avatar } from 'src/components/molecules/Avatar'
import { Header } from 'src/components/organisms/Header'
import { Footer } from 'src/components/organisms/Footer'
import {
  useGetSTokenTokenURI,
  useGetStokenRewards,
  useGetSTokenOwnerOf,
  useGetSTokenPositions
} from 'src/fixtures/dev-kit/hooks'
import { useGetAccount } from 'src/fixtures/dev-for-apps/hooks'
import { toNaturalNumber } from 'src/fixtures/utility'

const { Dragger } = Upload

type Props = {}

const Wrap = styled.div`
  margin: 1rem auto;
  max-width: 1048px;
`

const Main = styled(Container)`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr;
  @media (min-width: 1024px) {
    grid-gap: 3rem 2rem;
  }
`

const STokenPositionDetail = (_: Props) => {
  const { stokenId: sTokenIdString } = useRouter().query as { stokenId: string }
  const sTokenId = parseInt(sTokenIdString)
  const { tokenURI } = useGetSTokenTokenURI(sTokenId)
  const { owner: ownerAccountAddress } = useGetSTokenOwnerOf(sTokenId)
  const { positions } = useGetSTokenPositions(sTokenId)
  const { rewards } = useGetStokenRewards(sTokenId)
  const { data: ownerAccount } = useGetAccount(ownerAccountAddress)

  const withdrawableReward = useMemo(() => {
    return toNaturalNumber(rewards?.withdrawableReward)
  }, [rewards])
  const stakingAmount = useMemo(() => {
    return toNaturalNumber(positions?.amount)
  }, [positions])
  const propertyAddress = useMemo(() => {
    return positions?.property
  }, [positions])

  const draggerProps = {
    name: 'file',
    multiple: false,
    onChange(info: any) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
    onDrop(e: any) {
      console.log('Dropped files', e.dataTransfer.files)
    }
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
        <Main>
          <div>{sTokenId}</div>
          <div style={{ display: 'flex' }}>
            <Avatar accountAddress={ownerAccountAddress} size={'30'} />
            <span>{ownerAccount?.name}</span>
          </div>
          <div>{stakingAmount ? stakingAmount.dp(2).toFixed() : '0'} $DEV Staked</div>
          <div>Since: </div>
          <div>Pending Rewards: {withdrawableReward ? withdrawableReward.dp(2).toFixed() : '0'} DEV</div>
        </Main>
        <div style={{ backgroundImage: `url('${tokenURI?.image}')`, width: '290px', height: '500px' }} />
        <Dragger
          style={{
            backgroundImage: `url('${tokenURI?.image}')`,
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%'
          }}
          {...draggerProps}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
          </p>
        </Dragger>
      </Wrap>

      <Footer />
    </>
  )
}

export default STokenPositionDetail
