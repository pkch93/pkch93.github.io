import React from 'react'

import styled from 'styled-components'

import Layout from '../layout/layout'
import SEO from '../components/SEO'

import Profile from '../components/profile'

const Index = styled.div`
  height: 100%;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Index>
        <Profile />
      </Index>
    </Layout>
  )
}

export default IndexPage
