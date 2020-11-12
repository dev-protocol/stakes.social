import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Empty, Pagination, Skeleton } from 'antd'
import { AssetItemOnList } from '../AssetItemOnList'

interface Props {
  className?: string
  properties?: string[]
  onPagination?: (page: number) => void
  loading?: boolean
  enableStake?: boolean
  enableWithdraw?: boolean
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
  enableWithdraw,
  loading = false
}: Props) => {
  const [page, setPage] = useState<number>(0)
  const handlePagination = useCallback(
    (page: number) => {
      setPage(page)
      if (onPagination) {
        onPagination(page)
      }
    },
    [setPage, onPagination]
  )

  return loading ? (
    <Skeleton active></Skeleton>
  ) : (
    <Wrap className={className}>
      {properties && properties.length > 0 ? (
        properties.map(item => (
          <Item propertyAddress={item} key={item} enableStake={enableStake} enableWithdraw={enableWithdraw}></Item>
        ))
      ) : (
        <Empty />
      )}
      <StyledPagination current={page} size="default" responsive={true} onChange={handlePagination} />
    </Wrap>
  )
}
