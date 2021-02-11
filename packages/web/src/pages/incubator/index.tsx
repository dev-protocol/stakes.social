import React from 'react'
import IncubatorHeader from 'src/components/organisms/Incubator/Header'
import { Footer } from 'src/components/organisms/Footer'
import ProjectOverview from 'src/components/organisms/Incubator/ProjectOverview'

const Incubator = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <IncubatorHeader />
      <ProjectOverview />
      <Footer />
    </div>
  )
}

export default Incubator
