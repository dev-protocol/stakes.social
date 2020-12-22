import React, { useCallback, useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import { Footer } from 'src/components/organisms/Footer'
import { Headline } from 'src/components/atoms/Headline'
import { Header } from 'src/components/organisms/Header'
import { Container } from 'src/components/atoms/Container'
import {
  useCreateAccount,
  useGetAccount,
  useUpdateAccount,
  useUploadAccountAvatar,
  useUploadAccountCoverImages,
  useDeleteFile,
  useGetPropertySetting,
  useGetProperty,
  useCreatePropertySetting,
  useUpdatePropertySetting
} from 'src/fixtures/dev-for-apps/hooks'
import { Pagination, Spin, Button, Divider, Form, Input, Result, Skeleton, Upload } from 'antd'
import { whenDefined } from 'src/fixtures/utility'
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface'
import { Image } from 'src/fixtures/dev-for-apps/utility'
import SkeletonInput from 'antd/lib/skeleton/Input'
import { useRouter } from 'next/router'
import {
  useListOwnedPropertyMetaQuery,
  useGetPropertyAuthenticationQuery,
  useListTopSupportingAccountQuery
} from '@dev/graphql'
import { useProvider } from 'src/fixtures/wallet/hooks'
import Link from 'next/link'
import { FullpageWrap } from 'src/components/atoms/FullpageWrap'
import { getPath } from 'src/fixtures/utility/route'
import { AvatarProperty } from 'src/components/molecules/AvatarProperty'
import { truncate } from 'src/fixtures/utility/string'
import { SyncOutlined } from '@ant-design/icons'

type InitialProps = {}
type Props = {} & InitialProps

const apiDataToUploadFile = ({ hash: uid, url, name, size, mime: type }: Image): UploadFile => ({
  status: 'done',
  uid,
  url,
  name,
  size,
  type
})

const ProfileUpdateForm = ({ accountAddress }: { accountAddress: string }) => {
  const [form] = Form.useForm()
  const { data, found } = useGetAccount(accountAddress)
  const { postAccountHandler: createAccount, isLoading } = useCreateAccount(accountAddress)
  const { putAccountHandler: updateAccount } = useUpdateAccount(Number(data?.id), accountAddress)
  const handleSubmit = useCallback(
    (displayName: string, biography: string, website: string, github: string) => {
      const handler = data?.id ? updateAccount : createAccount
      // NOTE: account global's incognito mode is disabled, now.
      const isPrivateStaking = false
      handler(displayName, biography, website, github, isPrivateStaking)
    },
    [createAccount, updateAccount, data]
  )

  useEffect(() => {
    form.setFieldsValue({
      displayName: data?.name,
      biography: data?.biography,
      website: data?.links?.website,
      github: data?.links?.github
    })
  }, [data, form])

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={({
        displayName,
        biography,
        website,
        github
      }: {
        displayName: string
        biography: string
        website: string
        github: string
      }) => handleSubmit(displayName, biography, website, github)}
    >
      <Form.Item label="Display Name" name="displayName">
        <Input placeholder="Enter the new display name" />
      </Form.Item>
      <Form.Item label="Biography" name="biography">
        {found ? <Input.TextArea placeholder="Enter the biography" /> : <SkeletonInput />}
      </Form.Item>
      <Form.Item label="Website" name="website">
        {found ? <Input placeholder="your website url" /> : <SkeletonInput />}
      </Form.Item>
      <Form.Item label="GitHub" name="github">
        {found ? <Input placeholder="your github account url" /> : <SkeletonInput />}
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={isLoading} disabled={isLoading}>
        Save
      </Button>
    </Form>
  )
}

const PoolsOverview = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: 3fr 1fr 1fr;
  }
`

const PoolLogoSection = styled.div`
  display: flex;
  align-items: center;
  img,
  svg,
  div {
    margin-right: 10px;
  }
`

const Card = styled.div`
  width: auto;
  border: solid 1px #f0f0f0;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1.2em;
  cursor: pointer;
  background: #fff;
  margin-bottom: 20px;
`

const IncognitoButton = styled.button<{ isActive?: boolean; isFirst?: boolean }>`
  margin-right: ${props => (props?.isFirst ? '10px' : 'none')};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  background-color: ${props => (props.isActive ? 'black' : 'transparent')};
  width: 80px;
  span {
    color: ${props => (props.isActive ? 'white' : 'black')};
  }
`

const Circle = styled.div<{ isActive?: boolean }>`
  padding: 6px;
  border-radius: 45px;
  background-color: ${props => (props.isActive ? 'white' : 'black')};
`

const CurrencyContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 11px;
`

const IncognitoProperty = ({
  propertyAddress,
  accountAddress,
  className
}: {
  propertyAddress: string
  accountAddress: string
  className?: string
}) => {
  const { isLoading: isCreatePropertyLoading, postPropertySettingHandler } = useCreatePropertySetting(
    propertyAddress,
    accountAddress
  )
  const { isLoading: isUpdatePropertyLoading, putPropertySettingHandler } = useUpdatePropertySetting(
    propertyAddress,
    accountAddress
  )
  const { data: incognitoSettings } = useGetPropertySetting(propertyAddress, accountAddress)
  const [incognitoMode, setIncognitoMode] = useState(false)
  const { data } = useGetPropertyAuthenticationQuery({ variables: { propertyAddress } })
  const includeAssets = useMemo(
    () => data && truncate(data.property_authentication.map(e => e.authentication_id).join(', '), 24),
    [data]
  )
  const { data: strapiProperty } = useGetProperty(propertyAddress)

  const handleModeChange = async (isIncognito: boolean) => {
    if (!incognitoSettings) {
      await postPropertySettingHandler(isIncognito)
    } else {
      await putPropertySettingHandler(isIncognito)
    }
    setIncognitoMode(isIncognito)
  }

  useEffect(() => {
    setIncognitoMode(incognitoSettings?.private_staking || false)
  }, [incognitoSettings])

  return (
    <Card>
      <PoolsOverview>
        <PoolLogoSection>
          <AvatarProperty size={'75'} propertyAddress={propertyAddress} />
          <h4>{strapiProperty?.name || includeAssets}</h4>
        </PoolLogoSection>
        <CurrencyContainer className={className}>
          {(isCreatePropertyLoading || isUpdatePropertyLoading) && <SyncOutlined spin />}
          <IncognitoButton
            style={{ marginLeft: '5px' }}
            disabled={isCreatePropertyLoading || isUpdatePropertyLoading}
            onClick={() => handleModeChange(false)}
            isActive={!incognitoMode}
            isFirst
          >
            <Circle isActive={!incognitoMode} />
            <span style={{ marginLeft: '2px' }}>Public</span>
          </IncognitoButton>
          <IncognitoButton
            disabled={isCreatePropertyLoading || isUpdatePropertyLoading}
            onClick={() => handleModeChange(true)}
            isActive={incognitoMode}
          >
            <Circle isActive={incognitoMode} />
            <span style={{ marginLeft: '2px' }}>Hidden</span>
          </IncognitoButton>
        </CurrencyContainer>
      </PoolsOverview>
    </Card>
  )
}

const IncognitoPropertiesOverview = ({ accountAddress }: { accountAddress: string }) => {
  const [paginationProps, setPaginationProps] = useState<{ offset: number; limit: number; currentPage: number }>({
    offset: 0,
    limit: 5,
    currentPage: 1
  })

  const { data, loading } = useListTopSupportingAccountQuery({
    variables: {
      account_address: accountAddress,
      offset: paginationProps.offset,
      limit: paginationProps.limit
    }
  })

  const { data: totalProperties } = useListOwnedPropertyMetaQuery({
    variables: {
      account_address: accountAddress
    }
  })

  const handlePagination = useCallback((page: number) => {
    setPaginationProps(oldPaginationProps => {
      const newOffset = page === 1 ? 0 : 5 * (page - 1)
      return { ...oldPaginationProps, currentPage: page, offset: newOffset }
    })
  }, [])

  return (
    <div id="pools" style={{ gridColumn: '1 / -1', width: '100%' }}>
      <h2>Staked projects</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {loading && <Spin size="large" style={{ display: 'block', width: 'auto', padding: '100px' }} />}

        {data?.account_lockup &&
          data?.account_lockup?.map((property: { property_address: string }, index: number) => (
            <IncognitoProperty
              accountAddress={accountAddress}
              propertyAddress={property.property_address}
              key={index}
            />
          ))}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Pagination
            current={paginationProps.currentPage}
            showSizeChanger={false}
            size="default"
            responsive={true}
            defaultPageSize={5}
            onChange={handlePagination}
            total={totalProperties?.property_meta?.length}
          />
        </div>
      </div>
    </div>
  )
}

const AvatarUpdateForm = ({ accountAddress }: { accountAddress: string }) => {
  const { data } = useGetAccount(accountAddress)
  const [fileList, setFileList] = useState<UploadFile[] | undefined>()
  const { upload } = useUploadAccountAvatar(accountAddress)
  const { deleteFileHandler: deleteFile } = useDeleteFile(accountAddress)
  useEffect(() => {
    setFileList(whenDefined(data?.portrait, x => [apiDataToUploadFile(x)]))
  }, [setFileList, data])

  const handleChange = (info: UploadChangeParam<UploadFile>) => {
    if (info.event) {
      setFileList([{ ...info.file, status: 'uploading' }])
      upload(info.file.originFileObj)
    }
  }

  const handleRemove = (file: UploadFile) => {
    whenDefined(data?.portrait.id, x => deleteFile(x, file.name))
    setFileList([])
  }

  return (
    <Upload
      name="portrait"
      multiple={false}
      listType="picture-card"
      fileList={fileList}
      onChange={handleChange}
      onRemove={handleRemove}
    >
      <div>
        <p>{data && data.portrait ? 'Change' : 'Upload'}</p>
      </div>
    </Upload>
  )
}

const CoverImagesUpdateForm = ({ accountAddress }: { accountAddress: string }) => {
  const { data } = useGetAccount(accountAddress)
  const [fileList, setFileList] = useState<UploadFile[] | undefined>()
  const { upload } = useUploadAccountCoverImages(accountAddress)
  const { deleteFileHandler: deleteFile } = useDeleteFile(accountAddress)
  useEffect(() => {
    setFileList(whenDefined(data?.cover_images, x => x.map(y => apiDataToUploadFile(y))))
  }, [setFileList, data])

  const handleChange = (info: UploadChangeParam<UploadFile>) => {
    if (info.event) {
      setFileList([...(fileList ?? []), { ...info.file, status: 'uploading' }])
      upload(info.file.originFileObj)
    }
  }

  const handleRemove = async (file: UploadFile) => {
    const target = data?.cover_images.find(x => x.hash === file.uid)
    if (!target || !fileList) {
      return
    }
    const deletedFileList = fileList.filter(x => x.uid !== target.hash)
    await deleteFile(target.id, file.name).then(res => {
      whenDefined(res?.id, _ => setFileList(deletedFileList))
    })
  }

  return (
    <Upload
      name="portrait"
      multiple={false}
      listType="picture-card"
      fileList={fileList}
      onChange={handleChange}
      onRemove={handleRemove}
    >
      <div>
        <p>Upload</p>
      </div>
    </Upload>
  )
}

const AuthorEdit = (_: Props) => {
  const { accountAddress } = useProvider()
  const [, authorAddress] = getPath(useRouter().asPath)
  const { data, loading } = useListOwnedPropertyMetaQuery({
    variables: { account_address: authorAddress, offset: 0, limit: 1 }
  })
  const isAuthor = Boolean(data?.property_meta?.length) && accountAddress?.toLowerCase() === authorAddress.toLowerCase()

  return (
    <FullpageWrap>
      <main>
        <Header />
        <Headline height={300}>
          <h1>Profile settings</h1>
        </Headline>
        <Container>
          {loading ? (
            <Skeleton />
          ) : isAuthor ? (
            <>
              <h2>Basic</h2>
              <ProfileUpdateForm accountAddress={authorAddress} />
              <Divider />
              <h2>Avatar</h2>
              <AvatarUpdateForm accountAddress={authorAddress} />
              <Divider />
              <h2>Cover Images</h2>
              <CoverImagesUpdateForm accountAddress={authorAddress} />
              <Divider />
              <IncognitoPropertiesOverview accountAddress={authorAddress} />
            </>
          ) : (
            <Result
              status="error"
              title="Not authorized"
              subTitle="You do not have sufficient permission to edit this page."
              extra={
                <Link as={`/author/${authorAddress}`} href="/author/[authorAddress]">
                  <Button type="primary">Author Profile</Button>
                </Link>
              }
            />
          )}
        </Container>
      </main>
      <Footer />
    </FullpageWrap>
  )
}

export default AuthorEdit
