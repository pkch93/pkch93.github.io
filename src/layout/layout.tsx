import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { useSelector } from 'react-redux'
import { RootState } from '../modules'

import styled from 'styled-components'

import Header from '../components/Header'
import './layout.css'
import { dark } from '../shared/style'

const LayoutContainer = styled.div`
  height: 100%;
`

const Main = styled.main`
  height: 100%;
  padding: 0 20vw;
  padding-top: 1.45rem;
  color: #000;
  transition: 0.5s;

  &.dark {
    color: #fff;
    background-color: ${dark};
  }
`

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

  const mode = useSelector((state: RootState) => state.mode.dark)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <LayoutContainer>
        <Main className={mode ? 'dark' : ''}>{children}</Main>
      </LayoutContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
