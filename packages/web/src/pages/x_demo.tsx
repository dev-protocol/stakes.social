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
  useUploadAccountAvatar
} from 'src/fixtures/dev-for-apps/hooks'
import { Button, Divider, Form, Input, message, Upload } from 'antd'
import { whenDefined } from 'src/fixtures/utility'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { NotConnectedAndEmpty } from 'src/components/atoms/NotConnectedAndEmpty'

type InitialProps = {}
type Props = {} & InitialProps

const getBase64 = (img: any, callback: any) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

const ShowProfile = ({ accountAddress }: { accountAddress: string }) => {
  const { data } = useGetAccount(accountAddress)
  console.log('Stored data:', data)

  return <pre>{data ? JSON.stringify(data) : ''}</pre>
}

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
      onFinish={
        (({ displayName, biography }: { displayName: string; biography: string }) =>
          handleSubmit(displayName, biography)) as any
      }
    >
      <Form.Item
        label="Dispaly Name"
        name="displayName"
        rules={[{ required: true, message: 'Please input display name.' }]}
      >
        <Input placeholder="Enter the new display name" />
      </Form.Item>
      <Form.Item label="Biography" name="biography" rules={[{ required: false }]}>
        <Input.TextArea placeholder="Enter the biography. " />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={isLoading} disabled={isLoading}>
        Save
      </Button>
    </Form>
  )
}

const AvatarUpdateForm = ({ accountAddress }: { accountAddress: string }) => {
  const avatarImageSize = 120
  const [loading, setLoading] = useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState<string>('')
  const { upload, isLoading: isUploadLoading } = useUploadAccountAvatar(accountAddress)

  const beforeUpload = (file: any) => {
    const isValidImage = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isValidImage) {
      message.error('can only upload JPG/PNG file')
    }
    const isValidSize = file.size / 1024 / 1024 < 2
    if (!isValidSize) {
      message.error('image file must smaller than 2MB')
    }
    return isValidImage && isValidSize
  }

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imageUrl: string) => {
        setLoading(false)
        setImageUrl(imageUrl)
      })
    }
  }
  const handleSubmit = useCallback(
    (info: any) => {
      upload(info.upload.file.originFileObj)
      setImageUrl('')
    },
    [upload]
  )

  return (
    <Form layout="vertical" onFinish={(fileList: object[]) => handleSubmit(fileList)}>
      <Form.Item name="upload" valuePropName="files">
        <Upload
          name="portrait"
          multiple={false}
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <div>
              <img src={imageUrl} alt="avatar" style={{ width: `${avatarImageSize}px` }} />
            </div>
          ) : (
            <div>
              {loading ? <LoadingOutlined /> : <PlusOutlined />}
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isUploadLoading}>
          Save
        </Button>
      </Form.Item>
    </Form>
  )
}

const Demo = (_: Props) => {
  const { accountAddress } = useProvider()

  return (
    <>
      <Header />
      <EarlyAccess />
      <Headline height={300}>
        <h1>Profile editing hooks demo</h1>
        <p>Should remove this page after implemented profile editing page.</p>
      </Headline>
      {whenDefined(accountAddress, account => (
        <Container>
          <h2>Stored Data</h2>
          <ShowProfile accountAddress={account} />
          <Divider />
          <h2>Basic</h2>
          <ProfileUpdateForm accountAddress={account} />
          <Divider />
          <h2>Avatar</h2>
          <AvatarUpdateForm accountAddress={account} />
        </Container>
      )) ?? <NotConnectedAndEmpty />}
      <Footer />
    </>
  )
}

export default Demo
