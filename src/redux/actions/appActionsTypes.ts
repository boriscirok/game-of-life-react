export enum actionsKeys {
  INIT_GAME = 'game/INIT_GAME',
  ITERATE_GAME = 'game/ITERATE_GAME',
  ADD_CELL = 'game/ADD_CELL'
}

export type InitGameAction = {
  type: actionsKeys.INIT_GAME
  payload: {
    rows: number
    columns: number
  }
}

export type IterateGameAction = {
  type: actionsKeys.ITERATE_GAME
}

export type AddCellAction = {
  type: actionsKeys.ADD_CELL
  payload: {
    row: number
    column: number
  }
}

export type AppActions = InitGameAction | IterateGameAction | AddCellAction