const NAVIGATION_BAR_OPEN = 'navigation/OPEN' as const
const NAVIGATION_BAR_CLOSE = 'navigation/CLOSE' as const

export const openNavigationBar = () => ({
  type: NAVIGATION_BAR_OPEN,
})

export const closeNavigationBar = () => ({
  type: NAVIGATION_BAR_CLOSE,
})

type NavigationModeAction =
  | ReturnType<typeof openNavigationBar>
  | ReturnType<typeof closeNavigationBar>

type NavigationModeState = {
  open: boolean
}

const initialState: NavigationModeState = {
  open: false,
}

export default (
  state: NavigationModeState = initialState,
  action: NavigationModeAction,
) => {
  switch (action.type) {
    case NAVIGATION_BAR_OPEN:
      return { open: true }
    case NAVIGATION_BAR_CLOSE:
      return { open: false }
    default:
      return state
  }
}
