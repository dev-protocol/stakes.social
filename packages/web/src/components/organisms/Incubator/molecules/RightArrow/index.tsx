import React from 'react'

const RightArrow = ({ color }: { color?: string }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(180)"
    >
      <path
        d="M32 13.7611V10.2389L6.5256 10.2389L6.5256 8.60068C8.49147 8.35495 9.63823 8.0273 11.4812 6.26621L15.3311 2.45734L12.8328 0L0.873718 12L12.8328 24L15.3311 21.5427L11.2765 17.529C9.76109 16.0546 8.53242 15.686 6.5256 15.3993V13.7611L32 13.7611Z"
        fill={color || '#5B8BF5'}
      />
    </svg>
  )
}

export default RightArrow
