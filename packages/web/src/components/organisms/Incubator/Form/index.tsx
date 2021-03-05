import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 0;
  background: transparent;
  outline: none;
  border-bottom: 2px solid #cccccc;
  transition: all 0.2s ease-in;

  &:hover {
    transition: all 0.2s ease-in;
    border-bottom: 2px solid #5b8bf5;
  }

  &:focus {
    transition: all 0.2s ease-in;
    border-bottom: 2px solid black;
    /* box-shadow: 0 0 0 1px grey; */
  }
`
