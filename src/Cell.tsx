import React, { useState } from 'react'
import classNames from 'classnames'

type Props = {
  active?: boolean
}

export default function Cell({ active }: Props) {
  const [isActive, setActive] = useState(!!active)
  const handleClick = () => {
    setActive(active => !active)
  }
  return <td className={classNames('cell', { active: isActive })} onClick={handleClick} />
}
