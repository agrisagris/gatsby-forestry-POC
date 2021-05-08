import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  console.log("d", data);
  return(
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    {data?.allMarkdownRemark?.edges?.map(file => {
      return (
        <div key={file?.node?.id}>
          <h3>{file?.node?.frontmatter?.title}</h3>
          <p>{file?.node?.frontmatter?.url}</p>
          <p>aa{file?.node?.frontmatter?.desc}</p>
          <div dangerouslySetInnerHTML={{__html: `${file?.node?.frontmatter?.desc}`}} />
          <div dangerouslySetInnerHTML={{__html: `${file?.node?.html}`}} />
        </div>
      )
    })}
  </Layout>
)
  }
export default IndexPage

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            url
            desc
          }
          html
        }
      }
    }
  }
`
