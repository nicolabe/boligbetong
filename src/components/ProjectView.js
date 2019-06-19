import React from "react"
import styled from "styled-components"

const ImageContainer = styled.div`
  display: flex;
`

const Image = styled.img`
  max-height: 250px;
  max-width: 250px;
  margin-right: 1em;
`

const ProjectContainer = styled.div`
  -webkit-box-shadow: 4px 10px 45px -14px rgba(0, 0, 0, 0.49);
  -moz-box-shadow: 4px 10px 45px -14px rgba(0, 0, 0, 0.49);
  box-shadow: 4px 10px 45px -14px rgba(0, 0, 0, 0.49);
  background-color: white;
  margin: 1.4em 0;
  margin-right: 1.5em;
  padding: 1.2em;
  border-radius: 10px;
  height: 300px;
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
  width: 160px;
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
