import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>A software blog by Baruch Phillips</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Mutating JS strings</Link><br/>
    <Link to="/page-3/">The people of Programming</Link><br/>
    <Link to="/page-4/">Using Spotify in CLI</Link><br/>
    <Link to="/page-5/">Ruby: Class, Instance and Local variables</Link><br/><br/>
    <Link to="/about/">About Me</Link>
  </Layout>
)

export default IndexPage
