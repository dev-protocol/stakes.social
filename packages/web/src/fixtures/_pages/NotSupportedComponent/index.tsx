import React from 'react'
import styled from 'styled-components'

const NotSupportedContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`

const NotSupported = () => {
  console.log('render not supported: ')

  return (
    <div>
      <NotSupportedContainer>
        <div>Please download Google Chrome to take advantage on Stakes Social.</div>
      </NotSupportedContainer>
    </div>
  )
}

export default NotSupported
