import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageContent, Card, CardHeader } from "../styled_components"

const PricesPage = () => {
  const categories = [
    {
      type: "Hytte",
      price: "1000",
    },
    {
      type: "Hus",
      price: "2000",
    },
    {
      type: "Garasje",
      price: "500",
    },
  ]
  return (
    <Layout
      header="Priser"
      description="Prisliste for forskjellige typer oppdrag"
    >
      <SEO title="Prices" />
      <PageContent>
        {categories.map(category => (
          <Card key={category.type}>
            <CardHeader>{category.type}</CardHeader>
            Pris: {category.price}
          </Card>
        ))}
      </PageContent>
    </Layout>
  )
}

export default PricesPage
