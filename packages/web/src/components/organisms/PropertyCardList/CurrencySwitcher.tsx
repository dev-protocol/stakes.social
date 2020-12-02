import React, { useCallback, useContext } from 'react'
import styled from 'styled-components'
import SettingContext from 'src/context/settingContext'

interface Props {
  className?: string
}

const Button = styled.button<{ isActive?: boolean; isFirst?: boolean }>`
  margin-right: ${props => (props?.isFirst ? '10px' : 'none')};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  background-color: ${props => (props.isActive ? 'black' : 'transparent')};
  width: 65px;
  span {
    color: ${props => (props.isActive ? 'white' : 'black')};
  }
`

const Circle = styled.div<{ isActive?: boolean }>`
  padding: 6px;
  border-radius: 45px;
  background-color: ${props => (props.isActive ? 'white' : 'black')};
`

const CurrencyContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 11px;
`

export const CurrencySwitcher = ({ className }: Props) => {
  const { isCurrencyDEV, toggleCurrency } = useContext(SettingContext)
  const handleToggleCurrency = useCallback(() => {
    toggleCurrency()
  }, [toggleCurrency])
  return (
    <>
      <CurrencyContainer className={className} onClick={handleToggleCurrency}>
        <Button isActive={isCurrencyDEV} isFirst>
          <Circle isActive={isCurrencyDEV} />
          <span>DEV</span>
        </Button>
        <Button isActive={!isCurrencyDEV}>
          <Circle isActive={!isCurrencyDEV} />
          <span>USD</span>
        </Button>
      </CurrencyContainer>
    </>
  )
}
