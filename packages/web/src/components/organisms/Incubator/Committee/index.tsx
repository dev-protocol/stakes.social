import React from 'react'
import styled from 'styled-components'

import { Span } from 'src/components/organisms/Incubator/Typography'
import Hr from '../molecules/Hr'

const CommitteeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 2em 0 0 0;
`

const PersonsOverview = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 4em 0 5em 0;
`

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

type PersonProps = {
  image: string
  name: string
  company: string
  job: string
  github?: string
  twitter?: string
}

const Icon = styled.img`
  filter: grayscale(100%);
  width: 168px;
  height: 168px;
`

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconContainer = styled.div`
  cursor: pointer;
  padding: 7.5px;

  > a {
    text-decoration: none;
  }
`

const Person = ({ image, name, company, job, twitter, github }: PersonProps) => (
  <PersonContainer>
    <div style={{ overflow: 'hidden', borderRadius: '90px' }}>
      <Icon src={image} />
    </div>
    <Span fontWeight="bold" fontSize="32px">
      {name}
    </Span>
    <Span fontSize="20px">{company}</Span>
    <Span fontSize="12px">{job}</Span>
    <SocialMediaContainer>
      <IconContainer>
        <a target="_blank" rel="noopener noreferrer" href={twitter}>
          <img src="https://res.cloudinary.com/haas-storage/image/upload/v1613111072/twitter_kggvre.png" />
        </a>
      </IconContainer>
      <IconContainer>
        <a target="_blank" rel="noopener noreferrer" href={github}>
          <img src="https://res.cloudinary.com/haas-storage/image/upload/v1613111071/github_rg8ngo.png" />
        </a>
      </IconContainer>
    </SocialMediaContainer>
  </PersonContainer>
)

const Committee = () => {
  return (
    <CommitteeContainer id="committee">
      <Span color="black" fontSize="20px">
        The Incubator Committee
      </Span>
      <PersonsOverview>
        <Person
          name="Aggre Hara"
          company="Dev Protocol"
          job="CTO"
          image="https://res.cloudinary.com/haas-storage/image/upload/v1613110043/aggre_hyisi1.png"
          github="https://github.com/dev-protocol"
          twitter="https://twitter.com/aggre_?lang=bg"
        />
        <Person
          name="Sindre Sorhus"
          company="OSS"
          job="BDFL"
          image="https://res.cloudinary.com/haas-storage/image/upload/v1613110031/sindre_v1ljpa.png"
          github="https://github.com/sindresorhus"
          twitter="https://twitter.com/sindresorhus"
        />
        <Person
          name="Bilgin Ibryam"
          company="RedHat"
          job="Project Manager"
          image="https://res.cloudinary.com/haas-storage/image/upload/v1613110035/bilgin_dy3gvz.png"
          github="https://github.com/bibryam"
          twitter="https://twitter.com/aggre_?lang=bg"
        />
      </PersonsOverview>
      <Hr />
    </CommitteeContainer>
  )
}

export default Committee
