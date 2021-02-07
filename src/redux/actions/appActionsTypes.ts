export enum actionsKeys {
  INIT_GAME = 'game/INIT_GAME',
  RESET_GAME = 'game/RESET_GAME',
  ITERATE_GAME = 'game/ITERATE_GAME',
  START_PROGRESS = 'game/START_PROGRESS',
  PAUSE_PROGRESS = 'game/PAUSE_PROGRESS',
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

export type StartProgressAction = {
  type: actionsKeys.START_PROGRESS
}

export type PauseProgressAction = {
  type: actionsKeys.PAUSE_PROGRESS
}

export type AddCellAction = {
  type: actionsKeys.ADD_CELL
  payload: {
    row: number
    column: number
  }
}

export type AppActions =
  | InitGameAction
  | IterateGameAction
  | AddCellAction
  | ResetGameAction
  | StartProgressAction
  | PauseProgressAction
