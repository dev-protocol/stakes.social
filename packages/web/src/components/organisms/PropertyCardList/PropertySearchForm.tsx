import React from 'react'
import styled from 'styled-components'
import SearchBar from '../../molecules/SearchBar'

interface Props {
  onSubmitSearchProperty: (word: string) => void
}

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 100%;
  }
`

export const PropertySearchForm = ({ onSubmitSearchProperty }: Props) => {
  return (
    <Flex>
      <SearchBar onSearchTermChange={onSubmitSearchProperty} activeSearchTerm="" />
    </Flex>
  )
}
