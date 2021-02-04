import React from 'react'
import './App.css'
import { range } from 'lodash'

const ROWS = 50
const COLUMNS = 50

function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          {range(ROWS).map(row => {
            return (
              <tr key={row}>
                {range(COLUMNS).map(column => {
                  return <td key={column}>{`${row}-${column}`}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App
