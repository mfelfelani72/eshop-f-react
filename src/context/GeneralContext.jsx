import React, { createContext, useContext, useState } from "react";
import i18n from "../i18n";


const GeneralContext = createContext({});

export const GeneralProvider = ({ children }) => {
    const [currentLng, setCurrentLng] = useState({ id: 'ltr', name: 'en' });

    const setLng = (e) => {
      
        i18n.changeLanguage(e.name);
        setCurrentLng(e);
        // console.log(currentLng);
        localStorage.setItem("currentLngId", [e.id]);
        localStorage.setItem("currentLngName", [e.name]);
        const rootHtml = document.getElementById("root-html");
        if (rootHtml && e.id == 'rtl') {
            // console.log("rtl");
            rootHtml.setAttribute("dir", 'rtl');
        }
        else {
            // console.log("ltr");
            rootHtml.setAttribute("dir", 'ltr');
        }

    };

    

    return <GeneralContext.Provider value={{

        setLng,
        currentLng,
        setCurrentLng,

    }}>
        {children}
    </GeneralContext.Provider>


}

export default function useGeneralContext() {
    return useContext(GeneralContext);
}