import React  from 'react'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { addCell } from './redux/actions/appActions'

type Props = {
  row: number
  column: number
}

export default function Cell({ column, row }: Props) {
  const dispatch = useDispatch()
  const isActive = false
  const handleClick = () => {
    dispatch(addCell(row, column))
  }
  return <td className={classNames('cell', { active: isActive })} onClick={handleClick} />
}
