import React, { useState } from 'react';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiX } from 'react-icons/fi';

export default function SignupPage({ setShowSignup, setShowLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e014c] via-[#300871] to-[#5a267a] relative overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute w-60 h-60 bg-purple-300 rounded-full blur-[120px] top-[-50px] left-[-50px] opacity-30" />
      <div className="absolute w-72 h-72 bg-pink-400 rounded-full blur-[120px] bottom-[-60px] left-12 opacity-30" />
      <div className="absolute w-72 h-72 bg-yellow-400 rounded-full blur-[100px] top-[-40px] right-[-40px] opacity-20" />

      {/* Signup Box */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-8 py-10 w-full max-w-md text-white">
        {/* Close X Button */}
        <button
          onClick={() => setShowSignup(false)}
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

        <h2 className="text-2xl font-semibold text-center mb-2">Create Account</h2>
        <p className="text-center text-sm text-gray-300 mb-6">Start your exam preparation journey today</p>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Full Name</label>
          <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
            <FiUser className="text-gray-300" />
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-transparent outline-none text-sm px-2 w-full text-white"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
            <FiMail className="text-gray-300" />
            <input
              type="email"
              placeholder="Enter your mail"
              className="bg-transparent outline-none text-sm px-2 w-full text-white"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
            <FiLock className="text-gray-300" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a password"
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

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Confirm Password</label>
          <div className="flex items-center bg-white/5 border border-white/20 rounded-md px-3 py-2">
            <FiLock className="text-gray-300" />
            <input
              type={showConfirm ? 'text' : 'password'}
              placeholder="Confirm a password"
              className="bg-transparent outline-none text-sm px-2 w-full text-white"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="text-gray-400 hover:text-gray-200"
            >
              {showConfirm ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center text-sm mb-6">
          <input type="checkbox" className="mr-2 accent-pink-500" />
          <label>I agree to the <span className="underline cursor-pointer text-purple-200">Terms of Service</span> and <span className="underline cursor-pointer text-purple-200">Privacy Policy</span></label>
        </div>

        {/* Create Account Button */}
        <button className="w-full py-2 rounded-md bg-gradient-to-r from-[#9333EA] to-[#DB2777] font-semibold text-white hover:opacity-90 transition mb-4">
          Create account
        </button>

        {/* Already have an account */}
 <p className="text-sm text-center text-gray-300">
  Already have an account?{" "}
  <span
    className="text-white font-semibold cursor-pointer hover:underline"
    onClick={() => {
      setShowSignup(false);
      setShowLogin(true);
    }}
  >
    Sign in
  </span>
</p>

      </div>
    </div>
  );
}
