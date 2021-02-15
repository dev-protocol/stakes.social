import React from 'react'

const TopArrow = ({color} : {color?: string}) => {
  return (
    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.2389 32L13.7611 32L13.7611 6.5256L15.3993 6.5256C15.645 8.49147 15.9727 9.63822 17.7338 11.4812L21.5427 15.3311L24 12.8328L12 0.873718L-8.37826e-07 12.8328L2.45734 15.3311L6.47099 11.2765C7.94539 9.76109 8.31399 8.53242 8.60068 6.5256L10.2389 6.5256L10.2389 32Z"
        fill={color || "#5B8BF5"}
      />
    </svg>
  )
}

export default TopArrow
