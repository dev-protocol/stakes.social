import React from 'react'
import { AuthorSelector } from './AuthorSelector'

interface Props {
  accountAddress: string | undefined
}

export const PropertySelectForm = ({ accountAddress }: Props) => {
  // const { web3 } = useContext(WalletContext)
  // const [author, setAuthor] = useState<string>('')
  // const [property, setProperty] = useState<string>()
  // const [query, setQuery] = useState<string>('')
  // const onChange = (value: string) => setProperty(value)
  // const onSearch = (query: string) => setQuery(query)
  // useEffectAsync(async () => {
  //   const accountAddress = await getAccountAddress(web3)
  //   // const dafaultValue = process.env.NODE_ENV === 'development' ? '0x69Cc2C86aeB26f52F6645a2DFdec1051DD5584C0' : ''
  //   setAuthor(accountAddress || '')
  // }, [])
  return <AuthorSelector author={accountAddress} /> // onChange={onChange} onSearch={onSearch}
}
