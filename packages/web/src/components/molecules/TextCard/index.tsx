import React from 'react'

export interface Props {
  title: string
}

const Text: React.FC = ({ children }) => (
  <div
    style={{
      fontSize: '18px',
      lineHeight: '24px',
      color: 'rgba(0, 0, 0, 0.85)'
    }}
  >
    {children}
  </div>
)

export const TextCard = ({ title }: Props) => {
  return (
    <div>
      <h2
        style={{
          fontSize: '36px',
          lineHeight: '48px',
          color: '#2F80ED'
        }}
      >
        {title}
      </h2>
      <Text>The market for number of downloads of public npm packages.</Text>
      <Text>Authentication: Your npm package</Text>
      <Text>Calculation: Number of downloads</Text>
    </div>
  )
}
