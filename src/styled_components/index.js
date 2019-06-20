import styled from "styled-components"

export const PageContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
`

export const PageHeader = styled.h1`
  font-size: 32px;
  text-align: center;
  font-weight: 300;
  text-transform: uppercase;

  @media screen and (max-width: ${props => props.theme.mobileWidth}) {
    font-size: 24px;
  }
`

export const PageSubtext = styled.p`
  text-align: center;
  font-size: 20px;

  @media screen and (max-width: ${props => props.theme.mobileWidth}) {
    font-size: 16px;
  }
`

export const PageHeaderContainer = styled.section`
  background-color: white;
  padding: 1em;
`
