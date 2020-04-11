import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'

const HeaderContainer = styled.header`
  background: rebeccapurple;
  marginbottom: 1.45rem;
`

const HeaderWrapper = styled.div`
  margin: 0 auto;
  maxwidth: 960;
  padding: 1.45rem 1.0875rem;
`

const HeaderTitle = styled.h1`
  margin: 0;
`

const RootLink = styled(Link)`
  color: white;
  textdecoration: none;
`

const Header = ({ siteTitle }: HeaderProps) => (
  <HeaderContainer>
    <HeaderWrapper>
      <HeaderTitle>
        <RootLink to="/">{siteTitle}</RootLink>
      </HeaderTitle>
    </HeaderWrapper>
  </HeaderContainer>
)

interface HeaderProps {
  siteTitle: String
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
