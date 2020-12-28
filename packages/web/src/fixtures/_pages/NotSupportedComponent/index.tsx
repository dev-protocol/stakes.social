import React from 'react'
import styled from 'styled-components'

const NotSupportedContainer = styled.div`
  display: flexbox;
  justify-content: center;
  align-items: center;
`

const NotSupported = () => {
  console.log('render not supported: ')

  return <NotSupportedContainer>This browser is not supported</NotSupportedContainer>
}

export default NotSupported
