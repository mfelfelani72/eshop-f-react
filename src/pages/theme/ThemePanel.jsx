import React from 'react'
import { Route, Routes } from "react-router-dom";

import White from "../theme/White.jsx";

const ThemePanel = () => {
    return (
        <Routes>

            <Route path="/" element={<White />} />

        </Routes>
    )
}

export default ThemePanel