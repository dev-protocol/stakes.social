import { Modal } from 'antd'
import styled from 'styled-components'
import React from 'react'

export interface ModalStates {
  visible: boolean
  title?: string
  contents?: React.ReactNode
}

export const ResponsiveModal = styled(Modal)`
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    margin: 0 auto;
    padding: 0;
    max-width: 100%;
    .ant-modal-content {
      top: 0;
      position: absolute;
      border-radius: 0;
    }
  }
`
