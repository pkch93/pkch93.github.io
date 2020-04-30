import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../modules'

import Header from '../components/header'
import './layout.css'

const LayoutContainer = styled.div`
  margin: 0 20vw;
`

const store = createStore(rootReducer)

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

  return (
    <>
      <Provider store={store}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <LayoutContainer>
          <main>{children}</main>
        </LayoutContainer>
      </Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
