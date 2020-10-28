import React, { useCallback, useEffect, useState } from 'react'
import { message, Button, Form, Input, Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { useGetAccountAddress } from 'src/fixtures/wallet/hooks'
import { useGetAccount, useCreateAccount, useUpdateAccount, useUploadFile } from 'src/fixtures/dev-for-apps/hooks'
import { Account } from 'src/fixtures/dev-for-apps/utility'
import { Container } from 'src/components/atoms/Container'
import { Avatar } from 'src/components/molecules/Avatar'
import styled from 'styled-components'

interface Props {}

const Section = styled.section`
  display: grid;
  padding: 1rem;
  grid-gap: 0.5rem;
`
const Title = styled.div`
  font-size: 1rem;
`
const Text = styled.div`
  font-size: 1.3rem;
  word-break: break-all;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`
const LongText = styled.div`
  font-size: 1.3rem;
  word-break: break-all;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`
const StyledForm = styled(Form)`
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  justify-content: flex-start;
`

const getBase64 = (img: any, callback: any) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

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

export const AvatarUpdateForm = ({ accountAddress }: { accountAddress?: string }) => {
  const avatarImageSize = '120'
  const [loading, setLoading] = useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState<string>('')
  const { postUploadFileHandler: uploadFile, isLoading: isUploadLoading } = useUploadFile(accountAddress || '')
  const [account, setAccount] = useState<Account>()
  const { data: user } = useGetAccount(accountAddress || '')
  useEffect(() => {
    if (user && user.length === 1) {
      setAccount(user[0])
    }
  }, [user])

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
      const refId = account?.id
      const ref = 'Account'
      const field = 'portrait'
      const path = `assets/${accountAddress}`
      if (refId === undefined) {
        return
      }
      uploadFile(refId, ref, field, info.upload.file.originFileObj, path)
      setImageUrl('')
    },
    [account, accountAddress, uploadFile]
  )

  return (
    <Section>
      <Title>Your Avatar</Title>
      <Avatar accountAddress={accountAddress} size={avatarImageSize} />
      <StyledForm layout="vertical" onFinish={((fileList: object[]) => handleSubmit(fileList)) as any}>
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
      </StyledForm>
    </Section>
  )
}

export const ProfileUpdateForm = ({ accountAddress }: { accountAddress?: string }) => {
  const address = accountAddress || ''
  const [account, setAccount] = useState<Account>()
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const { postAccountHandler: createAccount, isLoading } = useCreateAccount(address)
  const { putAccountHandler: updateAccount } = useUpdateAccount(account?.id || 0, address)
  const handleSubmitDisplayName = useCallback(
    (displayName: string, biography: string) => {
      const handler = account ? updateAccount : createAccount
      handler(displayName, biography)
      setIsEdit(!isEdit)
    },
    [createAccount, updateAccount, account, isEdit]
  )
  const { data: user } = useGetAccount(accountAddress || '')
  useEffect(() => {
    if (user && user.length === 1) {
      setAccount(user[0])
    }
  }, [user])

  return (
    <>
      {isEdit ? (
        <StyledForm
          layout="vertical"
          onFinish={
            (({ displayName, biography }: { displayName: string; biography: string }) =>
              handleSubmitDisplayName(displayName, biography)) as any
          }
        >
          <Form.Item
            label="Dispaly Name"
            name="displayName"
            initialValue={account?.name}
            rules={[
              { required: true, message: 'Please input display name.' },
              () => ({
                validator() {
                  if (address !== '') {
                    return Promise.resolve()
                  }
                  return Promise.reject('Please connect to a wallet')
                }
              })
            ]}
          >
            <Input placeholder="Enter the new display name" />
          </Form.Item>
          <Form.Item
            label="Biography"
            name="biography"
            initialValue={account?.biography}
            rules={[
              { required: false },
              () => ({
                validator() {
                  if (address !== '') {
                    return Promise.resolve()
                  }
                  return Promise.reject('Please connect to a wallet')
                }
              })
            ]}
          >
            <Input.TextArea placeholder="Enter the biography. " />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading} disabled={isLoading}>
            Save
          </Button>
          <Button htmlType="button" onClick={() => setIsEdit(!isEdit)}>
            Cancel
          </Button>
        </StyledForm>
      ) : (
        <>
          <Section>
            <Title>Display name</Title>
            <Text>{account && account.name ? account.name : '(Not set)'}</Text>
            <Title>Biography</Title>
            <LongText>{account && account.biography ? account.biography : '(Not set)'}</LongText>
          </Section>
          <Section>
            <Button type="primary" onClick={() => setIsEdit(!isEdit)}>
              Edit
            </Button>
          </Section>
        </>
      )}
    </>
  )
}

export const UserProfile = (_: Props) => {
  const { accountAddress } = useGetAccountAddress()

  return (
    <Container>
      <Section>
        <Title>Your Address</Title>
        <Text>{accountAddress || '-'}</Text>
      </Section>

      <ProfileUpdateForm accountAddress={accountAddress} />
      <AvatarUpdateForm accountAddress={accountAddress} />
    </Container>
  )
}
