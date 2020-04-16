import React from 'react'

interface Props {
  size: number
  percentage: number
}

export const CircleGraph = ({ size, percentage }: Props) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `50%`,
        backgroundColor: `#2F80ED`,
        backgroundClip: 'padding-box',
        border: `solid ${(size / 2) * percentage}px rgba(47, 128, 237, 0.2)`
      }}
    ></div>
  )
}
