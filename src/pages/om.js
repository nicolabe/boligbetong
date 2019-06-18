import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageContent } from "../styled_components"
import styled from "styled-components"
import { UserProfile } from "../components/UserProfile"

import peterImage from "../images/peter.jpg"
import emptyImage from "../images/empty.jpg"

const UserProfileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: ${props => props.theme.mobileWidth}) {
    flex-direction: column;
  }
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
          <UserProfile
            name="Peter Raugland"
            img={peterImage}
            title="Daglig leder"
          >
            En lystig kar som brenner for faget betong
          </UserProfile>
        </UserProfileListItem>
        <UserProfileListItem>
          <UserProfile
            name="Erlend Skjøtskift"
            img={emptyImage}
            title="Beregner"
          >
            NA
          </UserProfile>
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
