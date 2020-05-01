import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../modules'
import { openNavigationBar } from '../../../modules/mode/navigation'

import styled from 'styled-components'
import { TriangleRight } from '@styled-icons/entypo'

const Holder = styled.div`
  position: fixed;
  top: 45%;
  width: 12px;
  height: 100px;
  border-radius: 0 5px 5px 0;
  background-color: rgba(0, 0, 0, 0.3);
`

const RightIndicator = styled(TriangleRight)`
  width: inherit;
  height: inherit;
  vertical-align: middle;
  cursor: pointer;
`

export default () => {
  const isNavigationOpened = useSelector((state: RootState) => state.navi.open)
  const dispatch = useDispatch()

  return (
    <>
      <Holder>
        <RightIndicator onClick={() => dispatch(openNavigationBar())} />
      </Holder>
    </>
  )
}
