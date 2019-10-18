import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Global/BackgroundSection"
import Info from "../components/Home/Info"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.backgroundImage.childImageSharp.fluid}
      title="Regular Joe's"
      styleClass="default-backgrounds"
    />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    backgroundImage: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
