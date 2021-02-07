import {
  actionsKeys,
  AddCellAction,
  InitGameAction,
  IterateGameAction,
  PauseProgressAction,
  ResetGameAction,
  StartProgressAction
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

export function startProgress(): StartProgressAction {
  return {
    type: actionsKeys.START_PROGRESS
  }
}

export function pauseProgress(): PauseProgressAction {
  return {
    type: actionsKeys.PAUSE_PROGRESS
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
