import React, { HTMLAttributes } from 'react'
import { useAllClaimedRewards, useAPY, useBalanceOf } from 'src/fixtures/dev-kit/hooks'
import styled from 'styled-components'
import { Statistic } from 'antd'
import { useTotalStakedAccountLazyQuery } from '@dev/graphql'
import { useEffect } from 'react'
import { useCurrency } from 'src/fixtures/currency/hooks'

const Wrap = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 1rem;
`

export const Statistics = ({
  accountAddress,
  ...props
}: HTMLAttributes<HTMLDivElement> & { accountAddress: string | undefined }) => {
  const { amount, currency } = useBalanceOf()
  const { amount: rewardedAmount } = useAllClaimedRewards()
  const { apy, creators } = useAPY()
  const [fetchStaked, { data }] = useTotalStakedAccountLazyQuery()
  const { toCurrency } = useCurrency()

  useEffect(() => {
    accountAddress &&
      fetchStaked({
        variables: {
          account_address: accountAddress
        }
      })
  }, [accountAddress, fetchStaked])

  const totalStaked = data?.account_lockup?.[0]?.value && data?.account_lockup?.[0]?.value / Math.pow(10, 18)

  return (
    <Wrap {...props}>
      <Statistic
        title="Staked Amount"
        value={totalStaked ? toCurrency(totalStaked).toNumber().toLocaleString() : 'N/A'}
        suffix={currency}
        precision={2}
      />
      <Statistic
        title="Rewards Amount"
        value={rewardedAmount ? rewardedAmount.toNumber() : 'N/A'}
        suffix={currency}
        precision={2}
      />
      <Statistic title="Unstaked Value" value={amount ? amount.toNumber() : 'N/A'} suffix={currency} precision={2} />
      <Statistic title="Staker APY" value={apy ? apy.toNumber() : 'N/A'} suffix="%" precision={2} />
      <Statistic title="Creator APY" value={creators ? creators.toNumber() : 'N/A'} suffix="%" precision={2} />
    </Wrap>
  )
}
