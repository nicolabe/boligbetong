import React from "react"
import styled from "styled-components"

const ImageContainer = styled.div`
  display: flex;
  margin-left: 1.3em;
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
  margin-bottom: 1.4em;
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

const MetadataContainer = styled.ul`
  width: 260px;
  list-style: none;
  padding: 0;
  line-height: 1.3;
  position: relative;

  @media screen and (max-width: ${props => props.theme.mobileWidth}) {
    width: 140px;
    font-size: 14px;
  }

  &:after {
    content: "";
    border-right: 2px solid #ccc;
    position: absolute;
    height: 280px;
    top: -40px;
    left: 100%;
  }
`

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`

const ListLabel = styled.span`
  font-weight: 700;
`

const ListData = styled.span`
  margin-right: 1.3em;
`

export const ProjectView = ({ project }) => (
  <ProjectContainer>
    <ProjectHeader>{project.name}</ProjectHeader>
    <ProjectInfoContainer>
      <MetadataContainer>
        <ListItem>
          <ListLabel>Type</ListLabel>
          <ListData>{project.type}</ListData>
        </ListItem>
        <ListItem>
          <ListLabel>Areal</ListLabel>
          <ListData>{project.area} m2</ListData>
        </ListItem>
        <ListItem>
          <ListLabel>Gnr/Bnr</ListLabel>
          <ListData>{project.landRegistry}</ListData>
        </ListItem>
        <ListItem>
          <ListLabel>Pris</ListLabel>
          <ListData> {project.price},-</ListData>
        </ListItem>
      </MetadataContainer>
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
    </ProjectInfoContainer>
  </ProjectContainer>
)
