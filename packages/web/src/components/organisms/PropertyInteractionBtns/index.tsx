import { Button } from 'antd'
import React, { useState } from 'react'
import { ResponsiveModal } from 'src/components/atoms/ResponsiveModal'
import { TransactModalContents } from 'src/components/molecules/TransactModalContents'
import styled from 'styled-components'

interface Props {
  propertyAddress: string
}

const ButtonContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  align-items: center;
`

interface ModalStates {
  visible: boolean
  title?: string
  contents?: React.ReactNode
}

export const PropertyInteractionBtns = ({ propertyAddress }: Props) => {
  const [modalStates, setModalStates] = useState<ModalStates>({ visible: false })
  const showModal = (type: 'stake' | 'withdraw' | 'holders') => {
    const contents = <TransactModalContents propertyAddress={propertyAddress} type={type} />
    const title = type === 'stake' ? 'Stake' : 'Withdraw'
    setModalStates({ visible: true, contents, title })
  }
  const closeModal = () => {
    setModalStates({ ...modalStates, visible: false })
  }

  return (
    <div>
      <ButtonContainer>
        <Button type="primary" onClick={() => showModal('stake')}>
          Stake
        </Button>
        <Button type="primary" onClick={() => showModal('withdraw')}>
          Claim
        </Button>
      </ButtonContainer>
      <ResponsiveModal visible={modalStates.visible} title={modalStates.title} onCancel={closeModal} footer={null}>
        {modalStates.contents}
      </ResponsiveModal>
    </div>
  )
}
