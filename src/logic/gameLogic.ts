export type GameRow = boolean[]

export type Game = GameRow[]

export enum GameStateEnum {
  PAUSED = 'PAUSED',
  IN_PROGRESS = 'IN_PROGRESS'
}

/**
 *
 * 123 game[row-1][column-1] | game[row-1][column] | game[row-1][column+1]
 * 4X5 game[row][column-1] | X | game[row][column+1]
 * 678 game[row+1][column-1] | game[row+1][column] | game[row+1][column+1]
 */
export function getAliveNeighboursCount(row: number, column: number, game: Game) {
  let aliveNeighboursCount = 0
  const isFirstColumn = column === 0
  const isLastColumn = column === game[row].length - 1
  const isFirstRow = row === 0
  const isLastRow = row === game.length - 1

  if (!isFirstRow) {
    // 1
    if (!isFirstColumn && game[row - 1][column - 1]) {
      aliveNeighboursCount++
    }
    // 2
    if (game[row - 1][column]) {
      aliveNeighboursCount++
    }
    // 3
    if (!isLastColumn && game[row - 1][column + 1]) {
      aliveNeighboursCount++
    }
  }
  // 4
  if (!isFirstColumn && game[row][column - 1]) {
    aliveNeighboursCount++
  }
  // 5
  if (!isLastColumn && game[row][column + 1]) {
    aliveNeighboursCount++
  }

  if (!isLastRow) {
    // 6
    if (!isFirstColumn && game[row + 1][column - 1]) {
      aliveNeighboursCount++
    }
    // 7
    if (game[row + 1][column]) {
      aliveNeighboursCount++
    }

    // 8
    if (!isLastColumn && game[row + 1][column + 1]) {
      aliveNeighboursCount++
    }
  }

  return aliveNeighboursCount
}

export function isCellActive(row: number, column: number, game: Game) {
  const neighboursCount = getAliveNeighboursCount(row, column, game)
  const isNowAlive = game[row][column]
  if (isNowAlive && neighboursCount < 2) {
    return false
  } else if (isNowAlive && (neighboursCount === 2 || neighboursCount === 3)) {
    return true
  } else if (isNowAlive && neighboursCount >= 3) {
    return false
  } else if (!isNowAlive && neighboursCount === 3) {
    return true
  }
  return false
}
