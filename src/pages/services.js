import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ElementsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Services"
        keywords={[`draughting`, `drafting`, `mechanical`, `engineering`, `dnv`, `aberdeen`, `3d printing`, `3d print`, `animation`, `3d`, `modeling`, `portlethen`, `render`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h4>
            Our experience has shown that organisations find it increasingly
            difficult to obtain professional quality CAD draughtsmen at short notice,
            particularly for small to medium term contracts. We have developed our business
            to suit this demand and provide quality solutions for a wide range of customers.
            Our flexibility and up to the minute expertise can provide a range of services
            tailored to meet the specific needs of individual customers.
          </h4>
        </div>
        <div className="services-list">
          <div className="border">
            <h4>Our Services Include</h4>
            <ul>
              <li>3D Animation</li>
              <li>General CAD Projects</li>
              <li>Mechanical and Structural Detailing</li>
              <li>Basic Dimensional Laser Surveys</li>
              <li>In-House 3D Plastic Model Printing</li>
              <li>Technical Presentations</li>
              <li>Short and Long-term CAD Projects</li>
              <li>Fast Track Engineering Projects</li>
            </ul>
          </div>
          <div>
            <h4>Software</h4>
            <ul>
              <li>SolidWorks 3D CAD</li>
              <li>AutoCAD LT</li>
              <li>Autodesk 3DS Max</li>
              <li>AutoMet ML Survey</li>
              <li>Leica TS 30</li>
            </ul>
          </div>
          <div>
            <h4>Design Review</h4>
            <ul>
              <li>DNV GL</li>
              <li>Bureau Veritas</li>
              <li>Lloyd's Register</li>
            </ul>
          </div>
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
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
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
      <ElementsPage location={props.location} data={data} {...props} />
    )}
  />
)
