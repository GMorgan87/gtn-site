import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Contact Us" keywords={[`draughting`, `drafting`, `mechanical`, `engineering`, `dnv`, `aberdeen`, `3d printing`, `3d print`, `animation`, `3d`, `modeling`, `portlethen`, `render`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h4>
            Contact Us
          </h4>
          <p>
            More Text Here
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    boatRender: file(
      relativePath: { eq: "boat-render-gtn.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
