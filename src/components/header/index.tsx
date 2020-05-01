import { Link } from 'gatsby'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../modules'
import { changeDarkMode } from '../../modules/mode'

import styled from 'styled-components'

import DarkMode from './DarkMode'

const HeaderContainer = styled.header`
  background: #000;
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
