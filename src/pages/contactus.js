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
          <div className="contact-us">
          <p>
            <strong>Garry Nicoll</strong><br/>
            Drawing Office Manager<br/><br/>
            Email: cad@gtnuk.com<br/>
            Telephone: +44 (0)1224 783111<br/><br/>
          </p>
          <p className="address">
            GTN Technical Services Limited<br/>
            Badentoy Crescent Business Centre<br/>
            Portlethen<br/>
            Aberdeen<br/>
            AB12 4YD<br/>
          </p>
          </div>
          <p>If you have any queries please do not hesitate to contact us by telephone, 
             e-mail or using the enquiry form below:</p>
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <p>
              <input type="hidden" name="bot-field"/>
              <input type="hidden" name="form-name" value="contact"/>
              <input type="hidden" name="subject" value="Website Enquiry"/>
            </p>
            <p>
              <label>Your Name: <input type="text" name="name" /></label>   
            </p>
            <p>
              <label>Company: <input type="text" name="company" /></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
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
