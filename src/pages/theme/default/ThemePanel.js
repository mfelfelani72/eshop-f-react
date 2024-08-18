import React from 'react'
import { Route, Routes } from "react-router-dom";
import LandingPage from './LandingPage.js';



const ThemePanel = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />

        </Routes>
    )
}

export default ThemePanel