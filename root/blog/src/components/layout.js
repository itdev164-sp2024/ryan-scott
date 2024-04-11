import styled from "styled=components"
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import Header from "./components/Header/header.js"
import "./layout.css"
import {Gray} from "./themes/Gray"
import { ThemeProvider } from "styled-components"
import "./layout.css"

import { Main } from "./Main/Main.js"
import { Footer } from "./Footer/Footer.js"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

const Content = styled.div`
margin: 0 auto;
max-width: var(--size-content);
padding: var(--size-gutter);
`







  return (
    <ThemeProvider theme= {Gray}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
     <Content>
      <main>{children}</main>
      <footer
      style={{
        marginTop: `var(--space-5)`,
        fontSize: `var(--font-sm)`,
      }}>
        {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.gatsbyjs.com"> Gatsby</a>
      </footer>
     </Content>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
