import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FifthPage = () => (
  <Layout>
    <SEO title="Page five" />
    <h1>Ruby: Class, Instance and Local variables</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FifthPage
