import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { GeneralProvider } from './context/GeneralContext.js';

import App from './App';
import './index.css';

import './i18n/index.js';

// import ReactDOM from 'react-dom/client';



import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <GeneralProvider>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </GeneralProvider>
  </BrowserRouter>

);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <GeneralProvider>
      
//       {/* <React.StrictMode> */}
//         <App />
//       {/* </React.StrictMode> */}

//     </GeneralProvider>
//   </BrowserRouter>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
