import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageContent } from "../styled_components"
import { graphql } from "gatsby"
import { ProjectView } from "../components/ProjectView"
import styled from "styled-components"

const ProjectsContainer = styled.div``

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Prosjekter" />
      <PageContent>
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
