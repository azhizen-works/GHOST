import React from 'react'

const Footer = () => {
    return (
        <>
        {/* Footer */ }
        < footer className = "bg-gradient-to-b from-[#1a002d] to-[#000214] py-10 px-6 text-sm text-gray-300 border-t border-white/10" >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-2xl">📘</span>
              <div>
                <h4 className="text-white font-semibold">ExamAce</h4>
                <p className="text-xs text-gray-400 -mt-1">Dream • Learn • Achieve</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering millions of aspirants to achieve their government job dreams through innovative learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Success Stories</a></li>
              <li><a href="#" className="hover:text-white">Free Resources</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Popular Exams */}
          <div>
            <h4 className="text-white font-semibold mb-2">Popular Exams</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">UPSC CSE</a></li>
              <li><a href="#" className="hover:text-white">SSC CGL</a></li>
              <li><a href="#" className="hover:text-white">Banking PO</a></li>
              <li><a href="#" className="hover:text-white">Railway Jobs</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-2">Support</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Live Chat</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs text-gray-500">
          © 2025 ExamAce. All rights reserved.
        </div>
      </footer >

        </>
        
  )
}

export default Footer