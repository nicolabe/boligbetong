import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import backgroundImage from "../images/background-image.jpg"

const BackgroundImage = styled.div`
  height: calc(100vh - 102px);
  position: relative;
  overflow: hidden;
  background: #000;

  &:before {
    content: "";
    background-image: url("${backgroundImage}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.5;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`

const ForegroundText = styled.div`
  font-size: 28px;
  position: absolute;
  top: 30%;
  left: 50px;
  right: 50px;
  color: white;
  padding: 1em;
  line-height: 1.5;
  text-align: center;

  @media screen and (max-width: ${props => props.theme.mobileWidth}) {
    font-size: 22px;
    line-height: 1.3;
  }
`

const IndexPage = ({ path }) => {
  return (
    <Layout path={path}>
      <SEO title="Hjem" />
      <BackgroundImage />
      <ForegroundText>
        <h1>Betong til boligformål. I Vestfold og Telemark</h1>
      </ForegroundText>
    </Layout>
  )
}

export default IndexPage
