import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageContent, Card, CardHeader } from "../styled_components"
import styled from "styled-components"
import { UserProfile } from "../components/UserProfile"

import peterImage from "../images/peter.jpg"
import emptyImage from "../images/empty.jpg"
import mittanbud from "../images/mittanbud_logo.svg"
import instagram from "../images/instagram_logo.svg"
import pinterest from "../images/pinterest_logo.svg"

const UserProfileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  margin-bottom: 1.4em;
  justify-content: space-between;

  @media screen and (max-width: ${props => props.theme.mobileWidth}) {
    flex-direction: column;
    margin-bottom: 0;
  }
`

const UserProfileListItem = styled.li`
  padding: 0;
  margin: 0;
  width: 100%;

  & + & {
    margin-left: 1.4em;
  }
`

const DescriptionContainer = styled.section`
  font-size: 14px;
`

const FindUsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const FindUsHeader = styled.h3`
  text-transform: none;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 0;
  margin-top: 2em;
`

const SoMeIcon = styled.img`
  height: 110px;
  width: 110px;
  padding: 0 1em;
`

const AboutPage = () => (
  <Layout header="Om oss">
    <SEO title="Om" />
    <PageContent>
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
            Detaljer kommer
          </UserProfile>
        </UserProfileListItem>
      </UserProfileList>
      <Card>
        <CardHeader style={{ textTransform: "none" }}>Kort om oss</CardHeader>
        <DescriptionContainer>
          <p>
            Bolig Betong AS eies av Peter Raugland og Erlend Skjøtskift. Firmaet
            ble starten høsten 2017 og har frem til sommeren 2019 støpt over 100
            betongplater til hus, hytter, garasjer, låver og boder. Det har også
            blitt noen støttemurer, vegger og trapper.
          </p>

          <p>
            Vi er en liten og fokusert entreprenør som løfter de mindre
            oppgavene for privat- og bedrifts-markedet.
          </p>

          <p>
            Vi har erfaring, rutinene og utstyret til å levere gulvstøp opp til
            200m2, samt vegger på opp til 100m2. Vi foretrekker entrepriser som
            ligger rundt 100.000 til 200.000 kr, hvor vi har god tid til å
            planlegge og få på plass en god dialog med de andre fagene som
            inngår på byggeplassen.
          </p>

          <p>
            Kundene våre er i fokus, og vi ønsker å bli oppfattet som hyggelige,
            seriøse, ansvarlige og punktlige.
          </p>
        </DescriptionContainer>
        <section>
          <FindUsHeader>Du finner oss her</FindUsHeader>
          <FindUsContainer>
            <a
              href="https://mittanbud.no/profil/865442/bolig-betong-as/#overview"
              target="_blank"
              title="Mitt anbud"
            >
              <SoMeIcon src={mittanbud} alt="mittanbud logo" />
            </a>
            <a
              href="https://www.instagram.com/boligbetong.no/"
              target="_blank"
              title="Instagram"
            >
              <SoMeIcon
                style={{ height: "50px", width: "50px" }}
                src={instagram}
                alt="instagram logo"
              />
            </a>
            <a
              href="https://www.pinterest.com/boligbetong/"
              target="_blank"
              title="Pinterest"
            >
              <SoMeIcon
                src={pinterest}
                alt="pinterest logo"
                style={{ height: "50px", width: "50px" }}
              />
            </a>
          </FindUsContainer>
        </section>
      </Card>
    </PageContent>
  </Layout>
)

export default AboutPage
