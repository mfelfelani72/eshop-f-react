import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import i18n from "../i18n";

import axios from "../api/axios";

const GeneralContext = createContext({});

export const GeneralProvider = ({ children }) => {

    // General
    const navigate = useNavigate();
    const csrf = () => axios.get('/sanctum/csrf-cookie');
    const [user, setUser] = useState(null);

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
    // General

    useEffect(() => {

        if (!user) {
            getUser();
        }
    }, []);

    return <GeneralContext.Provider value={{

        // General
        user,
        // logout,
        getUser,
        // General




    }}>
        {children}
    </GeneralContext.Provider>

}

export default function useGeneralContext() {
    return useContext(GeneralContext);
}