import React, { createContext, useContext, useState } from "react";
import i18n from "../i18n";


const GeneralContext = createContext({});

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

export const GeneralProvider = ({ children }) => {
    const [currentLng, setCurrentLng] = useState({ id: 'ltr', name: 'en' });


    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState("#03C9D7");
    const [currentMode, setCurrentMode] = useState("Light");
    const [themeSettings, setThemeSettings] = useState(false);
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem("themeMode", e.target.value);
    };

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem("colorMode", color);
    };

    const handleClick = (clicked) =>
        setIsClicked({ ...initialState, [clicked]: true });

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

        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,

    }}>
        {children}
    </GeneralContext.Provider>


}

export default function useGeneralContext() {
    return useContext(GeneralContext);
}