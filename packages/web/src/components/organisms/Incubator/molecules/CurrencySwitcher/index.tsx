import React, { useCallback, useContext } from 'react'
import styled from 'styled-components'
import SettingContext from 'src/context/settingContext'
import { H3Xs } from '../../Typography'

interface Props {
  className?: string
}

const CurrencyContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 11px;
`

const Dev = styled.div<{ isActive?: boolean }>`
  cursor: pointer;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 1px solid white;
  background: ${props => (props.isActive ? 'white' : 'transparent')};
  padding: 0 15px;
  color: ${props => (props.isActive ? '#5B8BF5' : 'white')};
  font-size: 16px;
`
const Usd = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid white;
  background: ${props => (props.isActive ? 'white' : 'transparent')};
  padding: 0 15px;
  color: ${props => (props.isActive ? '#5B8BF5' : 'white')};
  font-size: 16px;
`

export const CurrencySwitcher = ({ className }: Props) => {
  const { isCurrencyDEV, toggleCurrency } = useContext(SettingContext)
  const handleToggleCurrency = useCallback(() => {
    toggleCurrency()
  }, [toggleCurrency])
  return (
    <>
      <CurrencyContainer className={className} onClick={handleToggleCurrency}>
        <Dev isActive={isCurrencyDEV}>
          <H3Xs>DEV</H3Xs>
        </Dev>
        <Usd isActive={!isCurrencyDEV}>
          <H3Xs>USD</H3Xs>
        </Usd>
      </CurrencyContainer>
    </>
  )
}
