import BigNumber from 'bignumber.js'
import React, { useState } from 'react'
import { ResponsiveModal } from 'src/components/atoms/ResponsiveModal'
import { TransactModalContents } from 'src/components/molecules/TransactModalContents'
import { useGetMyStakingAmount, usePropertyAuthor } from 'src/fixtures/dev-kit/hooks'
import { useProvider } from 'src/fixtures/wallet/hooks'
import styled from 'styled-components'

interface Props {
  propertyAddress: string
}

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    a {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
`

const StakeButton = styled.button<{ isPropertyStaked?: Boolean }>`
  padding: 6px 24px;
  border: none;
  background-color: rgb(230, 110, 76);
  color: white;
  margin-right: 12px;
  border-radius: 4px;
  font-weight: 600;
  width: 100px;

  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  :hover {
    transition: ease-in-out 0.2s;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  ${props => props.disabled && 'opacity: 0.3'}
`

const WithdrawButton = styled.button<{ isPropertyStaked?: Boolean }>`
  justify-content: center;
  padding: 6px 24px;
  border: transparent;

  background-color: rgb(230, 110, 76);
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 600;
  width: 100px;
  ${props => props.disabled && 'opacity: 0.3'}
`

interface ModalStates {
  visible: boolean
  title?: string
  contents?: React.ReactNode
}

export const PropertyInteractionBtns = ({ propertyAddress }: Props) => {
  const { author: authorAddress } = usePropertyAuthor(propertyAddress)
  const { accountAddress } = useProvider()
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)

  const [modalStates, setModalStates] = useState<ModalStates>({ visible: false })
  const showModal = (type: 'stake' | 'withdraw' | 'holders') => {
    const contents = <TransactModalContents propertyAddress={propertyAddress} type={type} />
    const title = type === 'stake' ? 'Stake' : 'Withdraw'
    setModalStates({ visible: true, contents, title })
  }
  const closeModal = () => {
    setModalStates({ ...modalStates, visible: false })
  }
  const zeroBigNumber = new BigNumber(0)

  return (
    <div>
      <ButtonContainer>
        <StakeButton
          disabled={accountAddress === authorAddress}
          onClick={() => showModal('stake')}
          isPropertyStaked={typeof myStakingAmount !== 'undefined' && myStakingAmount > zeroBigNumber}
        >
          Stake
        </StakeButton>
        <WithdrawButton
          disabled={accountAddress === authorAddress}
          onClick={() => showModal('withdraw')}
          isPropertyStaked={typeof myStakingAmount !== 'undefined' && myStakingAmount > zeroBigNumber}
        >
          Claim
        </WithdrawButton>
      </ButtonContainer>
      <ResponsiveModal visible={modalStates.visible} title={modalStates.title} onCancel={closeModal} footer={null}>
        {modalStates.contents}
      </ResponsiveModal>
    </div>
  )
}
