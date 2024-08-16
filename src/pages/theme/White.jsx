import React from 'react'
import useGeneralContext from '../../context/GeneralContext'
const White = () => {
  const { user } = useGeneralContext();
  return (
    <div>White {user?.name}</div>
  )
}

export default White