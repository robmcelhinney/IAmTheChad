/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import {
  ThemeProvider,
  createMuiTheme,
  CssBaseline,
} from "@material-ui/core"
import { SnackbarProvider } from "notistack"
import "typeface-montserrat"
import Footer from "./footer"

// Website theme
const theme = createMuiTheme({
  palette: {
    primary: {
      light: `#61ac9f`,
      main: `#37606b`,
      dark: `#19314b`
    },
    secondary: {
      main: `#81bba3`,
    },
    info: {
      main: `#616161`,
    },
  },
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <Header
            siteTitle={data.site.siteMetadata.title}
            siteDescription={data.site.siteMetadata.description}
            // style={{ "margin-bottom": 0 }}
          />
          <div
            style={{
              width: "100%"
            }}
          >
            <main>{children}</main>
            <footer>
              <Footer></Footer>
            </footer>
          </div>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
