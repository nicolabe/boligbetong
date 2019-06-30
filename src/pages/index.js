import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { PageContent } from "../styled_components"

const ForegroundText = styled.div`
  font-size: 28px;
  color: white;
  padding: 0 1.4em;
  line-height: 1.5;
  text-align: center;
  position: absolute;
  top: 250px;
  right: 50px;
  left: 25px;

  &:before {
    content: "";
    background-color: black;
    z-index: -1;
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.7;
    top: 0;
    left: 0;
    border: 10px solid white;
    margin-right: 2em;
  }

  @media screen and (max-width: ${props => props.theme.mobileWidth}) {
    font-size: 22px;
    line-height: 1.3;
  }
`

const IndexPage = ({ path }) => {
  return (
    <Layout path={path}>
      <SEO title="Hjem" />
      <PageContent>
        <ForegroundText>
          <h1>Betong til boligformål. I Vestfold og Telemark</h1>
        </ForegroundText>
      </PageContent>
    </Layout>
  )
}

export default IndexPage
