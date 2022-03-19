// @L2 optimized
import React, { useCallback, useMemo, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Error from 'next/error'
import Link from 'next/link'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { PlusOutlined, LinkOutlined } from '@ant-design/icons'
import { Button, Form, Input, Upload, Tabs } from 'antd'
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface'
import { FormInstance } from 'antd/lib/form'
import { PropertyHeader } from 'src/components/organisms/PropertyHeader'
import { Footer } from 'src/components/organisms/Footer'
import { ResponsiveModal } from 'src/components/atoms/ResponsiveModal'
import { ButtonWithGradient } from 'src/components/atoms/ButtonWithGradient'
import { Container } from 'src/components/atoms/Container'
import { Header } from 'src/components/organisms/Header'
import { PropertyStats } from 'src/components/organisms/PropertyStats'
import PropertySupporters from 'src/components/organisms/PropertySupporters'
import {
  useAPY,
  useGetAssetsByProperties,
  useGetMyStakingAmount,
  usePropertyAuthor,
  usePropertyName
} from 'src/fixtures/dev-kit/hooks'
import { useGetPropertyAuthenticationQuery } from '@dev/graphql'
import { useGetPropertytInformation } from 'src/fixtures/devprtcl/hooks'
import {
  useGetAccount,
  useGetProperty,
  useCreateProperty,
  useUpdateProperty,
  useUploadPropertyCoverImages,
  useDeleteFile
} from 'src/fixtures/dev-for-apps/hooks'
import { Image, Property as DevForAppsProperty } from 'src/fixtures/dev-for-apps/utility'
import { Stake } from 'src/components/organisms/Stake'
import { useIsL1, useProvider, useDetectChain } from 'src/fixtures/wallet/hooks'
import { Avatar } from 'src/components/molecules/Avatar'
import { CoverImageOrGradient } from 'src/components/atoms/CoverImageOrGradient'
import { H3 } from 'src/components/atoms/Typography'
import { Twitter, Github } from 'src/components/atoms/SocialButtons'
import { whenDefined } from 'src/fixtures/utility'
import { isDenyProperty } from 'src/config/utils'

type Props = {}

interface ModalStates {
  visible: boolean
  title?: string
  contents?: React.ReactNode
}

const apiDataToUploadFile = ({ hash: uid, url, name, size, mime: type }: Image): UploadFile => ({
  status: 'done',
  uid,
  url,
  name,
  size,
  type
})

const { TabPane } = Tabs

const Main = styled(Container)`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr;
  @media (min-width: 1024px) {
    grid-gap: 3rem 2rem;
  }
`

const TabsGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  @media (min-width: 1024px) {
    grid-template-columns: 4fr 1fr;
    grid-gap: 3rem;
  }
`

const Stats = styled(PropertyStats)`
  display: grid;
  grid-gap: 1rem;
`

const Wrap = styled.div`
  margin: 1rem auto;
  max-width: 1048px;
`

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
`

const AssetsSection = styled.div`
  display: flex;
  flex-direction: column;
`
const AssetList = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
`

const AssetListItem = styled.div`
  padding: 5px 8px;
  border: 1px solid lightgrey;
  border-radius: 6px;
  margin-right: 5px;
  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06);
  margin-bottom: 1rem;
`

const AddAsset = styled.button`
  display: flex;
  background: none;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border: 1px solid lightgrey;
  border-radius: 6px;
  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);
    transition: 200ms ease-in;
  }
`

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const Flex = styled.div`
  display: flex;
  /* align-items: center; */

  img {
    border-radius: 90px;
  }
`

const RoundedCoverImageOrGradient = styled(CoverImageOrGradient)`
  border-radius: 5px;
`
const LinksArea = styled.div`
  display: flex;
  align-items: start;
  margin-left: -20px;
`

const AboutTitle = styled.div`
  display: flex;
  align-items: center;
`

const EditPropertyButton = styled(ButtonWithGradient)`
  font-size: 0.8rem;
  margin: 0 1rem 0.5rem;
`

const Author = ({ propertyAddress }: { propertyAddress: string }) => {
  const { author: authorAddress } = usePropertyAuthor(propertyAddress)
  const { data: dataAuthor } = useGetAccount(authorAddress)

  return authorAddress ? (
    <AuthorContainer>
      <h2>
        Created by <Link href={`/author/${authorAddress}`}>{dataAuthor?.name || authorAddress}</Link>
      </h2>
      <Flex>
        <Link passHref href="/author/[accountAddress]" as={`/author/${authorAddress}`}>
          <a>
            <div style={{ width: '150px' }}>
              <Avatar size={'150'} accountAddress={authorAddress} />
            </div>
          </a>
        </Link>
      </Flex>
    </AuthorContainer>
  ) : (
    <></>
  )
}

const pack = (form: FormInstance) => ({
  description: form.getFieldValue('description'),
  twitter: form.getFieldValue('twitter'),
  website: form.getFieldValue('website'),
  github: form.getFieldValue('github')
})

const PropertyAbout = ({
  isAuthor,
  dataProperty,
  authorAddress,
  propertyAddress
}: {
  isAuthor: boolean
  dataProperty: DevForAppsProperty
  authorAddress: string
  propertyAddress: string
}) => {
  const { postPropertyHandler: createProperty, isLoading } = useCreateProperty(authorAddress, propertyAddress)
  const { putPropertyHandler: updateProperty, isLoading: isLoadingUpdate } = useUpdateProperty(
    dataProperty?.id,
    authorAddress,
    propertyAddress
  )
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({
      description: dataProperty?.description,
      github: dataProperty?.links?.github,
      twitter: dataProperty?.links?.twitter,
      website: dataProperty?.links?.website
    })
  }, [dataProperty, form])

  const [modalStates, setModalStates] = useState<ModalStates>({ visible: false })
  const closeModal = () => {
    setModalStates({ ...modalStates, visible: false })
  }
  const handleSave = async (values: any) => {
    const handler = dataProperty?.id ? updateProperty : createProperty
    await handler(undefined, values.description, values.website, values.twitter, values.github)
    setModalStates({ ...modalStates, visible: false })
  }
  const showModal = useCallback(() => {
    setModalStates({ visible: true, title: 'Edit Property' })
  }, [setModalStates])
  const onClickEdit = () => showModal()

  // for upload files
  const { data, found } = useGetProperty(propertyAddress)
  const [fileList, setFileList] = useState<UploadFile[] | undefined>()
  const { upload } = useUploadPropertyCoverImages(propertyAddress, authorAddress)
  const { deleteFileHandler: deleteFile } = useDeleteFile(authorAddress)
  useEffect(() => {
    setFileList(whenDefined(dataProperty?.cover_image, x => [apiDataToUploadFile(x)]))
  }, [setFileList, dataProperty])

  const handleChange = async (info: UploadChangeParam<UploadFile>) => {
    if (info.event) {
      const { description, twitter, website, github } = pack(form)
      const createdProperty =
        !data && found ? await createProperty(undefined, description, website, twitter, github) : { id: undefined }
      if (createdProperty === undefined) {
        return
      }
      setFileList([{ ...info.file, status: 'uploading' }])
      upload(info.file.originFileObj, createdProperty?.id)
    }
  }

  const handleRemove = (file: UploadFile) => {
    whenDefined(data?.cover_image?.id, x => deleteFile(x, file.name))
    setFileList([])
  }

  return (
    <AboutSection>
      <AboutTitle>
        <h2>About</h2>
        {isAuthor ? (
          <EditPropertyButton size="small" onClick={onClickEdit}>
            Edit
          </EditPropertyButton>
        ) : (
          <></>
        )}
      </AboutTitle>
      <ReactMarkdown>{dataProperty ? dataProperty.description : ''}</ReactMarkdown>
      <H3>Links</H3>
      <LinksArea>
        {dataProperty?.links?.github && (
          <Github href={dataProperty?.links.github} target="_blank" rel="noopener noreferrer" />
        )}
        {dataProperty?.links?.twitter && (
          <Twitter href={dataProperty?.links.twitter} target="_blank" rel="noopener noreferrer" />
        )}
        {dataProperty?.links?.website && (
          <a href={dataProperty?.links.website} target="_blank" rel="noopener noreferrer">
            <Button
              style={{ marginLeft: '20px', padding: 3, width: '38px', height: '38px' }}
              shape="circle"
              icon={<LinkOutlined />}
            />
          </a>
        )}
      </LinksArea>
      <ResponsiveModal
        width={680}
        centered
        confirmLoading={isLoading || isLoadingUpdate}
        visible={modalStates.visible}
        title={modalStates.title}
        onCancel={closeModal}
        footer={[
          <ButtonWithGradient form="edit-property-form" key="submit" htmlType="submit">
            Save
          </ButtonWithGradient>
        ]}
      >
        <Form
          id="edit-property-form"
          layout="vertical"
          form={form}
          onFinish={({ description, github, twitter, website }) =>
            handleSave({ description, website, twitter, github })
          }
        >
          <Form.Item label="Description" name="description">
            <Input.TextArea placeholder="input property description" />
          </Form.Item>
          <Form.Item label="GitHub link" name="github">
            <Input placeholder="input GitHub link" />
          </Form.Item>
          <Form.Item label="Twitter link" name="twitter">
            <Input placeholder="input Twitter link" />
          </Form.Item>
          <Form.Item label="Other website link" name="website">
            <Input placeholder="input other website link" />
          </Form.Item>
          <Form.Item label="Cover image">
            <Upload
              name="file"
              multiple={false}
              listType="picture-card"
              fileList={fileList}
              onChange={handleChange}
              onRemove={handleRemove}
            >
              <div>
                <p>{data && data.cover_image ? 'Change' : 'Upload'}</p>
              </div>
            </Upload>
          </Form.Item>
        </Form>
      </ResponsiveModal>
    </AboutSection>
  )
}

const ConvertWrap = styled.div`
  padding: 1rem;
  border-radius: 5px;
  background: aliceblue;
`

const Convert = ({ propertyAddress }: { propertyAddress: string }) => {
  return (
    <Link href={`/convert-to-stokens/${propertyAddress}`} passHref>
      <a>
        <ConvertWrap>You can migrate your staking to a sTokens</ConvertWrap>
      </a>
    </Link>
  )
}

const PropertyAddressDetail = (_: Props) => {
  const { isL1 } = useIsL1()
  const { propertyAddress } = useRouter().query as { propertyAddress: string }
  const { name: propertyName } = usePropertyName(propertyAddress)
  const { apy, creators } = useAPY()
  const { data } = useGetPropertyAuthenticationQuery({ variables: { propertyAddress }, skip: !isL1 })
  const { data: dataProperty } = useGetProperty(propertyAddress)
  const { data: propertyInformation } = useGetPropertytInformation(isL1 ? propertyAddress : undefined)
  /* eslint-disable react-hooks/exhaustive-deps */
  // FYI: https://github.com/facebook/react/pull/19062
  const { data: includedAssetListL2 } = useGetAssetsByProperties(propertyAddress)
  const { accountAddress: loggedInWallet, nonConnectedEthersProvider } = useProvider()
  const { author: authorAddress } = usePropertyAuthor(propertyAddress)
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)
  const includedAssetList = useMemo(
    () => (data ? data.property_authentication.map(e => e.authentication_id) : includedAssetListL2?.map(e => e.id)),
    [data, includedAssetListL2]
  )
  const { name: network } = useDetectChain(nonConnectedEthersProvider)
  const isDeny = isDenyProperty(network, propertyAddress)

  return isDeny ? (
    <Error statusCode={404} />
  ) : (
    <>
      <Header></Header>
      <Wrap>
        <Container>
          <PropertyHeader apy={apy} creators={creators} propertyAddress={propertyAddress} />
        </Container>
        <Main>
          <RoundedCoverImageOrGradient src={dataProperty?.cover_image?.url} ratio={52.5} />
          {myStakingAmount?.isGreaterThan(0) && <Convert propertyAddress={propertyAddress} />}
          <Tabs defaultActiveKey="1" type="card">
            <TabPane tab="Overview" key="1">
              <TabsGrid>
                <div>
                  <PropertyAbout
                    isAuthor={loggedInWallet === authorAddress}
                    dataProperty={dataProperty ? dataProperty : ({} as DevForAppsProperty)}
                    authorAddress={authorAddress || ''}
                    propertyAddress={propertyAddress}
                  />
                  <AssetsSection>
                    <h2>Included assets</h2>
                    <AssetList>
                      {includedAssetList?.map((asset: any, index: any) => (
                        <AssetListItem key={index}>{asset}</AssetListItem>
                      ))}
                      {propertyInformation?.author?.address === loggedInWallet && (
                        <Link href={'/create/[property]'} as={`/create/${propertyAddress}`}>
                          <AddAsset>
                            <PlusOutlined />
                            <span>Add asset</span>
                          </AddAsset>
                        </Link>
                      )}
                    </AssetList>
                  </AssetsSection>
                  {<Author propertyAddress={propertyAddress} />}
                </div>
                {<Stats propertyAddress={propertyAddress} />}
              </TabsGrid>
            </TabPane>
            <TabPane tab="Stake" key="2">
              <TabsGrid>
                {(loggedInWallet ? loggedInWallet !== authorAddress : true) && (
                  <Stake title="Stake" propertyAddress={propertyAddress} />
                )}
                {<Stats propertyAddress={propertyAddress} />}
              </TabsGrid>
            </TabPane>
            <TabPane tab="Supporters" key="3">
              <TabsGrid>
                <div>
                  <h2>Supporters of {propertyName}</h2>
                  <PropertySupporters propertyAddress={propertyAddress} />
                </div>
                {<Stats propertyAddress={propertyAddress} />}
              </TabsGrid>
            </TabPane>
          </Tabs>
        </Main>
      </Wrap>

      <Footer />
    </>
  )
}

export default PropertyAddressDetail
