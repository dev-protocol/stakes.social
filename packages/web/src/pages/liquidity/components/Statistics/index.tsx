import React from 'react'
import { Statistic } from 'antd'
import styled from 'styled-components'
import { END_OF_THE_PROGRAM } from '../../fixtures/constants/time'
import { useTotalRewards } from '../../fixtures/geyser/hooks'
import { toNaturalNumber } from 'src/fixtures/utility'
import { getTime } from 'date-fns'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
  @media (min-width: 768px) {
    grid-gap: 4rem;
    justify-content: center;
    grid-auto-flow: column;
  }
`

export const Statistics = () => {
  const { Countdown } = Statistic
  const { data } = useTotalRewards()

  return (
    <Wrapper>
      <Countdown
        title="Program duration"
        value={getTime(END_OF_THE_PROGRAM)}
        format="D day([s]) HH:mm:ss left"
      ></Countdown>
      <Statistic title="Total deposits (USD)" value={112893} precision={2} />
      <Statistic title="Total rewards (DEV)" value={toNaturalNumber(data).toNumber()} precision={2} />
    </Wrapper>
  )
}
