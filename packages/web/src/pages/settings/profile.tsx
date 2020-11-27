import React, { useCallback, useState } from 'react'
import { Footer } from 'src/components/organisms/Footer'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import { Headline } from 'src/components/atoms/Headline'
import { Header } from 'src/components/organisms/Header'
import { Container } from 'src/components/atoms/Container'
import { useProvider } from 'src/fixtures/wallet/hooks'
import {
  useCreateAccount,
  useGetAccount,
  useUpdateAccount,
  useUploadAccountAvatar,
  useUploadAccountCoverImages
} from 'src/fixtures/dev-for-apps/hooks'
import { Button, Divider, Form, Input, Upload } from 'antd'
import { whenDefined } from 'src/fixtures/utility'
import { NotConnectedAndEmpty } from 'src/components/atoms/NotConnectedAndEmpty'
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface'
import { useEffect } from 'react'
import { Image } from 'src/fixtures/dev-for-apps/utility'
import SkeletonInput from 'antd/lib/skeleton/Input'

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
  const { data } = useGetAccount(accountAddress)
  const { postAccountHandler: createAccount, isLoading } = useCreateAccount(accountAddress)
  const { putAccountHandler: updateAccount } = useUpdateAccount(Number(data?.id), accountAddress)
  const isExists = Boolean(data)
  const handleSubmit = useCallback(
    (displayName: string, biography: string) => {
      const handler = isExists ? updateAccount : createAccount
      handler(displayName, biography)
    },
    [createAccount, updateAccount, isExists]
  )

  return (
    <Form
      layout="vertical"
      onFinish={({ displayName, biography }: { displayName: string; biography: string }) =>
        handleSubmit(displayName, biography)
      }
    >
      <Form.Item label="Dispaly Name" name="displayName">
        {data === undefined ? (
          <SkeletonInput />
        ) : (
          <Input placeholder="Enter the new display name" defaultValue={data.name} />
        )}
      </Form.Item>
      <Form.Item label="Biography" name="biography">
        {data === undefined ? (
          <SkeletonInput />
        ) : (
          <Input.TextArea placeholder="Enter the biography" defaultValue={data.biography} />
        )}
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

const Demo = (_: Props) => {
  const { accountAddress } = useProvider()

  return (
    <>
      <Header />
      <EarlyAccess />
      <Headline height={300}>
        <h1>Profile settings</h1>
      </Headline>
      {whenDefined(accountAddress, account => (
        <Container>
          <h2>Basic</h2>
          <ProfileUpdateForm accountAddress={account} />
          <Divider />
          <h2>Avatar</h2>
          <AvatarUpdateForm accountAddress={account} />
          <Divider />
          <h2>Cover Images</h2>
          <CoverImagesUpdateForm accountAddress={account} />
        </Container>
      )) ?? <NotConnectedAndEmpty />}
      <Footer />
    </>
  )
}

export default Demo
