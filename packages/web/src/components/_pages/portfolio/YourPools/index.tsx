// @L2 optimized
import React, { useState } from 'react'
import { reverse } from 'ramda'
import { useListOwnedPropertyMeta } from 'src/fixtures/graph'
import { Asset, AssetList } from 'src/components/molecules/AssetList'
import { useIsL1 } from 'src/fixtures/wallet/hooks'
import { useGetEnabledMarkets, useGetAuthenticatedProperties, usePropertyAuthor } from 'src/fixtures/dev-kit/hooks'
import { TransactModalContents } from 'src/components/molecules/TransactModalContents'
import { ModalStates, ResponsiveModal } from 'src/components/atoms/ResponsiveModal'

interface Props {
  accountAddress?: string
}

const WrapAsset4L2 = ({ propertyAddress, accountAddress }: { propertyAddress: string; accountAddress?: string }) => {
  const [modalStates, setModalStates] = useState<ModalStates>({ visible: false })
  const { author: authorAddress } = usePropertyAuthor(propertyAddress)
  const showModal = (type: 'stake' | 'withdraw' | 'holders') => (propertyAddress?: string) => {
    const contents = propertyAddress ? (
      <TransactModalContents propertyAddress={propertyAddress} type={type} />
    ) : (
      <p>Property address not found</p>
    )
    const title = type === 'stake' ? 'Stake' : 'Withdraw'
    setModalStates({ visible: true, contents, title })
  }
  const closeModal = () => {
    setModalStates({ ...modalStates, visible: false })
  }

  return authorAddress === accountAddress ? (
    <>
      <Asset
        isPool={true}
        property={propertyAddress}
        enableWithdrawHoldersReward={true}
        showModalFunc={showModal}
      ></Asset>
      <ResponsiveModal visible={modalStates.visible} title={modalStates.title} onCancel={closeModal} footer={null}>
        {modalStates.contents as any}
      </ResponsiveModal>
    </>
  ) : (
    <></>
  )
}

export const Asset4L2 = ({ market, accountAddress }: { market: string; accountAddress?: string }) => {
  const { data: authenticatedProperties } = useGetAuthenticatedProperties(market)
  const properties = authenticatedProperties ? reverse(authenticatedProperties) : undefined
  return properties?.length ? (
    <>
      {properties?.map((propertyAddress: unknown, idx: number) => (
        <WrapAsset4L2 key={idx} propertyAddress={propertyAddress as string} accountAddress={accountAddress} />
      ))}
    </>
  ) : (
    <></>
  )
}

export const YourPools4L2 = ({ accountAddress }: Props) => {
  const { data: enabledMarkets } = useGetEnabledMarkets()

  return enabledMarkets ? (
    <>
      {enabledMarkets.map((market: string, idx: number) => (
        <Asset4L2 key={idx} market={market} accountAddress={accountAddress} />
      ))}
    </>
  ) : (
    <></>
  )
}

export const YourPools = ({ accountAddress }: Props) => {
  const { isL1 } = useIsL1()
  const { data } = useListOwnedPropertyMeta(accountAddress)

  return isL1 ? (
    <AssetList
      isPool={true}
      total={data?.length || 0}
      loading={data === undefined}
      properties={data?.map(r => r.property)}
      enableWithdrawHoldersReward={true}
    ></AssetList>
  ) : (
    <YourPools4L2 accountAddress={accountAddress} />
  )
}
