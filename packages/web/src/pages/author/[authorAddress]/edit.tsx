import React, { useCallback, useEffect, useState } from 'react'
import { FormInstance } from 'antd/lib/form'
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
  useDeleteFile
} from 'src/fixtures/dev-for-apps/hooks'
import { Button, Divider, Form, Input, Result, Upload } from 'antd'
import { whenDefined } from 'src/fixtures/utility'
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface'
import { Image } from 'src/fixtures/dev-for-apps/utility'
import SkeletonInput from 'antd/lib/skeleton/Input'
import { useRouter } from 'next/router'
import { useProvider } from 'src/fixtures/wallet/hooks'
import Link from 'next/link'
import { FullpageWrap } from 'src/components/atoms/FullpageWrap'

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

const pack = (form: FormInstance) => ({
  displayName: form.getFieldValue('displayName'),
  biography: form.getFieldValue('biography'),
  website: form.getFieldValue('website'),
  github: form.getFieldValue('github')
})

const ProfileForm = ({ accountAddress }: { accountAddress: string }) => {
  const [form] = Form.useForm()
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

  useEffect(() => {
    form.setFieldsValue({
      displayName: data?.name,
      biography: data?.biography,
      website: data?.links?.website,
      github: data?.links?.github
    })
  }, [data, form])

  // for avatar
  const [fileList, setFileList] = useState<UploadFile[] | undefined>()
  const { upload } = useUploadAccountAvatar(accountAddress)
  const { deleteFileHandler: deleteFile } = useDeleteFile(accountAddress)
  useEffect(() => {
    setFileList(whenDefined(data?.portrait, x => [apiDataToUploadFile(x)]))
  }, [setFileList, data])

  const handleChange = async (info: UploadChangeParam<UploadFile>) => {
    // handle *not* 'removed' status files on change callback
    if (info.file && info.file.status !== 'removed') {
      const { displayName, biography, website, github } = pack(form)
      const createdAccount =
        !data && found ? await createAccount(displayName, biography, website, github) : { id: undefined }
      if (createdAccount === undefined) {
        return
      }
      if (fileList && fileList.length > 0) {
        whenDefined(data?.portrait.id, x => deleteFile(x, info.file.name))
        setFileList([])
      }
      setFileList([{ ...info.file, status: 'uploading' }])
      upload(info.file.originFileObj, createdAccount?.id)
    }
  }

  const handleRemove = (file: UploadFile) => {
    whenDefined(data?.portrait.id, x => deleteFile(x, file.name))
    setFileList([])
  }

  // for cover images
  const [coverFileList, setCoverFileList] = useState<UploadFile[] | undefined>()
  const { upload: uploadCoverImages } = useUploadAccountCoverImages(accountAddress)
  useEffect(() => {
    setCoverFileList(
      whenDefined(data?.cover_images, x => (x.length > 0 ? x.map(y => apiDataToUploadFile(y)) : undefined))
    )
  }, [setCoverFileList, data])

  const handleCoverImageChange = async (info: UploadChangeParam<UploadFile>) => {
    if (info.event) {
      const { displayName, biography, website, github } = pack(form)
      const createdAccount =
        !data && found ? await createAccount(displayName, biography, website, github) : { id: undefined }
      if (createdAccount === undefined) {
        return
      }
      setCoverFileList([...(coverFileList ?? []), { ...info.file, status: 'uploading' }])
      uploadCoverImages(info.file.originFileObj, createdAccount?.id)
    }
  }

  const handleCoverImageRemove = async (file: UploadFile) => {
    const target = data?.cover_images.find(x => x.hash === file.uid)
    if (!target || !coverFileList) {
      return
    }
    const deletedFileList = coverFileList.filter(x => x.uid !== target.hash)
    await deleteFile(target.id, file.name).then(res => {
      whenDefined(res?.id, _ => setCoverFileList(deletedFileList))
    })
  }

  return (
    <>
      <h2>Basic</h2>
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
      <Divider />
      <h2>Avatar</h2>
      <Upload
        name="portrait"
        multiple={false}
        listType="picture-card"
        fileList={fileList}
        customRequest={() => {}}
        onChange={handleChange}
        onRemove={handleRemove}
      >
        <div>
          <p>{data && data.portrait ? 'Change' : 'Upload'}</p>
        </div>
      </Upload>
      <Divider />
      <h2>Cover Images</h2>
      <Upload
        name="coverImages"
        multiple={true}
        listType="picture-card"
        fileList={coverFileList}
        onChange={handleCoverImageChange}
        onRemove={handleCoverImageRemove}
        className="upload-list-inline"
      >
        <div>
          <p>Upload</p>
        </div>
      </Upload>
    </>
  )
}

const AuthorEdit = (_: Props) => {
  const { accountAddress } = useProvider()
  const { authorAddress } = useRouter().query
  const isMyself = accountAddress?.toLowerCase() === String(authorAddress).toLowerCase()

  return (
    <FullpageWrap>
      <main>
        <Header />
        <Headline height={300}>
          <h1>Profile settings</h1>
        </Headline>
        <Container>
          {isMyself ? (
            <ProfileForm accountAddress={String(authorAddress)} />
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
