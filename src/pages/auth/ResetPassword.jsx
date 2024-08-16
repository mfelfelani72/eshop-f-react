import { useState, useEffect } from 'react';
import useAuthContext from '../../context/AuthContext';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import axios from "../../api/axios";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [searchParams] = useSearchParams();

  const { csrf } = useAuthContext();

  let { token } = useParams();

  useEffect(() => {
    setEmail(searchParams.get("email"));

  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();
    await csrf();
    setErrors([]);
    setStatus(null);

    try {
      const response = await axios.post("/reset-password", {
        email,
        token,
        password,
        password_confirmation,
      });
      setStatus(response.data.status);
    }
    catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  return (
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
      <div className='bg-gray-100 flex rounded-2xl
        shadow-lg max-w-3xl p-5 item-center'>
        <div className='md:w-1/2 px-16 mt-32'>
          <h2 className='font-bold text-2xl text-[#002d74]'>  Reset password </h2>
          <p className='text-sm mt-4 text-[#002d74]'>
            Add your new password
          </p>
          {status && <div className='bg-green-700 mt-3  p-2 rounded text-white'>
            {status}

            <Link to="/login" className="ml-2 underline">
              Login
            </Link>

          </div>}
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input className='p-2 mt-8 rounded-xl border'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"

            />
            {errors.password && (
              <div className="flex">
                <span className="text-red-400 text-sm m-2 p-2">
                  {errors.password[0]}
                </span>
              </div>
            )}
            <input className='p-2 rounded-xl border'
              type="password"
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              placeholder="Password Confirm"

            />
            {errors.password_confirmation && (
              <div className="flex">
                <span className="text-red-400 text-sm m-2 p-2">
                  {errors.password_confirmation[0]}
                </span>
              </div>
            )}
            <button
              type="submit"
              className='bg-[#002d74] rounded-xl text-white py-2 hover:scale-105 duration-300'>
              Submit
            </button>
          </form>

        </div>

        <div className="md:block hidden w-1/2">
          {/* <img className='rounded-2xl' src="login.jpg" alt='' /> */}
          <img className='rounded-2xl' src="../login1.jpg" alt='' />
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword