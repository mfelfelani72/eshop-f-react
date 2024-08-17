import React from 'react'
import useGeneralContext from '../../context/GeneralContext'
const White = () => {
 
  return (
    <div>White {localStorage.getItem("username")}</div>
  )
}

export default White