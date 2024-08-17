import React from 'react'
import { Route, Routes } from "react-router-dom";

import Login from "../../pages/auth/Login.js";
import Register from "../../pages/auth/Register.js";
import ForgotPassword from "../../pages/auth/ForgotPassword.js";
import ResetPassword from "../../pages/auth/ResetPassword.js";

import { AuthProvider } from '../../context/AuthContext.js';

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