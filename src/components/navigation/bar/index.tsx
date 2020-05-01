import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../modules'
import { closeNavigationBar } from '../../../modules/mode/navigation'

import styled from 'styled-components'
import { Close } from '@styled-icons/evil'

const NavigationBar = styled.nav`
  position: fixed;
  left: -200px;
  width: 200px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #cecece;
  transition: 0.5s;

  &.open {
    left: 0;
  }
`

const CloseWrapper = styled.div`
  padding: 5px;
  text-align: right;
`

const CloseButton = styled(Close)`
  width: 2rem;
  cursor: pointer;
`

export default () => {
  const isNavigationBarOpened = useSelector(
    (state: RootState) => state.navi.open,
  )
  const dispatch = useDispatch()

  return (
    <>
      <NavigationBar className={isNavigationBarOpened ? 'open' : ''}>
        <CloseWrapper>
          <CloseButton onClick={() => dispatch(closeNavigationBar())} />
        </CloseWrapper>
      </NavigationBar>
    </>
  )
}
