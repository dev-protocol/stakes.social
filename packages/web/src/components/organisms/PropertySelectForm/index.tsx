import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from 'antd'
import { AuthorSelector } from './AuthorSelector'
import { getAccountAddress } from 'src/fixtures/wallet/utility'
import { useEffectAsync } from 'src/fixtures/utility'
import styled from 'styled-components'

interface Props {}

const Form = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: auto;
  max-width: 520px;
`
const OneColumn = styled.div`
  display: grid;
  grid-gap: 1rem;
`
const TwoColumns = styled(OneColumn)`
  @media (min-width: 768px) {
    text-align: right;
    grid-template-columns: 150px 1fr;
  }
`

export const PropertySelectForm = (_: Props) => {
  const [author, setAuthor] = useState<string>('')
  const [property, setProperty] = useState<string>()
  const [query, setQuery] = useState<string>('')
  const onChange = (value: string) => setProperty(value)
  const onSearch = (query: string) => setQuery(query)
  useEffectAsync(async () => {
    const accountAddress = await getAccountAddress()
    const dafaultValue = process.env.NODE_ENV === 'development' ? '0x69Cc2C86aeB26f52F6645a2DFdec1051DD5584C0' : ''
    setAuthor(accountAddress || dafaultValue)
  }, [])
  return (
    <Form>
      <TwoColumns>
        <span>Associating Property:</span>
        <AuthorSelector query={query} author={author} onChange={onChange} onSearch={onSearch} />
      </TwoColumns>
      {property && (
        <Link href={'/auth/associate/[property]'} as={`/auth/associate/${property}`}>
          <Button>Associate an asset</Button>
        </Link>
      )}
    </Form>
  )
}
