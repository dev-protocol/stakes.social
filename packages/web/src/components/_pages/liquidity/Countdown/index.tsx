import React from 'react'
import { Statistic } from 'antd'

export const Countdown = ({ endAtSec }: { endAtSec: number }) => {
  const endofTheProgram = endAtSec * 1000

  return <Statistic.Countdown title="Program duration" value={endofTheProgram} format="D day([s]) HH:mm:ss left" />
}
