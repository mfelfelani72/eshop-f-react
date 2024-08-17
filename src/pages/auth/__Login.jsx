import React from 'react'
import useGeneralContext from '../../context/GeneralContext'
const Login = () => {
    const { user } = useGeneralContext();
    return (
        <div>Whsdfdsfdsite {user?.name}</div>
    )
}

export default Login