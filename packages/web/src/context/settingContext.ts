import { createContext } from 'react'

export const settings = {
  isCurrencyDEV: true,
  toggleCurrency: () => {}
}

const SettingContext = createContext(settings)

export default SettingContext
