import { Input } from 'antd'
import styled from 'styled-components'

export const LargeInput = styled(Input)`
  &,
  input {
    font-size: 1.8rem;
    &[disabled] {
      background: #e6eef9;
      color: inherit;
    }
  }
`
