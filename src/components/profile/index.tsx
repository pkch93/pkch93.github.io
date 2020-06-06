import React from 'react'
import styled from 'styled-components'

import Thumbnail from './Thumbnail'
import Introduction from './Introduction'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export default () => (
  <Wrapper>
    <Thumbnail />
    <Introduction />
  </Wrapper>
)
