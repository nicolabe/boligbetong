import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import backgroundImage from "../images/background-image.jpg"

import Header from "./header"
import styled, { ThemeProvider } from "styled-components"
import "./layout.css"
import {
  PageHeaderContainer,
  PageHeader,
  PageSubtext,
} from "../styled_components"

const theme = {
  primary: "black",
  mobileWidth: "800px",
}

const MainContent = styled.div``

const Layout = ({ children, header, description, path }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <Header siteTitle={data.site.siteMetadata.title} path={path} />
          <MainContent>
            {header && (
              <PageHeaderContainer>
                <PageHeader>{header}</PageHeader>
                <PageSubtext>{description}</PageSubtext>
              </PageHeaderContainer>
            )}
            <main>{children}</main>
            <footer />
          </MainContent>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string,
  description: PropTypes.string,
}

export default Layout
