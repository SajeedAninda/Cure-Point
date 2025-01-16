import React from 'react'
import loginVector from '../../assets/login-vector.png'
import loginBg from '../../assets/loginBg.png'
import { Link } from 'react-router-dom'

const Login = () => {
  const handleLogin = e => {
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value
    console.log(email, password)
  }

  return (
    <div className='h-screen flex flex-col lg:flex-row justify-between'>
      <div className='w-full lg:w-[50%] h-full bg-[#07332F] flex justify-center items-center p-36 relative'>
        <img className='w-[570px]' src={loginVector} alt='' />
        <img
          className='absolute top-0 right-0 w-[300px]'
          src={loginBg}
          alt=''
        />
      </div>

      <div className='w-full lg:w-[50%] h-full flex justify-center items-center p-36'>
        <form
          onSubmit={handleLogin}
          className='border border-gray-300 rounded-xl p-10 w-full'
        >
          <h1 className='text-[30px] text-[#1e1e1e] font-bold mb-10 text-center'>
            Sign In to Cure Point
          </h1>
          <div>
            <label
              className='text-[18px] text-[#1e1e1e] font-semibold'
              htmlFor='email'
            >
              Email
            </label>
            <br />
            <input
              className='mt-1 w-full py-3 px-4 rounded-lg bg-gray-200 text-[20px] text-[#1e1e1e] placeholder:text-gray-400 placeholder:text-[16px] font-medium'
              placeholder='Enter Your Email Address'
              type='email'
              name='email'
              id='email'
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
              className='mt-1 w-full py-3 px-4 rounded-lg bg-gray-200 text-[20px] text-[#1e1e1e] placeholder:text-gray-400 placeholder:text-[16px] font-medium'
              placeholder='Type Your Password'
              type='password'
              name='password'
              id='password'
            />
          </div>

          <button
            type='submit'
            className='text-white text-[16px] font-bold bg-[#F7A582] px-6 py-3 hover:opacity-70 transition-opacity duration-300 ease-in-out rounded-lg mt-6 w-full'
          >
            Login
          </button>

          <p className='text-[18px] text-[#1e1e1e] font-semibold mt-6 text-center'>
            Dont Have an Account?{' '}
            <Link className='text-[#F7A582] pl-1 underline hover:opacity-60' to={'/register'}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
