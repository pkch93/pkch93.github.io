import { Link } from 'gatsby'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../modules'
import { changeDarkMode } from '../../modules/mode'

import styled from 'styled-components'

import DarkMode from './DarkMode'

const HeaderContainer = styled.header`
  background: #bdc3c7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c3e50,
    #bdc3c7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c3e50,
    #bdc3c7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
`

const HeaderTitle = styled.h1`
  margin: 0;
  font-weight: bold;
`

const RootLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }: HeaderProps) => {
  const mode = useSelector((state: RootState) => state.mode.dark)
  const dispatch = useDispatch()

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderTitle>
          <RootLink to="/">{siteTitle}</RootLink>
        </HeaderTitle>
        <DarkMode
          mode={mode}
          changeMode={() => dispatch(changeDarkMode(!mode))}
        />
      </HeaderWrapper>
    </HeaderContainer>
  )
}

interface HeaderProps {
  siteTitle: String
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
