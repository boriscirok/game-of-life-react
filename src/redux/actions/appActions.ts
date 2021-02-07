import { actionsKeys, IterateGame } from './appActionsTypes'

export function iterateGame(): IterateGame {
  return {
    type: actionsKeys.ITERATE_GAME
  }
}
