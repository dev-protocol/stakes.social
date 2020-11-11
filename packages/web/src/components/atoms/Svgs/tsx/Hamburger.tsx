import React from 'react'

const Hamburger = (props: React.SVGProps<SVGSVGElement>) => (
  <svg id="emoji" width="50" height="50" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g id="color" />
    <g id="hair" />
    <g id="skin" />
    <g id="skin-shadow" />
    <g id="line">
      <line
        x1="16"
        x2="56"
        y1="26"
        y2="26"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="16"
        x2="56"
        y1="36"
        y2="36"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="16"
        x2="56"
        y1="46"
        y2="46"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </g>
  </svg>
)

export default Hamburger
