import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from 'antd'
import { AuthorSelector } from './AuthorSelector'
import { PropertyCreateForm } from './PropertyCreateForm'
import { getAccountAddress } from 'src/fixtures/wallet/utility'
import { useEffectAsync } from 'src/fixtures/utility'

interface Props {
  market: string
}

export const AuthenticateForm = ({ market }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
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
    <div style={{ maxWidth: '680px', marginRight: 'auto', marginLeft: 'auto' }}>
      <span style={{ marginRight: '54px' }}>Associating Property:</span>
      <AuthorSelector query={query} author={author} onChange={onChange} onSearch={onSearch} />
      <div style={{ paddingLeft: '212px', marginTop: '18px' }}>
        <Button type="link" onClick={() => setIsOpen(!isOpen)}>
          Or create one
        </Button>
        {isOpen && <PropertyCreateForm author={author} />}
      </div>
      <Link href={'/auth/[market]/[property]'} as={`/auth/${market}/${property}`}>
        <Button type="primary">Next</Button>
      </Link>
    </div>
  )
}
