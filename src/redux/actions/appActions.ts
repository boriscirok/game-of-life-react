import { actionsKeys, AddCellAction, InitGameAction, IterateGameAction } from './appActionsTypes'

export function initGame(rows: number, columns: number): InitGameAction {
  return {
    type: actionsKeys.INIT_GAME,
    payload: {
      rows,
      columns
    }
  }
}

export function iterateGame(): IterateGameAction {
  return {
    type: actionsKeys.ITERATE_GAME
  }
}

export function addCell(row: number, column: number): AddCellAction {
  return {
    type: actionsKeys.ADD_CELL,
    payload: {
      row,
      column
    }
  }
}
