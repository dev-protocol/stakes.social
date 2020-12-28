import {
  useListPropertyQuery as IUseListPropertyQuery,
  useGetPropertyAuthenticationQuery as IUseGetPropertyAuthenticationQuery,
  useGetMarketFactoryCreateQuery as IUseGetMarketFactoryCreateQuery,
  useListPropertyMetaQuery as IUseListPropertyMetaQuery,
  useTotalStakedAccountLazyQuery as IUseTotalStakedAccountLazyQuery,
  useListOwnedPropertyTokensQuery as IUseListOwnedPropertyTokensQuery
} from '@dev/graphql'

export const useListOwnedPropertyTokensQuery = (): Partial<ReturnType<typeof IUseListOwnedPropertyTokensQuery>> => ({
  data: {
    property_balance: [
      {
        account_address: 'account_address',
        balance: 10000000000000,
        is_author: true,
        property_address: 'property_addrees'
      }
    ]
  }
})

export const useTotalStakedAccountLazyQuery = (): Partial<ReturnType<typeof IUseTotalStakedAccountLazyQuery>> => [
  () => '',
  {
    data: {
      account_lockup_sum_values: [
        {
          sum_values: 9000
        }
      ]
    }
  }
]

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
        metrics: 'metrics-address',
        property_meta: {
          author: 'property-author'
        }
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
