import React, { useRef, useState } from 'react'

import useDebouncedEffect from '../../organisms/PropertyCardList/hooks/useDebouncedEffect'

import styled from 'styled-components'
import { SearchOutlined } from '@ant-design/icons'

interface SearchBarProps {
  activeSearchTerm: string
  onSearchTermChange: (newSearchTerm: string) => void
}

export const SearchbarInputContainer = styled.div`
  position: relative;
  width: 100%;
`

export const InputIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  svg {
    stroke: #838890;
    height: 20px;
    width: 32px;
  }
`

export const EmptyInputIcon = styled(InputIcon)`
  right: 0;
`

export const SearchbarInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border-radius: 18px;
  border: 0;
  background: transparent;
  outline: none;
  border: 1px solid lightgrey;
  transition: all 0.2s ease-in;
  padding-right: 2.5rem;

  ${InputIcon} + & {
    padding-left: 2.5rem;
  }

  &:hover {
    border: 1px solid deep;
  }

  &:focus {
    transition: all 0.2s ease-in;
    border: 1px solid black;
    box-shadow: 0 0 0 1px grey;
  }
`

const SearchBar = ({ activeSearchTerm, onSearchTermChange }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>(activeSearchTerm)
  const startedRef = useRef<boolean>()

  useDebouncedEffect(
    () => {
      if (typeof startedRef.current !== 'undefined') {
        onSearchTermChange(searchTerm)
        startedRef.current = false
      }
    },
    500,
    [searchTerm]
  )

  return (
    <SearchbarInputContainer>
      <InputIcon>
        <SearchOutlined />
      </InputIcon>

      <SearchbarInput
        data-cy="SearchbarInput"
        defaultValue={activeSearchTerm}
        placeholder="Search for a project"
        onChange={e => {
          startedRef.current = true
          setSearchTerm(e.target.value)
        }}
      />
    </SearchbarInputContainer>
  )
}

export default SearchBar
