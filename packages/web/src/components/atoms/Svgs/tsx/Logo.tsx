import * as React from 'react'

const SvgLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 408 146" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
    <defs>
      <linearGradient
        id="Logo_svg__b"
        x2={405.98}
        y1={74.5}
        y2={74.5}
        gradientTransform="matrix(1 0 0 -1 0 148)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00ebff" offset={0} />
        <stop stopColor="#f200df" offset={0.35} />
        <stop stopColor="#ff4700" offset={1} />
      </linearGradient>
      <clipPath id="Logo_svg__a" transform="translate(0 -.5)">
        <path
          d="M147.14 72.87c0 42.9-33.85 72.88-82.75 72.88H0V0h65.72c48.01 0 81.42 29.77 81.42 72.87zm-35.62.21c0-26.86-19.91-45.39-46.47-45.39H35v90.37h31.6c25.89 0 44.92-18.32 44.92-44.98zm145.15 34.36l19.47 16.66c-13.72 15.2-31.87 22.9-53.55 22.9-37.84 0-63.28-22.9-63.28-57 0-33.73 23.67-57 61.07-57.26 34.51-.21 57.3 19.57 58.63 51.64l-82.31 20.4C201.79 115.56 212 122 225 122c11.53 0 22.59-5 31.67-14.56zm-63.29-21.86l52.22-13.33c-3.76-10.83-11.95-15.83-23.45-15.83-16.82 0-27.66 10.21-28.77 29.16zm124.79-51.85l28.1 81.62 27.88-81.62H408l-44.92 112h-35L283 33.94z"
          fill="none"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#Logo_svg__a)">
      <path transform="translate(0 -.5)" d="M408 .5H0v146h408z" fill="url(#Logo_svg__b)" />
    </g>
  </svg>
)

export default SvgLogo
