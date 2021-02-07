import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { appReducer } from './redux/reducers/appReducer'
import { initGame } from './redux/actions/appActions'

const ROWS = 50
const COLUMNS = 50

const store = createStore(appReducer)

store.dispatch(initGame(ROWS, COLUMNS))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
