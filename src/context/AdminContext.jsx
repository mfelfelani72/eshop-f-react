import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import i18n from "../i18n";

import axios from "../api/axios";

const AdminContext = createContext({});

export const AdminProvider = ({ children }) => {

    const [users, setUsers] = useState();

    const navigate = useNavigate();
    const csrf = () => axios.get('/sanctum/csrf-cookie');


    const getUsers = async () => {
        await csrf();
        const { data } = await axios.get('/api/users');
        setUsers(data)
        // console.log(users)

    }


    useEffect(() => {

        getUsers();

    }, []);

    return <AdminContext.Provider value={{

        users,

    }}>
        {children}
    </AdminContext.Provider>


}

export default function useAdminContext() {
    return useContext(AdminContext);
}