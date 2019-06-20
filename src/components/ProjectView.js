import React from "react"
import styled from "styled-components"

const ImageContainer = styled.div`
  display: flex;
`

const Image = styled.img`
  max-height: 250px;
  max-width: 250px;
  margin-right: 1em;

  @media screen and (max-width: ${props => props.theme.mobileWidth}) {
    max-height: 100px;
    max-width: 100px;
  }
`

const ProjectContainer = styled.div`
  -webkit-box-shadow: 4px 10px 32px -10px rgba(0, 0, 0, 0.49);
  -moz-box-shadow: 4px 10px 32px -10px rgba(0, 0, 0, 0.49);
  box-shadow: 4px 10px 32px -10px rgba(0, 0, 0, 0.49);
  background-color: white;
  margin: 1.4em 0;
  padding: 1.2em;
  border-radius: 10px;
  height: 300px;

  @media screen and (max-width: ${props => props.theme.mobileWidth}) {
    height: 150px;
    margin-top: 0;
  }
`

const ProjectInfoContainer = styled.div`
  display: flex;
`

const ProjectHeader = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 22px;
  margin-bottom: 0.6em;
  margin-top: 0;
`

const DescriptionContainer = styled.p`
  width: 240px;
`

export const ProjectView = ({ project }) => (
  <ProjectContainer>
    <ProjectHeader>{project.name}</ProjectHeader>
    <ProjectInfoContainer>
      <ImageContainer>
        {project.images &&
          project.images.map(image => (
            <Image
              key={image.id}
              src={image.file.url}
              alt={image.file.fileName}
            />
          ))}
      </ImageContainer>
      <DescriptionContainer>
        {project.description && project.description.description}
      </DescriptionContainer>
    </ProjectInfoContainer>
  </ProjectContainer>
)
