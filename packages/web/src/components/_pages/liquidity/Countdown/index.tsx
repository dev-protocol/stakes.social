import React from 'react'
import { Statistic } from 'antd'
import { useFinalUnlockSchedules } from '../../../../fixtures/_pages/liquidity/geyser/hooks'

export const Countdown = () => {
  const { data: finalUnlockSchedules } = useFinalUnlockSchedules()
  const endofTheProgram = finalUnlockSchedules ? Number(finalUnlockSchedules.endAtSec) * 1000 : 0

  return <Statistic.Countdown title="Program duration" value={endofTheProgram} format="D day([s]) HH:mm:ss left" />
}
