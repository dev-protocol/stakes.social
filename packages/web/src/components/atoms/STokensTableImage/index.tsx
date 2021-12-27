import React from 'react'

export const STokensTableImage = ({ imagePath }: { imagePath: string }) => (
  <div
    style={{
      backgroundImage: `url('${imagePath}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      height: '120px'
    }}
  />
)
