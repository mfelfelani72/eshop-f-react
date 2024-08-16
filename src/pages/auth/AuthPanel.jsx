import React from 'react'
import { Route, Routes } from "react-router-dom";

import Login from "../../pages/auth/Login.jsx";
import Register from "../../pages/auth/Register.jsx";
import ForgotPassword from "../../pages/auth/ForgotPassword.jsx";
import ResetPassword from "../../pages/auth/ResetPassword.jsx";

import { AuthProvider } from '../../context/AuthContext.jsx';

const AuthPanel = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/password-reset/:token" element={<ResetPassword />} />
            </Routes>
        </AuthProvider>
    )
}

export default AuthPanel