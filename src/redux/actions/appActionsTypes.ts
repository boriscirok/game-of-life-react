export enum actionsKeys {
  INIT_GAME = 'game/INIT_GAME',
  RESET_GAME = 'game/RESET_GAME',
  ITERATE_GAME = 'game/ITERATE_GAME',
  TOGGLE_PROGRESS = 'game/TOGGLE_PROGRESS',
  ADD_CELL = 'game/ADD_CELL'
}

export type InitGameAction = {
  type: actionsKeys.INIT_GAME
  payload: {
    rows: number
    columns: number
  }
}

export type ResetGameAction = {
  type: actionsKeys.RESET_GAME
}

export type IterateGameAction = {
  type: actionsKeys.ITERATE_GAME
}

export type ToggleProgressAction = {
  type: actionsKeys.TOGGLE_PROGRESS
}

export type AddCellAction = {
  type: actionsKeys.ADD_CELL
  payload: {
    row: number
    column: number
  }
}

export type AppActions = InitGameAction | IterateGameAction | AddCellAction | ResetGameAction | ToggleProgressAction
