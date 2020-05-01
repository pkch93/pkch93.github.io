import React from 'react'

import styled from 'styled-components'
import { dark } from '../shared/style'

import Layout from '../layout/layout'
import SEO from '../components/SEO'

const Index = styled.div`
  height: 100%;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Index />
    </Layout>
  )
}

export default IndexPage
