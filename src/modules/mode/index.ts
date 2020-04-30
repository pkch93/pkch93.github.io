const DARK_MODE = 'mode/DARK_MODE' as const

export const changeDarkMode = (dark: boolean) => ({
  type: DARK_MODE,
  payload: dark,
})

type DarkModeAction = ReturnType<typeof changeDarkMode>

type DarkModeState = {
  dark: boolean
}

const initialState: DarkModeState = {
  dark: false,
}

export default (
  state: DarkModeState = initialState,
  action: DarkModeAction,
) => {
  switch (action.type) {
    case DARK_MODE:
      return { dark: action.payload }
    default:
      return state
  }
}
