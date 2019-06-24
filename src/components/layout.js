import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import { ThemeProvider } from "styled-components"
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
          <div>
            {header && (
              <PageHeaderContainer>
                <PageHeader>{header}</PageHeader>
                <PageSubtext>{description}</PageSubtext>
              </PageHeaderContainer>
            )}
            <main>{children}</main>
            <footer />
          </div>
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
