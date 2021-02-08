import {
  actionsKeys,
  AddCellAction,
  InitGameAction,
  IterateGameAction,
  ResetGameAction,
  ToggleProgressAction
} from './appActionsTypes'

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

export function resetGame(): ResetGameAction {
  return {
    type: actionsKeys.RESET_GAME
  }
}

export function toggleProgress(): ToggleProgressAction {
  return {
    type: actionsKeys.TOGGLE_PROGRESS
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
