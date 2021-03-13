import React from 'react'
import Lottie from 'lottie-react'

import animation from './Incubator3d.json'

const IncubatorAnimation = () => {
  return <Lottie assetsPath="/images/" animationData={animation} />
}

export default IncubatorAnimation
