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
      <SEO title="About Us" keywords={[`draughting`, `drafting`, `mechanical`, `engineering`, `dnv`, `aberdeen`, `3d printing`, `3d print`, `animation`, `3d`, `modeling`, `portlethen`, `render`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h4>
            GTN Technical Services, established in 1990 are a reputable CAD design draughting service company with a successful track record within the global oil and gas industry.
          </h4>
          <h4>
            We have a modern equipped drawing office based in Aberdeen, Scotland providing a variety of services. Our core business is providing 3D CAD draughting and animation services.
          </h4>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.boatRender.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Modeled in Solidworks and Rendered in 3ds Max</figcaption>
          </figure>
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
