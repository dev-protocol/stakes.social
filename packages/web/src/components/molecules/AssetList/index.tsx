import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Pagination, Skeleton } from 'antd'
import { AssetItemOnList } from '../AssetItemOnList'
import { ResponsiveModal } from 'src/components/atoms/ResponsiveModal'
import { TransactModalContents } from '../TransactModalContents'
import { NotConnectedAndEmpty } from 'src/components/atoms/NotConnectedAndEmpty'

interface Props {
  className?: string
  properties?: string[]
  onPagination?: (page: number) => void
  loading?: boolean
  enableStake?: boolean
  enableWithdrawStakersReward?: boolean
  enableWithdrawHoldersReward?: boolean
  isPool?: boolean
  total: number
  positions?: number[]
}

interface ModalStates {
  visible: boolean
  title?: string
  contents?: React.ReactNode
}

const Wrap = styled.div`
  display: grid;
`

const Item = styled(AssetItemOnList)`
  &:not(:last-of-type) {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }
`

const StyledPagination = styled(Pagination)`
  margin-top: 1rem;
`

export const AssetList = ({
  className,
  properties,
  onPagination,
  enableStake,
  enableWithdrawStakersReward,
  enableWithdrawHoldersReward,
  loading = false,
  isPool,
  total,
  positions
}: Props) => {
  const [page, setPage] = useState<number>(1)
  const [modalStates, setModalStates] = useState<ModalStates>({ visible: false })
  const handlePagination = useCallback(
    (page: number) => {
      setPage(page)
      if (onPagination) {
        onPagination(page)
      }
    },
    [setPage, onPagination]
  )
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
  const propertiesOrPositions = positions?.length ? positions : properties?.length ? properties : undefined

  return loading ? (
    <Skeleton active></Skeleton>
  ) : (
    <Wrap className={className}>
      {propertiesOrPositions?.length ? (
        propertiesOrPositions.map((item, i) => (
          <Item
            isPool={isPool}
            propertyAddress={typeof item === 'string' ? item : undefined}
            positionId={typeof item === 'number' ? item : undefined}
            key={`${item}-${i}`}
            enableStake={enableStake}
            enableWithdrawStakersReward={enableWithdrawStakersReward}
            enableWithdrawHoldersReward={enableWithdrawHoldersReward}
            onClickStake={showModal('stake')}
            onClickWithdrawStakersReward={showModal('withdraw')}
            onClickWithdrawHoldersReward={showModal('holders')}
          ></Item>
        ))
      ) : (
        <NotConnectedAndEmpty description="Assets not found" />
      )}
      <ResponsiveModal visible={modalStates.visible} title={modalStates.title} onCancel={closeModal} footer={null}>
        {modalStates.contents}
      </ResponsiveModal>
      <StyledPagination
        current={page}
        size="default"
        responsive={true}
        onChange={handlePagination}
        total={total}
        defaultPageSize={5}
      />
    </Wrap>
  )
}
