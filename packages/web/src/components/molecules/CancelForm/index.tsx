import React from 'react'
import { Button, Space, Spin, Alert } from 'antd'
import { LoadingOutlined, CheckCircleTwoTone } from '@ant-design/icons'
import styled from 'styled-components'

interface Props {
  className?: string
  onClickCancel: () => void
  onClickWithdraw: () => void
  remainBlocks: number
  isCompleted: boolean
}

const Wrap = styled.div``

const spinner = <LoadingOutlined style={{ fontSize: 18 }} spin />

export const CancelForm = ({ className, onClickCancel, onClickWithdraw, remainBlocks, isCompleted }: Props) => {
  return (
    <Wrap className={className}>
      <p>Cancel Staking</p>
      <Alert
        message="Sorry, we are temporarily stopping the cancellation of staking at the moment, for a patch. This should take a few hours to complete."
        type="error"
      ></Alert>
      <Space size="middle">
        <Button type="primary" size="large" onClick={onClickCancel} disabled={true || isCompleted}>
          Cancel
        </Button>
        <Button type="primary" size="large" onClick={onClickWithdraw} disabled={true || !isCompleted}>
          Withdraw
        </Button>
        <div>
          {remainBlocks > 0 && !isCompleted && (
            <>
              <Spin indicator={spinner} style={{ marginRight: '8px' }} />
              {remainBlocks} block(s) left
            </>
          )}
          {isCompleted && (
            <>
              <CheckCircleTwoTone
                twoToneColor="#52c41a"
                style={{
                  fontSize: 18,
                  marginRight: '8px'
                }}
              />
              You can withdraw
            </>
          )}
        </div>
      </Space>
    </Wrap>
  )
}
