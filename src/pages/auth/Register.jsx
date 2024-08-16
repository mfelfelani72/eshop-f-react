import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthContext from '../../context/AuthContext';

const Login = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const { register, errors } = useAuthContext();

  const handleRegister = async (event) => {

    event.preventDefault();
    register({ name, email, password, password_confirmation });

  }

  return (
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
      <div className='bg-gray-100 flex rounded-2xl
            shadow-lg max-w-3xl p-5 item-center'>
        <div className='md:w-1/2 px-16 mt-14'>
          <h2 className='font-bold text-2xl text-[#002d74]'> Register </h2>
          <p className='text-sm mt-4 text-[#002d74]'>
            If you isn't a member, easily register
          </p>
          <form onSubmit={handleRegister} className='flex flex-col gap-4'>
            <input className='p-2 mt-8 rounded-xl border'
              type='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"

            />
            {errors.name && (
              <div className="flex">
                <span className="text-red-400 text-sm m-2 p-2">
                  {errors.name[0]}
                </span>
              </div>
            )}
            <input className='p-2 rounded-xl border'
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
            <div className='relative'>
              <input
                className='p-2 rounded-xl border w-full'
                type="password"
                value={password_confirmation}
                onChange={(e) => { setPasswordConfirmation(e.target.value) }}
                placeholder="Password Confirm"

              />
              {errors.password_confirmation && (
                <div className="flex">
                  <span className="text-red-400 text-sm m-2 p-2">
                    {errors.password_confirmation[0]}
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
              Register
            </button>
          </form>

          <div className='mt-5 text-xs flex justify-between items-center'>
            <p>
            Already member?
            </p>
            <Link to="/login" className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
              Log in
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