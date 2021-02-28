import React, { useState } from 'react'
import styled from 'styled-components'

import { H3Xs } from 'src/components/organisms/Incubator/Typography'
import { Button } from 'src/components/organisms/Incubator/molecules/Button'
import ProjectEntry from 'src/components/organisms/Incubator/ProjectOverview/Project'
import { CurrencySwitcher } from '../molecules/CurrencySwitcher'
import { useGetIncubators } from 'src/fixtures/dev-for-apps/hooks'
import { Incubator } from 'src/fixtures/dev-for-apps/utility'

const ProjectOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 1128px;
  flex-grow: 1;
`

const OverviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Overview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 264px); /* minmax(264px, 1fr) */
  grid-gap: 1.5em;
  padding-top: 5em;
`

const GradientContainer = styled.div<{ isExpanded?: boolean }>`
  position: relative;
  padding-top: 1.5em;
  padding-bottom: 3em;
  max-height: ${props => (props.isExpanded ? 'auto' : '1050px')};
  overflow-y: hidden;
  width: 100%;
  background-image: linear-gradient(#00d0fd, #5b8bf5, #d500e6, #ff3815);
`

const SeeMore = styled.div<{ isExpanded?: boolean }>`
  position: absolute;
  display: ${props => (props.isExpanded ? 'none' : 'initial')};
  bottom: 0;
  width: 100%;
  height: 300px;
  background-image: linear-gradient(transparent, #ff3815 50%);
`

const ProjectOverview = () => {
  const [showAll, setShowAll] = useState(false)
  const { data } = useGetIncubators()

  const projects: Array<Incubator> = showAll && data ? data : data?.slice(0, 8) || []
  console.log('projects: ', projects)
  return (
    <GradientContainer id="projects" isExpanded={showAll}>
      <ProjectOverviewContainer>
        <OverviewHeader>
          <H3Xs color="white">Meet our Incubated Projects</H3Xs>
          <CurrencySwitcher />
        </OverviewHeader>
        <Overview>
          {projects && projects.map((project, index) => <ProjectEntry key={index} project={project} />)}
        </Overview>
      </ProjectOverviewContainer>
      <SeeMore isExpanded={showAll} />
      {!showAll && (
        <Button
          onClick={() => setShowAll(true)}
          style={{ width: '180px', position: 'absolute', bottom: '50px', left: '50%', transform: 'translateX(-50%)' }}
          backgroundColor="white"
          hoverBackgroundColor="black"
          hoverTextColor="white"
          textColor="black"
        >
          Show all {data?.length || 20}
        </Button>
      )}
    </GradientContainer>
  )
}

export default ProjectOverview
