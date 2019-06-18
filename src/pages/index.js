import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const BackgroundImage = styled.div`
  height: calc(100vh - 102px);
  position: relative;
  overflow: hidden;
  background: #000;

  &:before {
    content: "";
    background-image: url("https://unsplash.it/1920/1080");
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
    z-index: 1;
  }
`

const ForegroundText = styled.div`
  font-size: 28px;
  position: absolute;
  top: 30%;
  left: 50px;
  right: 50px;
  color: white;
  z-index: 2;
  padding: 1em;
  line-height: 1.5;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 22px;
    line-height: 1.3;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Hjem" />
    <BackgroundImage />
    <ForegroundText>
      <h1>Betong til boligformål. I Vestfold og Telemark</h1>
    </ForegroundText>
  </Layout>
)

export default IndexPage
