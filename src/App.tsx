import React from 'react'
import './App.css'
import { range } from 'lodash'
import Cell from './Cell'
import { useDispatch } from 'react-redux'
import { iterateGame } from './redux/actions/appActions'

const ROWS = 50
const COLUMNS = 50

function App() {
  const dispatch = useDispatch()
  const handleIterate = () => {
    dispatch(iterateGame())
  }
  return (
    <div className="App">
      <header>
        <button onClick={handleIterate}>Iterate</button>
      </header>

      <table className="gameBoard" cellSpacing={0} cellPadding={0}>
        <tbody>
          {range(ROWS).map(row => {
            return (
              <tr key={row}>
                {range(COLUMNS).map(column => (
                  <Cell key={column} />
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
