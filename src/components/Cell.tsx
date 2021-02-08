import React from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { addCell } from '../redux/actions/appActions'
import { State } from '../redux/reducers/appReducer'

type Props = {
  row: number
  column: number
}

export default function Cell({ column, row }: Props) {
  const dispatch = useDispatch()
  const { game } = useSelector((state: State) => state)
  const isActive = game[row][column]
  const handleClick = () => {
    dispatch(addCell(row, column))
  }
  return <td className={classNames('cell', { active: isActive })} onClick={handleClick} />
}
