import React from 'react'
import styled from 'styled-components'

import { ProfileImage } from '../Image'

const Wrapper = styled.div`
  width: 200px;
`

export default () => (
  <Wrapper>
    <ProfileImage />
  </Wrapper>
)
