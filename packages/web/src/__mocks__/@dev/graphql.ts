import {
  useGetLastAllocatorAllocationResultQuery as IUseGetLastAllocatorAllocationResultQuery,
  useListPropertyQuery as IUseListPropertyQuery,
  useGetPropertyAuthenticationQuery as IUseGetPropertyAuthenticationQuery,
  useGetMarketFactoryCreateQuery as IUseGetMarketFactoryCreateQuery,
  useListPropertyMetaQuery as IUseListPropertyMetaQuery
} from '@dev/graphql'

export const useGetLastAllocatorAllocationResultQuery = (): Partial<
  ReturnType<typeof IUseGetLastAllocatorAllocationResultQuery>
> => ({
  data: {
    allocator_allocation_result: [{ block_number: 42141412412 }]
  }
})

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
