import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { GeneralProvider } from './context/GeneralContext.jsx';

// import { ThemeProvider } from "@material-tailwind/react";

import App from './App';
import './index.css';
import './i18n/index.js';

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
  // <BrowserRouter basename="/restaurant">
  // "homepage": "https://mfcloner.am/restaurant/",
  // <BrowserRouter basename="/">
  <BrowserRouter>
    <GeneralProvider>
        <App />
    </GeneralProvider>
  </BrowserRouter>

);