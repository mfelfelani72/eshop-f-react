import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {


    const [resultLogin, setResultLogin] = useState();
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();
    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const getUser = async (token ) => {
        await csrf();
        try {
            await  axios.get('/api/users', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(function (response) {
                console.log(response.data);});
        }
        catch (error){
            // console.log(error.response.status);
            console.log(error);
        }
    

       
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
            // await getUser();
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
            // setUser(null);
        });
    }

    useEffect(() => {

        
        // Login
        if (resultLogin && resultLogin.data.success) {
            // console.log(resultLogin);
            // window.sessionStorage.setItem('username', resultLogin.data.result.user_name);2
            window.sessionStorage.setItem('token', resultLogin.data.result.token);
            getUser(window.sessionStorage.getItem("token"));
            // navigate("/");
        }
        else if (resultLogin && !resultLogin.data.success) {
            console.log(resultLogin.data.errorCode);
            setErrors(resultLogin.data);
        }
        // Login

    }, [resultLogin, errors]);

    return <AuthContext.Provider value={{

        errors,
        login,
        register,
        logout,
        csrf,

    }}>
        {children}
    </AuthContext.Provider>


}

export default function useAuthContext() {
    return useContext(AuthContext);
}