import { actionsKeys, AppActions } from '../actions/appActions'

export type State = {
  game: number
}

export const initialState: State = {
  game: 1
}

export function appReducer(state: State = initialState, action: AppActions) {
  switch (action.type) {
    case actionsKeys.ITERATE_GAME:
      return state
    default:
      return state
  }
}
