import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [userName, setUserName] = useState("");
    const [resultLogin, setResultLogin] = useState();
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const getUser = async () => {

        const { data } = await axios.get('/api/users');
        setUser(data);
    }
    const login = async ({ ...data }) => {

        await csrf();
        setErrors([]);

        setResultLogin(await axios.post('/api/login', data));

    }
    const register = async ({ ...data }) => {

        await csrf();
        setErrors([]);

        try {
            await axios.post('/register', data);
            await getUser();
            navigate("/");
        }

        catch (e) {
            console.log(e);
            // if (e.response.status === 422) {
            //     setErrors(e.response.data.errors);
            // }
        }
    }

    const logout = () => {
        axios.post("/logout").then(() => {
            setUser(null);
        });
    }

    useEffect(() => {

        // Login
        if (resultLogin && resultLogin.data.success) {
            // localStorage.setItem("username", resultLogin.data.information.name);
            window.sessionStorage.setItem('username', resultLogin.data.information.name)
            navigate("/");
        }
        else if (resultLogin && !resultLogin.data.success) {
            console.log(resultLogin.data.errorCode);
            setErrors(resultLogin.data);
        }
        // Login

    }, [resultLogin, errors]);

    return <AuthContext.Provider value={{
        user,
        errors,
        getUser,
        login,
        register,
        logout,
        csrf,
        userName,

    }}>
        {children}
    </AuthContext.Provider>


}

export default function useAuthContext() {
    return useContext(AuthContext);
}