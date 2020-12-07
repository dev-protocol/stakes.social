import React, { useCallback, useState } from 'react'
import { Footer } from 'src/components/organisms/Footer'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import { Headline } from 'src/components/atoms/Headline'
import { Header } from 'src/components/organisms/Header'
import { Container } from 'src/components/atoms/Container'
import {
  useCreateAccount,
  useGetAccount,
  useUpdateAccount,
  useUploadAccountAvatar,
  useUploadAccountCoverImages
} from 'src/fixtures/dev-for-apps/hooks'
import { Button, Divider, Form, Input, Result, Skeleton, Upload } from 'antd'
import { whenDefined } from 'src/fixtures/utility'
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface'
import { useEffect } from 'react'
import { Image } from 'src/fixtures/dev-for-apps/utility'
import SkeletonInput from 'antd/lib/skeleton/Input'
import { useRouter } from 'next/router'
import { useListOwnedPropertyMetaQuery } from '@dev/graphql'
import { useProvider } from 'src/fixtures/wallet/hooks'
import Link from 'next/link'
import { FullpageWrap } from 'src/components/atoms/FullpageWrap'
import { getPath } from 'src/fixtures/utility/route'

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
  const { data, found } = useGetAccount(accountAddress)
  const { postAccountHandler: createAccount, isLoading } = useCreateAccount(accountAddress)
  const { putAccountHandler: updateAccount } = useUpdateAccount(Number(data?.id), accountAddress)
  const handleSubmit = useCallback(
    (displayName: string, biography: string, website: string, github: string) => {
      const handler = data?.id ? updateAccount : createAccount
      handler(displayName, biography, website, github)
    },
    [createAccount, updateAccount, data]
  )

  return (
    <Form
      layout="vertical"
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
        {found ? <Input placeholder="Enter the new display name" defaultValue={data?.name} /> : <SkeletonInput />}
      </Form.Item>
      <Form.Item label="Biography" name="biography">
        {found ? (
          <Input.TextArea placeholder="Enter the biography" defaultValue={data?.biography} />
        ) : (
          <SkeletonInput />
        )}
      </Form.Item>
      <Form.Item label="Website" name="website">
        {found ? <Input placeholder="your website url" defaultValue={data?.links?.website} /> : <SkeletonInput />}
      </Form.Item>
      <Form.Item label="GitHub" name="github">
        {found ? <Input placeholder="your github account url" defaultValue={data?.links?.github} /> : <SkeletonInput />}
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={isLoading} disabled={isLoading}>
        Save
      </Button>
    </Form>
  )
}

const AvatarUpdateForm = ({ accountAddress }: { accountAddress: string }) => {
  const { data } = useGetAccount(accountAddress)
  const [fileList, setFileList] = useState<UploadFile[] | undefined>()
  const { upload } = useUploadAccountAvatar(accountAddress)
  useEffect(() => {
    setFileList(whenDefined(data?.portrait, x => [apiDataToUploadFile(x)]))
  }, [setFileList, data])

  const handleChange = (info: UploadChangeParam<UploadFile>) => {
    if (info.event) {
      setFileList([{ ...info.file, status: 'uploading' }])
      upload(info.file.originFileObj)
    }
  }

  return (
    <Upload name="portrait" multiple={false} listType="picture-card" fileList={fileList} onChange={handleChange}>
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
  useEffect(() => {
    setFileList(whenDefined(data?.cover_images, x => x.map(y => apiDataToUploadFile(y))))
  }, [setFileList, data])

  const handleChange = (info: UploadChangeParam<UploadFile>) => {
    if (info.event) {
      setFileList([...(fileList ?? []), { ...info.file, status: 'uploading' }])
      upload(info.file.originFileObj)
    }
  }

  return (
    <Upload name="portrait" multiple={false} listType="picture-card" fileList={fileList} onChange={handleChange}>
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
        <EarlyAccess />
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
