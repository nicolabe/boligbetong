import React from "React"
import styled from "styled-components"

const Image = styled.img`
  height: 250px;
  width: 250px;
`

export const Project = ({ project }) => (
  <div>
    <h2>{project.name}</h2>
    <p>{project.description && project.description.description}</p>
    {project.images &&
      project.images.map(image => (
        <Image key={image.id} src={image.file.url} alt={image.file.fileName} />
      ))}
  </div>
)
