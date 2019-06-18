import React from "react"
import styled from "styled-components"

const UserProfileContainer = styled.div`
  display: flex;
`

const ImageContainer = styled.div`
  margin: 1em;
`

const Image = styled.img`
  height: 150px;
  width: 150px;

  @media screen and (max-width: 800px) {
    height: 80px;
    width: 80px;
  }
`

const BioContainer = styled.div``

export const UserProfile = props => (
  <UserProfileContainer>
    <ImageContainer>
      <Image src={props.img} alt={props.name} />
    </ImageContainer>
    <BioContainer>
      <h2>{props.name}</h2>
      <p>Description</p>
    </BioContainer>
  </UserProfileContainer>
)
