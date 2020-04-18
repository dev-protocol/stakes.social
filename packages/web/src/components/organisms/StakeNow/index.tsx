import * as React from 'react'
import { useStake } from 'src/fixtures/dev-kit/hooks'
import { InputFormCard } from 'src/components/molecules/InputFormCard'

interface Props {
  propertyAddress: string
}

export const StakeNow = ({ propertyAddress }: Props) => {
  const { stake } = useStake()

  const handleSubmit = React.useCallback(
    (amount: string) => {
      stake(propertyAddress, amount)
    },
    [stake, propertyAddress]
  )

  return <InputFormCard label="Stake Now" suffix="DEV" onSubmitStake={handleSubmit} />
}
