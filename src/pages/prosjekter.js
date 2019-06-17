import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageContent } from "../styled_components"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Prosjekter" />
    <PageContent>
      Her vil det komme en liste av prosjekter vi jobber med for tiden eller som
      vi har jobbet med tidligere.
    </PageContent>
  </Layout>
)

export default ProjectsPage
