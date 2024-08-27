import useSWR from 'swr'

export type AccountLockup = {
  block_number: number
  locked_up_event_id: string
  account_address: string
  value: number
  property_address: string
}
export type LockupLockedup = {
  transaction_index: number
  token_value: number
  raw_data: string
  property: string
  log_index: number
  from_address: string
  event_id: string
  block_number: number
}
export type PropertyAuthentication = {
  property: string
  metrics: string
  market: string
  block_number: number
  authentication_id: string
}
export type PropertyMeta = {
  author: string
  block_number: number
  name: string
  property: string
  sender: string
  symbol: string
  total_supply: number
}

export const useAccountLockup = () => {
  const res = useSWR<undefined | AccountLockup[]>(`$.account_lockup`, () =>
    fetch('https://stackroom.devprotocol.xyz/graphql-snapshots/events/account_lockup.json')
      .then(r => r.json())
      .then(r => r.data.account_lockup)
  )
  return res
}

export const useLockupLockedup = () => {
  const res = useSWR<undefined | LockupLockedup[]>(`$.lockup_lockedup`, () =>
    fetch('https://stackroom.devprotocol.xyz/graphql-snapshots/events/lockup_lockedup.json')
      .then(r => r.json())
      .then(r => r.data.lockup_lockedup)
  )
  return res
}

export const usePropertyAuthentication = () => {
  const res = useSWR<undefined | PropertyAuthentication[]>(`$.property_authentication`, () =>
    fetch('https://stackroom.devprotocol.xyz/graphql-snapshots/events/property_authentication.json')
      .then(r => r.json())
      .then(r => r.data.property_authentication)
  )
  return res
}

export const usePropertyMeta = () => {
  const res = useSWR<undefined | PropertyMeta[]>(`$.property_meta`, () =>
    fetch('https://stackroom.devprotocol.xyz/graphql-snapshots/events/property_meta.json')
      .then(r => r.json())
      .then(r => r.data.property_meta)
  )
  return res
}

// ----------------------------------------------------------------------------------------

export const useListOwnedPropertyMeta = (accountAddress?: string) => {
  const addr = accountAddress?.toLowerCase()
  const { data } = usePropertyMeta()
  const res = useSWR<undefined | PropertyMeta[]>(`$.property_meta.${data?.length}.${accountAddress}`, () =>
    data?.filter(r => r.author.toLowerCase() === addr)
  )
  return res
}

export const useListOwnedLockup = (accountAddress?: string) => {
  const addr = accountAddress?.toLowerCase()
  const { data } = useAccountLockup()
  const res = useSWR<undefined | AccountLockup[]>(`$.account_lockup.${data?.length}.${accountAddress}`, () =>
    data?.filter(r => r.account_address.toLowerCase() === addr)
  )
  return res
}

export const useListPropertyAuthentication = (propertyAddress?: string) => {
  const addr = propertyAddress?.toLowerCase()
  const { data } = usePropertyAuthentication()
  const res = useSWR<undefined | PropertyAuthentication[]>(
    `$.property_authentication.${data?.length}.${propertyAddress}`,
    () => data?.filter(r => r.property.toLowerCase() === addr)
  )
  return res
}

export const useListProperty = () => {
  const { data: meta } = usePropertyMeta()
  const { data: auth } = usePropertyAuthentication()
  const res = useSWR<undefined | (PropertyMeta & { authentication: PropertyAuthentication[] })[]>(
    `$.properties.${meta?.length}.${auth?.length}`,
    () =>
      meta
        ?.map(r => ({ ...r, authentication: auth?.filter(u => u.property === r.property) ?? [] }))
        .filter(r => r.authentication.length > 0)
  )
  return res
}
