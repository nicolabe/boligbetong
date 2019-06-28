import React from "react"
import styled from "styled-components"
import { Card, CardHeader } from "../styled_components"

const UserProfileContainer = styled(Card)`
  display: flex;

  @media screen and (min-width: ${props => props.theme.mobileWidth}) {
    margin-bottom: 0;
    width: 450px;
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

const HeaderText = styled(CardHeader)`
  margin-bottom: 0;
  padding-right: 0.5em;
  margin-top: 20px;
  text-transform: none;
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
