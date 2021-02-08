import React from 'react'
import { useDispatch } from 'react-redux'
import { pauseProgress, resetGame, startProgress } from '../redux/actions/appActions'

type Props = {
  handleIterate: () => void
}

export default function Controls({ handleIterate }: Props) {
  const dispatch = useDispatch()

  const handleReset = () => {
    dispatch(resetGame())
  }
  const handleStartProgress = () => {
    dispatch(startProgress())
  }

  const handlePauseProgress = () => {
    dispatch(pauseProgress())
  }

  return (
    <header>
      <button onClick={handleIterate}>Iterate</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleStartProgress}>Start progress</button>
      <button onClick={handlePauseProgress}>Pause progress</button>
    </header>
  )
}
