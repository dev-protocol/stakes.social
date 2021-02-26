import React, { useState } from 'react'
import styled from 'styled-components'

import { H3Xs } from 'src/components/organisms/Incubator/Typography'
import { Button } from 'src/components/organisms/Incubator/molecules/Button'
import ProjectEntry from 'src/components/organisms/Incubator/ProjectOverview/Project'
import { CurrencySwitcher } from '../molecules/CurrencySwitcher'

const PLACHEOLDER_DATA = [
  {
    title: 'Sigma',
    funding: 26000,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613044939/sigma_tye6kg.png',
    tags: ['Infrastructure']
  },
  {
    title: 'BrightID',
    funding: 12000,
    claimed: true,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045021/bright_id_siwjeu.png',
    tags: ['Infrastructure']
  },
  {
    title: 'Wallet Connect',
    funding: 34000,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045241/walletconnect-logo_bgdxkx.png',
    tags: ['Infrastructure']
  },
  {
    title: 'ChainSafe',
    funding: 19000,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045322/chain_safe_ohqczw.png',
    tags: ['Infrastructure']
  },
  {
    title: 'ZeroPool',
    funding: 23000,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613043066/zeropool_lykmbs.png',
    tags: ['Women']
  },
  {
    title: 'Redux-Saga',
    funding: 76000,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045672/redux_sage_sxncfk.png',
    tags: []
  },
  {
    title: 'Jekyll',
    funding: 38000,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045746/jekyll_jpzssa.png',
    tags: []
  },
  {
    title: 'BoostNode',
    funding: 7500,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045786/boostnode_n7hjmr.png',
    tags: []
  },
  {
    title: 'Sigma',
    funding: 26000,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613044939/sigma_tye6kg.png',
    tags: []
  },
  {
    title: 'BrightID',
    funding: 12000,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045021/bright_id_siwjeu.png',
    tags: []
  },
  {
    title: 'Wallet Connect',
    funding: 34000,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045241/walletconnect-logo_bgdxkx.png',
    tags: []
  },
  {
    title: 'ChainSafe',
    funding: 19000,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045322/chain_safe_ohqczw.png',
    tags: []
  },
  {
    title: 'ZeroPool',
    funding: 23000,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613043066/zeropool_lykmbs.png',
    tags: ['Women']
  },
  {
    title: 'Redux-Saga',
    funding: 76000,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045672/redux_sage_sxncfk.png',
    tags: []
  },
  {
    title: 'Jekyll',
    funding: 38000,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045746/jekyll_jpzssa.png',
    tags: []
  },
  {
    title: 'BoostNode',
    funding: 7500,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045786/boostnode_n7hjmr.png'
  },
  {
    title: 'Sigma',
    funding: 26000,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613044939/sigma_tye6kg.png',
    tags: []
  },
  {
    title: 'BrightID',
    funding: 12000,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045021/bright_id_siwjeu.png',
    tags: []
  },
  {
    title: 'Wallet Connect',
    funding: 34000,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045241/walletconnect-logo_bgdxkx.png',
    tags: []
  },
  {
    title: 'ChainSafe',
    funding: 19000,
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045322/chain_safe_ohqczw.png',
    tags: []
  }
]

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

  const projects = showAll ? PLACHEOLDER_DATA : PLACHEOLDER_DATA.slice(0, 8)
  return (
    <GradientContainer id="projects" isExpanded={showAll}>
      <ProjectOverviewContainer>
        <OverviewHeader>
          <H3Xs color="white">Meet our Incubated Projects</H3Xs>
          <CurrencySwitcher />
        </OverviewHeader>
        <Overview>
          {projects &&
            projects.map(({ funding, title, url, claimed }, index) => (
              <ProjectEntry claimed={claimed} key={index} url={url} funding={funding} title={title} />
            ))}
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
          Show all {PLACHEOLDER_DATA.length}
        </Button>
      )}
    </GradientContainer>
  )
}

export default ProjectOverview
