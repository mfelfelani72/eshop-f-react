// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { GeneralProvider } from './context/GeneralContext.jsx';

import App from './App.jsx'
import './index.css'
import './i18n/index.js';

const root = createRoot(document.getElementById('root'));

root.render(
  // <BrowserRouter basename="/restaurant">
  // "homepage": "https://mfcloner.am/restaurant/",
  <BrowserRouter basename="/">
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </BrowserRouter>

);