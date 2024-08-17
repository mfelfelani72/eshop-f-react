import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthContext from '../../context/AuthContext';

// export default function Login() {
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, errors } = useAuthContext();

    const handleLogin = async (event) => {

        event.preventDefault();
        login({ email, password });

    };


    return (
        <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
            <div className='bg-gray-100 flex rounded-2xl
            shadow-lg max-w-3xl p-5 item-center'>
                <div className='md:w-1/2 px-16 mt-6'>
                    <h2 className='font-bold text-2xl text-[#002d74]'> Login </h2>
                    <p className='text-sm mt-4 text-[#002d74]'>
                        If you already a member, easily log in
                    </p>
                    <form onSubmit={handleLogin} className='flex flex-col gap-4'>
                        <input className='p-2 mt-8 rounded-xl border'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"

                        />
                        {errors.email && (
                            <div className="flex">
                                <span className="text-red-400 text-sm m-2 p-2">
                                    {errors.email[0]}
                                </span>
                            </div>
                        )}
                        <div className='relative'>
                            <input
                                className='p-2 rounded-xl border w-full'
                                type="password"
                                value={password}
                                autoComplete="on"
                                onChange={(e) => { setPassword(e.target.value) }}
                                placeholder="Password"

                            />
                            {errors.password && (
                                <div className="flex">
                                    <span className="text-red-400 text-sm m-2 p-2">
                                        {errors.password[0]}
                                    </span>
                                </div>
                            )}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                            </svg>
                        </div>
                        <button
                            type="submit"
                            className='bg-[#002d74] rounded-xl text-white py-2 hover:scale-105 duration-300'>
                            Login
                        </button>
                    </form>

                    <div className='mt-10 grid grid-cols-3 items-center text-gray-400'>
                        <hr className='border-gray-400' />
                        <p className='text-center text-sm'>OR</p>
                        <hr className='border-gray-400' />
                    </div>
                    <button className='bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300'>
                        <svg className='mr-3' version="1.1" xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                            <path fill="none" d="M0 0h48v48H0z"></path>
                        </svg>
                        Login with google
                    </button>

                    <Link
                        to="/forgot-password"
                    >
                        <p className='mt-5 text-xs border-b py-4 border-gray-400 hover:text-primary hover:underline'>Forgot your password?</p>
                    </Link>

                    <div className='mt-3 text-xs flex justify-between items-center'>
                        <p>
                            Don't have an account?
                        </p>
                        <Link to="/register" className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                            Register
                        </Link>

                    </div>
                </div>

                <div className="md:block hidden w-1/2">
                    {/* <img className='rounded-2xl' src="login.jpg" alt='' /> */}
                    <img className='rounded-2xl' src="login1.jpg" alt='' />
                </div>
            </div>
        </section>
    )
}

export default Login