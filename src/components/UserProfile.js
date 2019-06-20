import React from "react"
import styled from "styled-components"

const UserProfileContainer = styled.div`
  display: flex;
  -webkit-box-shadow: 4px 10px 45px -14px rgba(0, 0, 0, 0.49);
  -moz-box-shadow: 4px 10px 45px -14px rgba(0, 0, 0, 0.49);
  box-shadow: 4px 10px 45px -14px rgba(0, 0, 0, 0.49);
  background-color: white;
  padding: 1.4em;
  border-radius: 10px;
  margin-bottom: 1em;

  @media screen and (min-width: ${props => props.theme.mobileWidth}) {
    margin-right: 5em;
    margin-bottom: 0;
  }
`

const ImageContainer = styled.div`
  margin: 1em 1em 1em 0;
`

const Image = styled.img`
  height: 150px;
  width: 150px;

  @media screen and (max-width: ${props => props.theme.mobileWidth}) {
    height: 80px;
    width: 80px;
  }
`

const HeaderText = styled.h2`
  margin-bottom: 0;
  padding-right: 0.5em;
`

const TitleText = styled.p`
  font-size: 12px;
  font-style: italic;
  margin: 0.3em 0;
`

const BioContainer = styled.div``

const DescriptionText = styled.p`
  font-size: 14px;
`

export const UserProfile = props => (
  <UserProfileContainer>
    <ImageContainer>
      <Image src={props.img} alt={props.name} />
    </ImageContainer>
    <BioContainer>
      <HeaderText>{props.name}</HeaderText>
      <TitleText>{props.title}</TitleText>
      <DescriptionText>{props.children}</DescriptionText>
    </BioContainer>
  </UserProfileContainer>
)
