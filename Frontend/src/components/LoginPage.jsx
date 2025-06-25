import React, { useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff, FiX } from 'react-icons/fi';

export default function LoginPage({ setShowLogin, setShowSignup }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e014c] via-[#300871] to-[#5a267a] relative overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute w-60 h-60 bg-purple-300 rounded-full blur-[120px] top-[-50px] left-[-50px] opacity-30" />
      <div className="absolute w-72 h-72 bg-pink-400 rounded-full blur-[120px] bottom-[-60px] left-12 opacity-30" />
      <div className="absolute w-72 h-72 bg-yellow-400 rounded-full blur-[100px] top-[-40px] right-[-40px] opacity-20" />

      {/* Login Box */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-8 py-10 w-full max-w-md text-white">
        {/* Close X Button */}
        <button
          onClick={() => setShowLogin(false)}
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-lg"
        >
          <FiX />
        </button>

        {/* Logo + Title */}
        <div className="flex items-center justify-center mb-6 mt-4">
          <div className="bg-gradient-to-r from-[#DB2777] to-[#9333EA] p-2 rounded-lg">
            <span className="text-xl">📘</span>
          </div>
          <div className="ml-3 text-left">
            <h1 className="text-lg font-bold">ExamAce</h1>
            <p className="text-xs text-gray-300">Dream • Learn • Achieve</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-2">Welcome Back</h2>
        <p className="text-center text-sm text-gray-300 mb-6">
          Sign in to continue your exam preparation journey
        </p>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
            <FiMail className="text-gray-300" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-sm px-2 w-full text-white"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-2">
          <label className="block text-sm mb-1">Password</label>
          <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
            <FiLock className="text-gray-300" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="bg-transparent outline-none text-sm px-2 w-full text-white"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-200"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="text-sm text-right text-purple-300 hover:underline mb-6 cursor-pointer">
          Forgot Password?
        </div>

        {/* Login Button */}
        <button className="w-full py-2 rounded-md bg-gradient-to-r from-[#9333EA] to-[#DB2777] font-semibold text-white hover:opacity-90 transition mb-4">
          Sign in
        </button>

        {/* Sign up Link */}
<p className="text-sm text-center text-gray-300">
  Don't have an account?{' '}
  <span
    className="text-white font-semibold cursor-pointer hover:underline"
    onClick={() => {
      setShowLogin(false);
      setShowSignup(true);
    }}
  >
    Sign up
  </span>
</p>

      </div>
    </div>
  );
}
