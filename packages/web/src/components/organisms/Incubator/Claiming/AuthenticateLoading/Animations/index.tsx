import React from 'react'
import Lottie from 'lottie-react'

import animation from './Loader.json'

const LoadingAnimation = () => {
  return <Lottie assetsPath="/images/" animationData={animation} />
}

export default LoadingAnimation
