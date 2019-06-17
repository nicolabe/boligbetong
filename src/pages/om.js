import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageContent } from "../styled_components"

const AboutPage = () => (
  <Layout>
    <SEO title="Om" />
    <PageContent>
      Her er litt info om oss:
      <ul>
        <li>Peter Raugland</li>
        <li>Erlend</li>
      </ul>
      <a href="https://mittanbud.no" target="_blank">
        Mitt anbud
      </a>
    </PageContent>
  </Layout>
)

export default AboutPage
