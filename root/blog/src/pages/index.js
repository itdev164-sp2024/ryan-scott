import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import {List, Listitem} from '../components/List'
import { graphql } from "graphql"
import {Box, Card, Heading} from "rebass"
import * as styles from "../components/index.module.css"

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

const Grid = styled(Box)`
  display: grid;
  margin: 0;
  --w: 200px;
  --n: 2;
  gap: var(--size-gap);
  grid-template-columns: repeat(
    auto-fit,
    minmax(max(var(--w),100%/(var(--n)+1)+0.1%), 1fr)
  );
  margin-bottom: var(--size-gap);
  margin-top: var(--size-gap);

`

export default IndexPage
