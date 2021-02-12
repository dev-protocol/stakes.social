import React from 'react'
import IncubatorHeader from 'src/components/organisms/Incubator/Header'
import Footer from 'src/components/organisms/Incubator/Footer'
import ProjectOverview from 'src/components/organisms/Incubator/ProjectOverview'
import Committee from 'src/components/organisms/Incubator/Committee'
import RandomTips from 'src/components/organisms/Incubator/Tips'

const Incubator = () => {
  return (
    <>
      <IncubatorHeader />
      <ProjectOverview />
      <Committee />
      <RandomTips />
      <Footer />
    </>
  )
}

export default Incubator
