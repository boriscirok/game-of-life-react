import React, { useCallback, useEffect, useRef } from 'react'
import './App.css'
import { range } from 'lodash'
import Cell from './Cell'
import { useDispatch, useSelector } from 'react-redux'
import { iterateGame, pauseProgress, resetGame, startProgress } from './redux/actions/appActions'
import { State } from './redux/reducers/appReducer'
import { GameStateEnum } from './logic/gameLogic'

function App() {
  const dispatch = useDispatch()
  const { rows, columns, gameState } = useSelector((state: State) => state)
  const interval = useRef(0)

  const handleIterate = useCallback(() => {
    dispatch(iterateGame())
  }, [dispatch])

  const handleReset = () => {
    dispatch(resetGame())
  }
  const handleStartProgress = () => {
    dispatch(startProgress())
  }

  const handlePauseProgress = () => {
    dispatch(pauseProgress())
  }

  useEffect(() => {
    if (gameState === GameStateEnum.IN_PROGRESS) {
      interval.current = window.setInterval(() => {
        handleIterate()
      }, 100)
    } else {
      window.clearInterval(interval.current)
    }

    return () => {
      window.clearInterval(interval.current)
    }
  }, [gameState, handleIterate])

  return (
    <div className="App">
      <header>
        <button onClick={handleIterate}>Iterate</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleStartProgress}>Start progress</button>
        <button onClick={handlePauseProgress}>Pause progress</button>
      </header>

      <table className="gameBoard" cellSpacing={0} cellPadding={0}>
        <tbody>
          {range(rows).map(row => {
            return (
              <tr key={row}>
                {range(columns).map(column => (
                  <Cell key={column} column={column} row={row} />
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App
