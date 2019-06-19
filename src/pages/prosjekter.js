import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, PageSubtext, PageContent } from "../styled_components"
import { graphql } from "gatsby"
import { ProjectView } from "../components/ProjectView"
import styled from "styled-components"

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Prosjekter" />
      <PageContent>
        <section>
          <PageHeader>Våre prosjekter</PageHeader>
          <PageSubtext>
            Noen av prosjektene vi jobber med for tiden eller har jobbet med
            tidligere.
          </PageSubtext>
        </section>
        <ProjectsContainer>
          {data.allContentfulProject.edges.map(project => (
            <ProjectView key={project.node.id} project={project.node} />
          ))}
        </ProjectsContainer>
      </PageContent>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          id
          name
          description {
            description
          }
          createdAt
          images {
            id
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
