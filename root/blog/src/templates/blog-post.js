﻿
import React from 'react'
import { graphql } from 'gatsby'
 import Layout from '../components/layout'
 import {H1} from '../components/Heading'


const BlogPost = ({ data }) => {
     const {title} = data.contentfulBlogPost;



    return (
        <Layout>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: bodyParser.childMarkdownRemark.html}}></div>
        </Layout>
    )
}


export default BlogPost;
export const pageQuery = graphql`
    query blogPostQuery($slug: String!) { 
        contentfulBlogPost (slug: {eq: $slug}) {
        title
         slug
         body{
            childMardownRemark{
                html
            }
         }
        }
    }
    `
