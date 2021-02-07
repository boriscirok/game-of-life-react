import { range } from 'lodash'
import { actionsKeys, AppActions } from '../actions/appActionsTypes'

type GameRow = boolean[]

export type State = {
  game: GameRow[]
  columns: number
  rows: number
}

export const initialState: State = {
  game: [],
  columns: 1,
  rows: 1
}

export function appReducer(state: State = initialState, action: AppActions) {
  switch (action.type) {
    case actionsKeys.INIT_GAME:
      const { rows, columns } = action.payload
      return {
        game: range(rows).map(() => {
          return range(columns).map(() => false)
        }),
        columns,
        rows
      }
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
