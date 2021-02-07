import { actionsKeys, AppActions } from '../actions/appActionsTypes'

export type State = {
  game: number
  columns: number
  rows: number
}

export const initialState: State = {
  game: 1,
  columns: 1,
  rows: 1
}

export function appReducer(state: State = initialState, action: AppActions) {
  switch (action.type) {
    case actionsKeys.INIT_GAME:
      const { rows, columns } = action.payload
      return { ...state, columns, rows }
    case actionsKeys.ITERATE_GAME:
      console.log(action)
      return state
    case actionsKeys.ADD_CELL:
      console.log(action.payload)
      return state
    default:
      return state
  }
}
