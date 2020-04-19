import {
  useGetLastAllocatorAllocationResultQuery as IUseGetLastAllocatorAllocationResultQuery,
  useListPropertyQuery as IUseListPropertyQuery
} from '@dev/graphql'

export const useGetLastAllocatorAllocationResultQuery = (): Partial<
  ReturnType<typeof IUseGetLastAllocatorAllocationResultQuery>
> => ({ data: { allocator_allocation_result: [{ block_number: 42141412412 }] } })

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
    ]
  }
})
