import React from 'react'
import Tooltip, { TooltipPlacement } from 'antd/lib/tooltip'

interface Props {
  placement?: TooltipPlacement
  children: any
}

export const EstimatedGasNotes = ({ placement, children }: Props) => {
  const note =
    'The estimated gas fee will vary depending on the congestion of the Ethereum network. \
    However, Ethereum will often return about 20~40% of that amount to you unused. \
    This is because it is difficult to predict in advance the exact computing resources required \
    for an Ethereum transaction. Hence, a wallet asks for slightly more gas money \
    but returns the unused portion to you.'
  return (
    <Tooltip placement={placement || 'right'} title={note}>
      {children}
    </Tooltip>
  )
}
