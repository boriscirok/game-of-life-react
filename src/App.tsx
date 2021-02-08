import React, { useCallback, useEffect, useRef } from 'react'
import { range } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import Cell from './components/Cell'
import { iterateGame } from './redux/actions/appActions'
import { State } from './redux/reducers/appReducer'
import { GameStateEnum } from './logic/gameLogic'
import Controls from './components/Controls'

function App() {
  const dispatch = useDispatch()
  const { rows, columns, gameState } = useSelector((state: State) => state)
  const interval = useRef(0)

  const handleIterate = useCallback(() => {
    dispatch(iterateGame())
  }, [dispatch])

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
      <Controls handleIterate={handleIterate} />

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
