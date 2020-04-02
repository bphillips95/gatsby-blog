import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Mutating JS Strings</h1>
    <p>Hey all, So a lot of people coming into JavaScript, struggle with identifying with certain ideas that can look contradictory. In reality, anytime you see what appears to not make sense, best practice is to sit down and work on understanding the root issue, the why, and the how.</p>
    <br/>
    <p>
    Run this piece of JavaScript in your console.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
