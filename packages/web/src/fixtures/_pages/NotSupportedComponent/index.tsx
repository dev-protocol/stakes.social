import React from 'react'
import styled from 'styled-components'

const NotSupportedContainer = styled.div`
  font-size: 0.6rem;
  background: -moz-linear-gradient(top, #ff4d4f 1%, #f5222d 100%);
  background: -webkit-linear-gradient(top, #ff4d4f 1%, #f5222d 100%);
  background: linear-gradient(to bottom, #ff4d4f 1%, #f5222d 100%);
  color: white;
  padding: 2px;
  text-align: center;

  font-size: 0.8em;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

const NotSupported = () => {
  console.log('render not supported: ')

  return (
    <div>
      <NotSupportedContainer>Please download Google Chrome to take advantage on Stakes Social.</NotSupportedContainer>
    </div>
  )
}

export default NotSupported
