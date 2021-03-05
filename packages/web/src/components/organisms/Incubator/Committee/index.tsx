import React from 'react'
import styled from 'styled-components'

import { H3Xs, H1M, H2Xs, Text1Xs } from 'src/components/organisms/Incubator/Typography'
import Hr from '../molecules/Hr'
import { GithubIcon, TwitterBlackWhite } from '../Icons'

const CommitteeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 1128px;
  padding: 1.5em 0 0 0;

  @media (max-width: 768px) {
    padding: 1.5em 1em 0 1em;
  }
`

const PersonsOverview = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 4.25em 0 114.59px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2em 0 114.59px 0;

    > div {
      margin-top: 2em;
    }

    > div:first-child {
      margin-top: 0;
    }
  }
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
  padding-top: 1.5em;
`

const IconContainer = styled.div`
  cursor: pointer;
  padding: 0 8px;

  > a {
    text-decoration: none;
  }
`

const Person = ({ image, name, company, job, twitter, github }: PersonProps) => (
  <PersonContainer>
    <div style={{ overflow: 'hidden', borderRadius: '90px' }}>
      <Icon src={image} />
    </div>
    <H1M style={{ marginTop: '24px' }}>{name}</H1M>
    <H2Xs style={{ marginTop: '4px' }}>{company}</H2Xs>
    <Text1Xs style={{ marginTop: '2px' }}>{job}</Text1Xs>
    <SocialMediaContainer>
      <IconContainer>
        <a target="_blank" rel="noopener noreferrer" href={twitter}>
          <TwitterBlackWhite />
        </a>
      </IconContainer>
      <IconContainer>
        <a target="_blank" rel="noopener noreferrer" href={github}>
          <GithubIcon />
        </a>
      </IconContainer>
    </SocialMediaContainer>
  </PersonContainer>
)

const Committee = () => {
  return (
    <CommitteeContainer id="committee">
      <H3Xs color="black">The Incubator Committee</H3Xs>
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
          company="Chalk"
          job="BDFL"
          image="https://res.cloudinary.com/haas-storage/image/upload/v1613110031/sindre_v1ljpa.png"
          github="https://github.com/sindresorhus"
          twitter="https://twitter.com/sindresorhus"
        />
        <Person
          name="Bilgin Ibryam"
          company="Red Hat"
          job="Product Manager"
          image="https://res.cloudinary.com/haas-storage/image/upload/v1613110035/bilgin_dy3gvz.png"
          github="https://github.com/bibryam"
          twitter="https://twitter.com/bibryam"
        />
      </PersonsOverview>
      <Hr />
    </CommitteeContainer>
  )
}

export default Committee
