import React from 'react'
import styled from 'styled-components'
import { LinkB } from '../../Typography'
import { Incubator } from 'src/fixtures/dev-for-apps/utility'

type AuthenticationProps = {
  project: Incubator
}

const Wrap = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`

const ImageWrap = styled.div`
  margin-right: 5px;
  width: 24px;
  height: 24px;
`

const GitHubLink = ({ project }: AuthenticationProps) => {
  const githubUrl = project.verifier_id

  return (
    <>
      {project.property?.links?.github && (
        <Wrap>
          <ImageWrap>
            <img src="https://res.cloudinary.com/haas-storage/image/upload/v1613111071/github_rg8ngo.png" />
          </ImageWrap>
          <LinkB href={project.property?.links.github} rel="noopener noreferrer" target="_blank">
            {githubUrl}
          </LinkB>
        </Wrap>
      )}
    </>
  )
}

export default GitHubLink
