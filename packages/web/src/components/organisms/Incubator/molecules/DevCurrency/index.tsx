import React from 'react'

const DevCurrencySymbol = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 12C0 5.37 5.37 0 12 0C18.63 0 24 5.37 24 12C24 18.63 18.63 24 12 24C5.37 24 0 18.63 0 12Z"
        fill="black"
      />
      <path d="M10.2 4.80005H7.79999V7.20005H10.2V4.80005Z" fill="#00D0FD" />
      <path d="M15 4.80005H10.2V7.20005H15V4.80005Z" fill="#5B8BF5" />
      <path d="M15 7.19995H12.6V9.59995H15V14.4H17.4V7.19995H15Z" fill="#D500E6" />
      <path d="M12.6 14.4V16.8H10.2V9.59998H7.79999V16.8V19.2H15V16.8H17.4V14.4H12.6Z" fill="#FF3815" />
    </svg>
  )
}

export const DecCurrencySmall = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 8C0 3.58 3.58 0 8 0C12.42 0 16 3.58 16 8C16 12.42 12.42 16 8 16C3.58 16 0 12.42 0 8Z" fill="black" />
      <path d="M6.8002 3.19995H5.2002V4.79995H6.8002V3.19995Z" fill="#00D0FD" />
      <path d="M9.9998 3.19995H6.7998V4.79995H9.9998V3.19995Z" fill="#5B8BF5" />
      <path d="M9.9999 4.80005H8.3999V6.40005H9.9999V9.60005H11.5999V4.80005H9.9999Z" fill="#D500E6" />
      <path
        d="M8.4002 9.60002V11.2H6.8002V6.40002H5.2002V11.2V12.8H10.0002V11.2H11.6002V9.60002H8.4002Z"
        fill="#FF3815"
      />
    </svg>
  )
}

export default DevCurrencySymbol
