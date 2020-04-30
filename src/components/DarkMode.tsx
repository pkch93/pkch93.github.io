import React from 'react'

import styled from 'styled-components'

import { Moon } from '@styled-icons/fa-solid'
import { Sun } from '@styled-icons/open-iconic'

const Wrapper = styled.div`
  display: flex;
`

const ModeButton = styled.button`
  position: relative;
  display: block;
  width: 50px;
  height: 30px;
  padding: 0;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin: 0 0.5rem;
  background-color: #fcd440;
  transition: 0.5s;

  &:before {
    content: '';
    position: relative;
    top: -1px;
    left: -1px;
    display: block;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    cursor: pointer;
    transition: 0.5s;
  }

  &.dark {
    background-color: #4f6988;
  }

  &.dark:before {
    left: 20px;
    background-color: #cecece;
  }
`

const SunIndicator = styled(Sun)`
  width: 1rem;
  color: #fcd440;
`

const MoonIndicator = styled(Moon)`
  width: 1rem;
  color: #4f6988;
`

export default ({ mode, changeMode }: ModeProps) => (
  <Wrapper>
    <SunIndicator />
    <ModeButton className={mode ? 'dark' : ''} onClick={changeMode} />
    <MoonIndicator />
  </Wrapper>
)

type ModeProps = {
  mode: boolean
  changeMode: () => void
}
