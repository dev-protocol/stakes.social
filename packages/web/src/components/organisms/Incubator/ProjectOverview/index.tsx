import React, { useState } from 'react'
import styled from 'styled-components'

import { Span } from 'src/components/organisms/Incubator/Typography'
import { Button } from 'src/components/organisms/Incubator/molecules/Button'
import ProjectEntry from 'src/components/organisms/Incubator/ProjectOverview/Project'
import { CurrencySwitcher } from '../molecules/CurrencySwitcher'

const PLACHEOLDER_DATA = [
  {
    title: 'Sigma',
    funding: '26,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613044939/sigma_tye6kg.png'
  },
  {
    title: 'BrightID',
    funding: '12,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045021/bright_id_siwjeu.png'
  },
  {
    title: 'Wallet Connect',
    funding: '34,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045241/walletconnect-logo_bgdxkx.png'
  },
  {
    title: 'ChainSafe',
    funding: '19,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045322/chain_safe_ohqczw.png'
  },
  {
    title: 'ZeroPool',
    funding: '23,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613043066/zeropool_lykmbs.png'
  },
  {
    title: 'Redux-Saga',
    funding: '76,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045672/redux_sage_sxncfk.png'
  },
  {
    title: 'Jekyll',
    funding: '38,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045746/jekyll_jpzssa.png'
  },
  {
    title: 'BoostNode',
    funding: '7,500',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045786/boostnode_n7hjmr.png'
  },
  {
    title: 'Sigma',
    funding: '26,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613044939/sigma_tye6kg.png'
  },
  {
    title: 'BrightID',
    funding: '12,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045021/bright_id_siwjeu.png'
  },
  {
    title: 'Wallet Connect',
    funding: '34,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045241/walletconnect-logo_bgdxkx.png'
  },
  {
    title: 'ChainSafe',
    funding: '19,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045322/chain_safe_ohqczw.png'
  },
  {
    title: 'ZeroPool',
    funding: '23,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613043066/zeropool_lykmbs.png'
  },
  {
    title: 'Redux-Saga',
    funding: '76,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045672/redux_sage_sxncfk.png'
  },
  {
    title: 'Jekyll',
    funding: '38,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045746/jekyll_jpzssa.png'
  },
  {
    title: 'BoostNode',
    funding: '7,500',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045786/boostnode_n7hjmr.png'
  },
  {
    title: 'Sigma',
    funding: '26,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613044939/sigma_tye6kg.png'
  },
  {
    title: 'BrightID',
    funding: '12,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045021/bright_id_siwjeu.png'
  },
  {
    title: 'Wallet Connect',
    funding: '34,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045241/walletconnect-logo_bgdxkx.png'
  },
  {
    title: 'ChainSafe',
    funding: '19,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045322/chain_safe_ohqczw.png'
  },
  {
    title: 'ZeroPool',
    funding: '23,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613043066/zeropool_lykmbs.png'
  },
  {
    title: 'Redux-Saga',
    funding: '76,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045672/redux_sage_sxncfk.png'
  },
  {
    title: 'Jekyll',
    funding: '38,000',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045746/jekyll_jpzssa.png'
  },
  {
    title: 'BoostNode',
    funding: '7,500',
    url: 'https://res.cloudinary.com/haas-storage/image/upload/v1613045786/boostnode_n7hjmr.png'
  }
]

const ProjectOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  flex-grow: 1;
  padding-top: 1em;
  background-image: linear-gradient(#00d0fd, #5b8bf5, #d500e6, #ff3815);
`

const OverviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FilterOptions = styled.div`
  display: flex;
  padding: 3em 0;
  min-width: 950px;
  margin: 0 auto;
  justify-content: space-around;
`

const FilterOption = styled.div<{ filter: string; activeFilter: string }>`
  cursor: pointer;
  padding: 10px 25px;
  border-radius: 24px;
  border: 1px solid white;
  color: ${props => (props.activeFilter === props.filter ? '#5B8BF5' : 'white')};
  background: ${props => (props.activeFilter === props.filter ? 'white' : 'transparent')};
  font-size: 24px;
`

const Overview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  grid-gap: 20px;
`

const GradientContainer = styled.div<{ isExpanded?: boolean }>`
  position: relative;
  padding-top: 1em;
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
  const [activeFilter, setActiveFilter] = useState('')

  const projects = showAll ? PLACHEOLDER_DATA : PLACHEOLDER_DATA.slice(0, 8)
  return (
    <GradientContainer isExpanded={showAll}>
      <ProjectOverviewContainer>
        <OverviewHeader>
          <Span color="white" fontSize="20px">
            Meet our Incubated Projects
          </Span>
          <CurrencySwitcher />
        </OverviewHeader>
        <FilterOptions>
          <FilterOption
            onClick={() => setActiveFilter('Infrastructure')}
            filter="Infrastructure"
            activeFilter={activeFilter}
          >
            Infrastructure
          </FilterOption>
          <FilterOption onClick={() => setActiveFilter('Hosting')} filter="Hosting" activeFilter={activeFilter}>
            Hosting
          </FilterOption>
          <FilterOption onClick={() => setActiveFilter('Crypto')} filter="Crypto" activeFilter={activeFilter}>
            Crypto OSS
          </FilterOption>
          <FilterOption onClick={() => setActiveFilter('Women')} filter="Women" activeFilter={activeFilter}>
            Women that code
          </FilterOption>
        </FilterOptions>
        <Overview>
          {projects &&
            projects.map(({ funding, title, url }, index) => (
              <ProjectEntry key={index} url={url} funding={funding} title={title} />
            ))}
        </Overview>
      </ProjectOverviewContainer>
      <SeeMore isExpanded={showAll} />
      {!showAll && (
        <Button
          onClick={() => setShowAll(true)}
          style={{ width: '180px', position: 'absolute', bottom: '50px', left: '50%', transform: 'translateX(-50%)' }}
          backgroundColor="white"
          hoverBackgroundColor="#D500E6"
          textColor="black"
        >
          Show all {PLACHEOLDER_DATA.length}
        </Button>
      )}
    </GradientContainer>
  )
}

export default ProjectOverview
