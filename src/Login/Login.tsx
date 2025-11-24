import { Link, useNavigate } from 'react-router-dom'
import LeftArt from '../assets/Login/model.svg'
import GoogleIcon from '../assets/icons/Google.svg'

interface LoginProps{
    onNavigate?: (view: 'landing' | 'signup') => void
}

const Login = ({ onNavigate }: LoginProps) => {
  const navigate = useNavigate()

  return (
    <main className='min-h-screen bg-gray-50'>
      <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen'>
        {/* Left Section - Blue Background with 3D Character */}
        <section className='relative hidden lg:flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 overflow-hidden'>
          {/* Wavy background pattern */}
          <div className='absolute inset-0'>
            <svg className='w-full h-full' viewBox='0 0 1200 800' preserveAspectRatio='none' opacity='0.3'>
              <path d='M0,400 Q300,350 600,400 T1200,400 L1200,800 L0,800 Z' fill='#60A5FA' />
              <path d='M0,500 Q300,450 600,500 T1200,500 L1200,800 L0,800 Z' fill='#3B82F6' />
              <path d='M0,600 Q300,550 600,600 T1200,600 L1200,800 L0,800 Z' fill='#2563EB' />
            </svg>
            <svg className='w-full h-full' viewBox='0 0 1200 800' preserveAspectRatio='none' opacity='0.2'>
              <path d='M0,300 Q400,250 800,300 T1200,300 L1200,800 L0,800 Z' fill='#93C5FD' />
              <path d='M0,450 Q400,400 800,450 T1200,450 L1200,800 L0,800 Z' fill='#60A5FA' />
            </svg>
          </div>
          {/* 3D Character Model */}
          <div className='relative z-10 flex items-center justify-center w-full h-full px-8'>
            <img 
              src={LeftArt} 
              alt="3D Character" 
              className='h-[85%] max-h-[700px] w-auto object-contain'
            />
          </div>
        </section>

        {/* Right Section - Login Form */}
        <section className='relative flex flex-col bg-gray-50'>
          <div className='flex-1 flex items-center justify-center px-6 py-12'>
            <div className='w-full max-w-md'>
              {/* Welcome Title */}
              <h1 className='text-4xl font-bold text-blue-600 mb-2'>
                Welcome Back, <span className='text-5xl'>Whirler!</span>
              </h1>
              <p className='text-sm text-gray-900 mb-8'>
                Pick up where you left off and jump right back into the conversation.
              </p>

              {/* Login Form */}
              <form className='space-y-5'>
                {/* Email Field */}
                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                    Email
                  </label>
                  <input
                    id='email'
                    type='email'
                    className='w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    placeholder='Email'
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>
                    Password
                  </label>
                  <input
                    id='password'
                    type='password'
                    className='w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    placeholder='Password'
                  />
                </div>

                {/* Forgot Password Link */}
                <div className='flex justify-end'>
                  <Link to='#' className='text-sm text-blue-600 hover:underline'>
                    Forgot Password?
                  </Link>
                </div>

                {/* Login Button */}
                <button 
                  type='button' 
                  className='w-full bg-yellow-300 hover:bg-yellow-400 text-gray-900 rounded-md py-2.5 text-sm font-medium transition-colors'
                >
                  Login
                </button>

                {/* Google Sign In Button */}
                <button
                  type='button'
                  className='w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md py-2.5 text-sm font-medium flex items-center justify-center space-x-2 transition-colors'
                >
                  <img src={GoogleIcon} alt="Google" className='h-5 w-5' />
                  <span>Continue with G</span>
                </button>

                {/* Sign Up Link */}
                <p className='text-sm text-center text-gray-600 mt-6'>
                  Dont have an account?{' '}
                  <button
                    type='button'
                    className='text-blue-600 hover:underline font-medium'
                    onClick={() => (onNavigate ? onNavigate('signup') : navigate('/signup'))}
                  >
                    Sign up
                  </button>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Login