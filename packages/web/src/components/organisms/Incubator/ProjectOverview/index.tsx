import React, { useState } from 'react'
import styled from 'styled-components'

import { Span } from 'src/components/organisms/Incubator/Typography'
import { Button } from 'src/components/organisms/Incubator/molecules/Button'
import ProjectEntry from 'src/components/organisms/Incubator/ProjectOverview/Project'

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
  min-height: 1100px;
  flex-grow: 1;
  padding-top: 1em;
  background-image: linear-gradient(#00d0fd, #5b8bf5, #d500e6, #ff3815);
`

const OverviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CurrencySwitcher = styled.div`
  display: flex;
`

const Dev = styled.div<{ isSelected?: boolean }>`
  cursor: pointer;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 1px solid white;
  background: ${props => (props.isSelected ? 'white' : 'transparent')};
  padding: 0 15px;
  color: ${props => (props.isSelected ? '#5B8BF5' : 'white')};
  font-size: 20px;
`
const Usd = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid white;
  background: ${props => (props.isSelected ? 'white' : 'transparent')};
  padding: 0 15px;
  color: ${props => (props.isSelected ? '#5B8BF5' : 'white')};
  font-size: 20px;
`

const FilterOptions = styled.div`
  display: flex;
  padding: 3em 0;
  min-width: 950px;
  margin: 0 auto;
  justify-content: space-around;
`

const FilterOption = styled.div<{ isSelected?: boolean }>`
  cursor: pointer;
  padding: 10px 25px;
  border-radius: 24px;
  border: 1px solid white;
  color: ${props => (props.isSelected ? '#5B8BF5' : 'white')};
  background: ${props => (props.isSelected ? 'white' : 'transparent')};
  font-size: 24px;
`

const Overview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  grid-gap: 20px;
`

const ProjectOverview = () => {
  const [showAll, setShowAll] = useState(false)

  const projects = showAll ? PLACHEOLDER_DATA : PLACHEOLDER_DATA.slice(0, 8)
  return (
    <div
      style={{
        paddingTop: '1em',
        width: '100%',
        backgroundImage: 'linear-gradient(#00d0fd, #5b8bf5, #d500e6, #ff3815)'
      }}
    >
      <ProjectOverviewContainer>
        <OverviewHeader>
          <Span color="white" fontSize="20px">
            Meet our incubated projects
          </Span>
          <CurrencySwitcher>
            <Dev>DEV</Dev>
            <Usd isSelected>USD</Usd>
          </CurrencySwitcher>
        </OverviewHeader>
        <FilterOptions>
          <FilterOption>Infrastructure</FilterOption>
          <FilterOption isSelected>Hosting</FilterOption>
          <FilterOption>Crypto OSS</FilterOption>
          <FilterOption>Women that code</FilterOption>
        </FilterOptions>
        <Overview>
          {projects &&
            projects.map(({ funding, title, url }, index) => (
              <ProjectEntry key={index} url={url} funding={funding} title={title} />
            ))}
          <div style={{ padding: '2em', display: 'flex', gridColumn: '1/-1', justifyContent: 'center' }}>
            <Button
              onClick={() => setShowAll(true)}
              style={{ width: '180px' }}
              backgroundColor="white"
              hoverBackgroundColor="#D500E6"
              textColor="black"
            >
              Show all {PLACHEOLDER_DATA.length}
            </Button>
          </div>
        </Overview>
      </ProjectOverviewContainer>
    </div>
  )
}

export default ProjectOverview
