import React, { useContext } from 'react'
import loginVector from '../../assets/login-vector.png'
import loginBg from '../../assets/loginBg.png'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AuthContext } from '../AuthProvider/AuthProvider'

const Register = () => {
  let { registerUser, loading, signOut } = useContext(AuthContext)
  const handleRegister = e => {
    e.preventDefault()

    const name = e.target.name.value
    const userName = e.target.userName.value
    const email = e.target.email.value
    const password = e.target.password.value
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/

    if (!passwordRegex.test(password)) {
      Swal.fire({
        title: 'Invalid Password',
        text: 'Password must contain at least one uppercase letter and one number.',
        icon: 'error'
      })
      return
    }

    if (name && userName && email && password) {
      registerUser(email, password).then(userCredential => {
        const user = userCredential.user
        console.log(user)
      })
    }
  }

  return (
    <div className='h-screen flex flex-col lg:flex-row justify-between'>
      <div className='w-full lg:w-[50%] h-full bg-[#07332F] flex justify-center p-36 relative'>
        <img className='w-[570px]' src={loginVector} alt='' />
        <img
          className='absolute top-0 right-0 w-[300px]'
          src={loginBg}
          alt=''
        />
      </div>

      <div className='w-full lg:w-[50%] h-full flex justify-center items-center px-20 py-6'>
        <form
          onSubmit={handleRegister}
          className='border border-gray-300 rounded-xl px-10 py-6 w-full'
        >
          <h1 className='text-[24px] text-[#1e1e1e] font-bold mb-6 text-center'>
            Sign Up to Cure Point
          </h1>
          <div className=''>
            <label
              className='text-[18px] text-[#1e1e1e] font-semibold'
              htmlFor='name'
            >
              Name
            </label>
            <br />
            <input
              className='mt-1 w-full py-2 px-4 rounded-lg bg-gray-200 text-[20px] text-[#1e1e1e] placeholder:text-gray-400 placeholder:text-[16px] font-medium'
              placeholder='Type Your Name'
              type='text'
              name='name'
              id='name'
              required
            />
          </div>

          <div className='mt-4'>
            <label
              className='text-[18px] text-[#1e1e1e] font-semibold'
              htmlFor='userName'
            >
              Username
            </label>
            <br />
            <input
              className='mt-1 w-full py-2 px-4 rounded-lg bg-gray-200 text-[20px] text-[#1e1e1e] placeholder:text-gray-400 placeholder:text-[16px] font-medium'
              placeholder='Type a Username'
              type='text'
              name='userName'
              id='userName'
              required
            />
          </div>

          <div className='mt-4'>
            <label
              className='text-[18px] text-[#1e1e1e] font-semibold'
              htmlFor='email'
            >
              Email
            </label>
            <br />
            <input
              className='mt-1 w-full py-2 px-4 rounded-lg bg-gray-200 text-[20px] text-[#1e1e1e] placeholder:text-gray-400 placeholder:text-[16px] font-medium'
              placeholder='Enter Your Email Address'
              type='email'
              name='email'
              id='email'
              required
            />
          </div>

          <div className='mt-4'>
            <label
              className='text-[18px] text-[#1e1e1e] font-semibold'
              htmlFor='password'
            >
              Password
            </label>
            <br />
            <input
              className='mt-1 w-full py-2 px-4 rounded-lg bg-gray-200 text-[20px] text-[#1e1e1e] placeholder:text-gray-400 placeholder:text-[16px] font-medium'
              placeholder='Type Your Password'
              type='password'
              name='password'
              id='password'
              required
            />
          </div>

          <button
            type='submit'
            className='text-white text-[16px] font-bold bg-[#F7A582] px-6 py-2 hover:opacity-70 transition-opacity duration-300 ease-in-out rounded-lg mt-6 w-full'
          >
            Register
          </button>

          <p className='text-[18px] text-[#1e1e1e] font-semibold mt-6 text-center'>
            Already Have an Account?{' '}
            <Link
              className='text-[#F7A582] pl-1 underline hover:opacity-60'
              to={'/login'}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
