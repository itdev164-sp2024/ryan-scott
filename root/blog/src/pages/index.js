import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import {List, Listitem} from '../components/List'
import { graphql } from "graphql"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home"/>
    <List width={[1, 2/3, 7/8]} p={2} >
      {
        data.allContnetfulBlogPost.edges.map(edge = (
          <Listitem p={3} key={edge.node.title}>
          <Link to={edge.node.slug}> {edge.node.title} </Link>
          <div>
            <GatsbyImage
            image={edge.node.heroImage.GatsbyImageData}/>
          </div>
          <div>
            {edge.node.body.childMarkdownRemark.excerpt}
          </div>
          </Listitem>
        ))
      }

    </List>
  </Layout>   
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const query = graphql`
{
  allContentfulBlogPost{
    edges{
      node{
        id
        title
        slug
        body{
          childMarkdownRemark{
            excerpt
          }
        }
        heroImage{
          gatsbyImageData{
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 600
          }
        }
      }
    }
  }
}`

export default IndexPage
