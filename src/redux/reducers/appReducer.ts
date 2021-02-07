export type State = {
  game: number
}

export const initialState: State = {
  game: 1
}

export function appReducer(state: State = initialState) {
  return state
}
