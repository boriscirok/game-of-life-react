import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetGame, toggleProgress } from '../redux/actions/appActions'
import { State } from '../redux/reducers/appReducer'
import { GameStateEnum } from '../logic/gameLogic'

type Props = {
  handleIterate: () => void
}

export default function Controls({ handleIterate }: Props) {
  const dispatch = useDispatch()
  const { gameState } = useSelector((state: State) => state)

  const handleReset = () => {
    dispatch(resetGame())
  }
  const handleToggleProgress = () => {
    dispatch(toggleProgress())
  }

  return (
    <header>
      <button onClick={handleIterate}>Iterate</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleToggleProgress}>{gameState === GameStateEnum.IN_PROGRESS ? 'Pause' : 'Play'}</button>
    </header>
  )
}
