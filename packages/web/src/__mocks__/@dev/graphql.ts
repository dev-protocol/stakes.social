import {
  useListPropertyQuery as IUseListPropertyQuery,
  useGetPropertyAuthenticationQuery as IUseGetPropertyAuthenticationQuery,
  useGetMarketFactoryCreateQuery as IUseGetMarketFactoryCreateQuery,
  useListPropertyMetaQuery as IUseListPropertyMetaQuery,
  useGetAccountLockupQuery as IUseGetAccountLockupQuery,
  useGetLockupLockedupQuery as IUseGetLockupLockedupQuery
} from '@dev/graphql'

export const useListPropertyQuery = (): Partial<ReturnType<typeof IUseListPropertyQuery>> => ({
  data: {
    property_factory_create: [
      {
        block_number: 1,
        event_id: 'event-id',
        log_index: 5,
        property: '123',
        raw_data: 'raw-data',
        transaction_index: 1,
        from_address: 'from-address'
      }
    ],
    property_factory_create_aggregate: {
      aggregate: {
        count: 50
      }
    }
  }
})

export const useGetPropertyAuthenticationQuery = (): Partial<
  ReturnType<typeof IUseGetPropertyAuthenticationQuery>
> => ({
  data: {
    property_authentication: [
      {
        authentication_id: 'authentication-id',
        market: 'market-address',
        metrics: 'metrics-address'
      }
    ]
  }
})

export const useGetMarketFactoryCreateQuery = (): Partial<ReturnType<typeof IUseGetMarketFactoryCreateQuery>> => ({
  data: {
    market_factory_create: [
      {
        market: 'market-address'
      }
    ]
  }
})

export const useListPropertyMetaQuery = (): Partial<ReturnType<typeof IUseListPropertyMetaQuery>> => ({
  data: {
    property_meta: [
      {
        property: 'property-address'
      }
    ]
  }
})

export const useGetAccountLockupQuery = (): Partial<ReturnType<typeof IUseGetAccountLockupQuery>> => ({
  data: {
    account_lockup: [
      {
        locked_up_event_id: 'log_dummy',
        property_address: '0x01234567890',
        value: 100000000000000000000
      }
    ]
  }
})

export const useGetLockupLockedupQuery = (): Partial<ReturnType<typeof IUseGetLockupLockedupQuery>> => ({
  data: {
    lockup_lockedup: [
      {
        raw_data: '{}'
      }
    ]
  }
})
