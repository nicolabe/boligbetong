import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{ marginBottom: `1.45rem`, overflow: `hidden`, height: `300px` }}
    >
      <Image />
    </div>
  </Layout>
)

export default IndexPage
