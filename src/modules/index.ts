import { combineReducers } from 'redux'
import ModeReducers from './mode'

const rootReducer = combineReducers({
  mode: ModeReducers.DarkModeReducer,
  navi: ModeReducers.NavigationModeReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
