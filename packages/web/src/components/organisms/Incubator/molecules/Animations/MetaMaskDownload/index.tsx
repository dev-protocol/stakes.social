import React from "react";
import Lottie from "lottie-react";
import styled from 'styled-components'

import groovyWalkAnimation from "./data.json";

const DownloadMetamaskAnimation = () => {
  return (
    
    <Lottie  assetsPath="/images/" animationData={groovyWalkAnimation} />
  )
}

export default DownloadMetamaskAnimation
