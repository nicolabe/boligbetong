import styled from "styled-components"

export const PageContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  position: relative;

  @media screen and (max-width: ${props => props.theme.mobileWidth}) {
    padding: 0.8rem 0.5rem;
  }
`

export const PageHeader = styled.h1`
  font-size: 32px;
  text-align: center;
  font-weight: 300;
  text-transform: uppercase;
  opacity: 0.95;

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
  margin-top: 100px;

  @media screen and (max-width: ${props => props.theme.mobileWidth}) {
    padding: 0.7em;
    margin-top: 87px;
  }
`

export const Card = styled.div`
  background-color: white;
  margin-bottom: 1.4em;
  padding: 1.2em;
  opacity: 0.95;
`

export const CardHeader = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 22px;
  margin-bottom: 0.6em;
  margin-top: 0.6em;
`
