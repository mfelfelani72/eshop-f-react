import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [userName, setUserName] = useState("");
    const [result, setResult] = useState();
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

        try {

            setResult(await axios.post('/api/login', data), () => localStorage.setItem("username", result.data.information.name));

            // setResult(await axios.post('/api/login', data));
            // console.log(await axios.post('/api/login', data));
            // localStorage.setItem("username", result.data.information.name);
            // await getUser();
            // console.log(temp);
            // navigate("/");


        }

        catch (e) {
            console.log(e);
            // if (e.response.status === 422) {
            //     setErrors(e.response.data.errors);
            // }
        }
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
        if (result)
            localStorage.setItem("username", result.data.information.name);
    }, [result]);

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