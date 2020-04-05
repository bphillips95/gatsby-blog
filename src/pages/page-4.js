import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FourthPage = () => (
  <Layout>
    <SEO title="Page four" />
    <h1>Using Spotify in CLI</h1>
  
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FourthPage
