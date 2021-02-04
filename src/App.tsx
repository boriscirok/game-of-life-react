import React from 'react'
import './App.css'
import { range } from 'lodash'
import Cell from './Cell'

const ROWS = 50
const COLUMNS = 50

function App() {
  return (
    <div className="App">
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
