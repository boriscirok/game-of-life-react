import React from 'react'
import './App.css'
import { range } from 'lodash'
import Cell from './Cell'
import { useDispatch, useSelector } from 'react-redux'
import { iterateGame, resetGame } from './redux/actions/appActions'
import { State } from './redux/reducers/appReducer'

function App() {
  const dispatch = useDispatch()
  const { rows, columns, game } = useSelector((state: State) => state)

  console.log(game, 'game')

  const handleIterate = () => {
    dispatch(iterateGame())
  }
  const handleReset = () => {
    dispatch(resetGame())
  }
  return (
    <div className="App">
      <header>
        <button onClick={handleIterate}>Iterate</button>
        <button onClick={handleReset}>Reset</button>
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
