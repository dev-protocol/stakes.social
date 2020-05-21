import React from 'react'

export interface Props {
  name: string
  description: string
  authentication: string
  calculation: number
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

export const TextCard = ({ name, description, authentication, calculation }: Props) => {
  return (
    <div>
      <h2
        style={{
          fontSize: '36px',
          lineHeight: '48px',
          color: '#2F80ED'
        }}
      >
        {name}
      </h2>
      <Text>{description}</Text>
      <Text>Authentication: {authentication}</Text>
      <Text>Calculation: {calculation}</Text>
    </div>
  )
}
