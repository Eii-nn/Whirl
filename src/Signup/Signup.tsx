import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CharacterModel from '../assets/Login/model.svg'
import CharacterModel1 from '../assets/Login/model1.svg'
import CharacterModel2 from '../assets/Login/model2.svg'
import Background from '../assets/Login/Background.svg'

interface SignupProps {
  onNavigate?: (view: 'landing' | 'login') => void
}

const Signup = ({ onNavigate }: SignupProps) => {
  const navigate = useNavigate()

  // Step management
  const [currentStep, setCurrentStep] = useState(1)

  // Step 1 form fields
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // Step 2 & 3 form fields
  const [bio, setBio] = useState('')
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')

  const bioMaxLength = 100
  const remainingChars = bioMaxLength - bio.length

  // Character model based on current step
  const getCharacterModel = () => {
    switch (currentStep) {
      case 1:
        return CharacterModel
      case 2:
        return CharacterModel1
      case 3:
        return CharacterModel2
      default:
        return CharacterModel
    }
  }

  // Progress indicator component
  const ProgressIndicator = () => {
    const getStepStyle = (step: number) => {
      if (step <= currentStep) {
        return 'bg-blue-600 text-white'
      }
      return 'border-2 border-blue-200 text-blue-200'
    }

    const getLineStyle = (step: number) => {
      if (step < currentStep) {
        return 'bg-blue-600'
      }
      return 'bg-blue-200'
    }

    return (
      <div className="flex items-center gap-3 mb-2">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${getStepStyle(1)} text-sm font-semibold`}>
          1
        </div>
        <div className={`flex-1 h-0.5 ${getLineStyle(1)}`} />
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${getStepStyle(2)} text-sm font-semibold`}>
          2
        </div>
        <div className={`flex-1 h-0.5 ${getLineStyle(2)}`} />
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${getStepStyle(3)} text-sm font-semibold`}>
          3
        </div>
      </div>
    )
  }

  // Navigation handlers
  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep === 1) {
      onNavigate ? onNavigate('landing') : navigate('/')
    } else {
      setCurrentStep(currentStep - 1)
    }
  }

  // Render Step 1: Create Your Account
  const renderStep1 = () => (
    <>
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Create Your Account
      </h1>
      <ProgressIndicator />
      <p className="text-sm text-gray-500 mb-8">
        Let's get you ready to whirl!
      </p>
      <form className="space-y-5">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1.5">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1.5">
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="button"
          onClick={handleNext}
          className="w-full bg-yellow-300 hover:bg-yellow-400 text-white rounded-md py-2.5 text-sm font-medium transition-colors"
        >
          Next
        </button>
      </form>
    </>
  )

  // Render Step 2: Tell Us a Bit About You
  const renderStep2 = () => (
    <>
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Tell Us a Bit About You
      </h1>
      <ProgressIndicator />
      <p className="text-sm text-gray-500 mb-8">
        Who's behind the chat?
      </p>
      <form className="space-y-6">
        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1.5">
            Bio
          </label>
          <div className="relative">
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => {
                if (e.target.value.length <= bioMaxLength) {
                  setBio(e.target.value)
                }
              }}
              placeholder="Bio."
              rows={4}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            />
            <div className="absolute bottom-2 right-2 text-xs text-gray-400">
              {remainingChars}/100 characters remaining
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Birthdate
          </label>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Year"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                placeholder="Month"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                placeholder="Day"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={handleNext}
          className="w-full bg-yellow-300 hover:bg-yellow-400 text-white rounded-md py-2.5 text-sm font-medium transition-colors"
        >
          Next
        </button>
      </form>
    </>
  )

  // Render Step 3: Final Touch
  const renderStep3 = () => (
    <>
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Final Touch
      </h1>
      <div className="mb-2">
        <ProgressIndicator />
        <p className="text-sm text-gray-500 mt-2">
          Almost done!
        </p>
      </div>
      <form className="space-y-6 mt-6">
        <div>
          <label htmlFor="bio-step3" className="block text-sm font-medium text-gray-700 mb-1.5">
            Bio
          </label>
          <div className="relative">
            <textarea
              id="bio-step3"
              value={bio}
              onChange={(e) => {
                if (e.target.value.length <= bioMaxLength) {
                  setBio(e.target.value)
                }
              }}
              placeholder="Bio."
              rows={4}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            />
            <div className="absolute bottom-2 right-2 text-xs text-gray-400">
              {remainingChars}/100 characters remaining
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Birthdate
          </label>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Year"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                placeholder="Month"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                placeholder="Day"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="w-full bg-yellow-300 hover:bg-yellow-400 text-white rounded-md py-2.5 text-sm font-medium transition-colors"
        >
          Done
        </button>
      </form>
    </>
  )

  // Render current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1()
      case 2:
        return renderStep2()
      case 3:
        return renderStep3()
      default:
        return renderStep1()
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Section */}
        <section className="relative hidden lg:flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={Background}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 z-[1]">
            <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none" opacity="0.3">
              <path d="M0,400 Q300,350 600,400 T1200,400 L1200,800 L0,800 Z" fill="#60A5FA" />
              <path d="M0,500 Q300,450 600,500 T1200,500 L1200,800 L0,800 Z" fill="#3B82F6" />
              <path d="M0,600 Q300,550 600,600 T1200,600 L1200,800 L0,800 Z" fill="#2563EB" />
            </svg>
            <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none" opacity="0.2">
              <path d="M0,300 Q400,250 800,300 T1200,300 L1200,800 L0,800 Z" fill="#93C5FD" />
              <path d="M0,450 Q400,400 800,450 T1200,450 L1200,800 L0,800 Z" fill="#60A5FA" />
            </svg>
          </div>
          <div className="relative z-10 flex items-center justify-center w-full h-full px-8">
            <img
              src={getCharacterModel()}
              alt="3D Character"
              className="h-[85%] max-h-[700px] w-auto object-contain"
            />
          </div>
        </section>

        {/* Right Section */}
        <section className="relative flex flex-col bg-white">
          <div className="flex-1 flex items-center justify-center px-8 py-12">
            <div className="w-full max-w-md">
              {renderStepContent()}
            </div>
          </div>
          <div className="p-6 pt-0 mt-auto flex justify-end">
            <button
              className="text-xs text-gray-500 hover:text-gray-700"
              onClick={handleBack}
            >
              Back
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Signup