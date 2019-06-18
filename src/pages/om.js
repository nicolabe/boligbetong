import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageContent } from "../styled_components"
import styled from "styled-components"
import { UserProfile } from "../components/UserProfile"

import peterImage from "../images/peter.jpg"

const UserProfileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const UserProfileListItem = styled.li`
  padding: 0;
  margin: 0;
`

const AboutPage = () => (
  <Layout>
    <SEO title="Om" />
    <PageContent>
      Her er litt info om oss:
      <UserProfileList>
        <UserProfileListItem>
          <UserProfile name="Peter Raugland" img={peterImage} />
        </UserProfileListItem>
        <UserProfileListItem>
          <UserProfile name="Erlend Skjøtskift" />
        </UserProfileListItem>
      </UserProfileList>
      <a
        href="https://mittanbud.no/profil/865442/bolig-betong-as/#overview"
        target="_blank"
      >
        Mitt anbud
      </a>
    </PageContent>
  </Layout>
)

export default AboutPage
