import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import i18n from "../i18n";

import axios from "../api/axios";

const GeneralContext = createContext({});

export const GeneralProvider = ({ children }) => {


    const navigate = useNavigate();
    const csrf = () => axios.get('/sanctum/csrf-cookie');
    const [user, setUser] = useState(null);

    const [currentLng, setCurrentLng] = useState({ id: 'ltr', name: 'en' });

    const getUser = async () => {

        await csrf();
        const { data } = await axios.get('/api/users');
        setUser(data);

    }

    const logout = () => {
        axios.post("/logout").then(() => {
            setUser(null);
        });
        navigate("/");
    }

    const setLng = (e) => {
        // console.log(e);
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


    useEffect(() => {

        if (!user) {
            getUser();
        }
    }, []);

    return <GeneralContext.Provider value={{

        // user
        user,
        logout,
        getUser,
        // user
        // lang
        setLng,
        currentLng,
        setCurrentLng,
        // lang





    }}>
        {children}
    </GeneralContext.Provider>

}

export default function useGeneralContext() {
    return useContext(GeneralContext);
}