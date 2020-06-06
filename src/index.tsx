import React from 'react'

import styled from 'styled-components'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './modules'

const store = createStore(rootReducer)

const GatsbyWrapper = styled.div``

export default ({ body }: Props) => (
  <>
    <Provider store={store}>
      <GatsbyWrapper
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </Provider>
  </>
)

interface Props {
  body: string
}
