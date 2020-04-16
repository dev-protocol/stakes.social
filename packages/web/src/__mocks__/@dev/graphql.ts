import { useGetLastAllocatorAllocationResultQuery as IUseGetLastAllocatorAllocationResultQuery } from '@dev/graphql'

export const useGetLastAllocatorAllocationResultQuery = (): Partial<
  ReturnType<typeof IUseGetLastAllocatorAllocationResultQuery>
> => ({ data: { allocator_allocation_result: [{ block_number: 42141412412 }] } })
