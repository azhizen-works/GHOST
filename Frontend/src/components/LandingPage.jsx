import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Body from '../assets/Body.png';
import ContestPage from './ContestPage';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';


import { BsRocketTakeoffFill,BsBook } from "react-icons/bs";
import { IoSearch,IoBarChart } from "react-icons/io5";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { SiCodementor } from "react-icons/si";
import { TfiWrite } from "react-icons/tfi";
import { TbTargetArrow } from "react-icons/tb";
import { CiBank } from "react-icons/ci";
import { MdOutlineTrain } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";
import { FaShield, FaShieldHalved } from "react-icons/fa6";


export default function LandingPage() {
  const [activeLink, setActiveLink] = useState('Home');
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [showContest, setShowContest] = useState(false);
  const navigate = useNavigate();



  if (showLogin) return <LoginPage setShowLogin={setShowLogin} setShowSignup={setShowSignup} />;
  if (showSignup) return <SignupPage setShowSignup={setShowSignup} setShowLogin={setShowLogin} />;
  if (showContest) return <ContestPage setShowContest={setShowContest} />;



  return (
    <div className="min-h-screen bg-[#0D0B1F] text-white font-sans overflow-hidden">
      {/* Background Image Section (Navbar + Hero) */}
      <div
        className="relative"
        style={{
          backgroundImage: `url(${Body})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Navbar */}
        <header className="flex items-center justify-between px-6 sm:px-14 py-6 backdrop-blur-md bg-white/10 text-white rounded-b-lg z-50 sticky top-0">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">📖</div>
            <div>
              <h1 className="text-xl font-bold leading-none mb-3">ExamAce</h1>
              <p className="text-xs text-gray-200 -mt-1">Dream • Learn • Achieve</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm items-center text-gray-200 relative">
            {['Home', 'Exams', 'Resources', 'Success Stories', 'Contact'].map((item) => (
              <div key={item} className="relative">
                <button
                  onClick={() => {
                    setActiveLink(item);
                    if (item === 'Resources') {
                      setShowResourcesDropdown((prev) => !prev);
                    } else {
                      setShowResourcesDropdown(false);
                    }
                  }}
                  onBlur={() => setTimeout(() => setShowResourcesDropdown(false), 150)}
                  className={`px-3 py-1 rounded-md transition ${activeLink === item
                    ? 'bg-white/20 text-white shadow-inner'
                    : 'hover:text-white'
                    }`}
                >
                  {item}
                  {item === 'Resources' && <span className="text-xs ml-1">▼</span>}
                </button>

                {/* Dropdown Menu for Resources */}
                {item === 'Resources' && showResourcesDropdown && (
                  <div className="absolute left-0 mt-2 bg-white/80 backdrop-blur-lg border border-white/20 text-black rounded-md shadow-lg z-50 w-44">
                    <button className="block w-full text-left px-4 py-2 hover:bg-white/20" onClick={() => navigate(`/afterLogin`)}>Study Blogs</button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-white/20" onClick={() => navigate(`/afterLogin`)}>Current Affairs</button>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center rounded-md overflow-hidden text-sm">
            <button
              className="bg-white text-black px-4 py-1.5 hover:bg-gray-100 transition"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
            <button
              className="bg-pink-600 text-white px-4 py-1.5 hover:bg-pink-700 transition"
              onClick={() => setShowSignup(true)}
            >
              Signup
            </button>


          </div>
        </header>

        {/* Hero Section */}
        <section className="relative text-center py-16 px-4 overflow-hidden text-white">
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/50 z-0" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex w-96 mx-auto justify-center place-items-center gap-3 bg-white/10 text-purple-200 px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-white/20">
              <BsRocketTakeoffFill/> India's #1 Government Exam Platform
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-2">Your Dream Job</h2>
            <h3 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#C084FC] text-transparent bg-clip-text">
              Awaits You
            </h3>
            <p className="text-lg mb-8 text-gray-200">
              Master UPSC, SSC, Banking & more with AI-powered learning,<br />
              expert mentorship, and personalized study plans<br />
              designed for your success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center px-4 py-2 bg-white/10 rounded-md w-full sm:w-72 text-left text-sm text-white placeholder:text-gray-400">
                <IoSearch className='w-6 h-5' />
                <input
                  type="text"
                  placeholder="Search your dream exam..."
                  className="bg-transparent outline-none px-2 w-full"
                />
              </div>
              <button className="bg-gradient-to-r from-[#DB2777] to-[#9333EA] text-white px-6 py-2 rounded-md font-semibold hover:opacity-90">
                Start Learning Free
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 text-sm text-center">
              {[
                ['50L+', 'Success Stories', '#C084FC'],
                ['98%', 'Success Rate', '#F472B6'],
                ['500+', 'Expert Mentors', '#FACC15'],
                ['24/7', 'Live Support', '#34D399'],
              ].map(([num, label, color], idx) => (
                <div
                  key={idx}
                  className="px-4 py-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20"
                >
                  <p className="text-2xl font-bold" style={{ color }}>{num}</p>
                  <p className="text-gray-200">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>



      {/* Why Choose Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1c0139] to-[#2d0752] text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose ExamAce?</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-12">
          Experience the future of exam preparation with cutting-edge technology and proven methodologies
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: <BsBook />,
              label: "Smart Learning",
              desc: "AI-powered personalized study plans"
            },
            {
              icon: <LuChartNoAxesCombined />,
              label: "Progress Tracking",
              desc: "Real-time performance analytics"
            },
            {
              icon: <SiCodementor />,
              label: "Expert Mentorship",
              desc: "1-on-1 guidance from toppers"
            },
            {
              icon: <TfiWrite />,
              label: "Mock Tests",
              desc: "Unlimited practice with detailed solutions"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="bg-gradient-to-r from-[#DB2777] to-[#9333EA] text-white text-2xl w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold mb-1">{item.label}</h4>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Category Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1c0139] to-[#2d0752] text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Choose Your Path to Success</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Comprehensive preparation for every government exam with <br />specialized content and strategies
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-6xl mx-auto text-left">
          {[
            {
              title: "UPSC",
              desc: "Civil Services Examination",
              subjects: "23 Subjects",
              students: "2.5L+",
              icon: <TbTargetArrow />,
              border: "from-[#6366F1] to-[#3B82F6]"
            },
            {
              title: "SSC",
              desc: "Staff Selection Commission",
              subjects: "18 Subjects",
              students: "1.8L+",
              icon: <IoBarChart />,
              border: "from-[#06B6D4] to-[#10B981]"
            },
            {
              title: "Banking",
              desc: "IBPS, SBI, RBI Exams",
              subjects: "15 Subjects",
              students: "3.2L+",
              icon: <CiBank />,
              border: "from-[#34D399] to-[#3B82F6]"
            },
            {
              title: "Railways",
              desc: "RRB, NTPC Examinations",
              subjects: "12 Subjects",
              students: "1.5L+",
              icon: <MdOutlineTrain />,
              border: "from-[#F97316] to-[#F59E0B]"
            },
            {
              title: "State PSC",
              desc: "State Public Service Commission",
              subjects: "20 Subjects",
              students: "900K+",
              icon: <RiGovernmentLine />,
              border: "from-[#EC4899] to-[#8B5CF6]"
            },
            {
              title: "Defense",
              desc: "NDA, CDS, AFCAT",
              subjects: "10 Subjects",
              students: "600K+",
              icon: <FaShieldHalved />,
              border: "from-[#F59E0B] to-[#F43F5E]"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-5 bg-white/5 backdrop-blur-md border border-white/10 shadow-md relative overflow-hidden transition-transform duration-300 hover:scale-105 hover:bg-white/10`}
            >
              {/* Top border gradient strip */}
              <div className={`h-[4px] w-full absolute top-0 left-0 bg-gradient-to-r ${item.border}`} />

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-white/10 text-2xl flex items-center justify-center mb-4">
                {item.icon}
              </div>

              {/* Title and Desc */}
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{item.desc}</p>

              {/* Stats */}
              <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                <span>{item.subjects}</span>
                <span className="flex items-center gap-1">
                  👥 {item.students}
                </span>
              </div>

              {/* CTA Button */}
              <button className="mt-auto w-full text-sm font-medium text-white rounded-lg py-2 bg-gradient-to-r from-[#DB2777] to-[#9333EA]" onClick={() => navigate(`/afterLogin`)}>
                Explore Syllabus
              </button>

              {/* Arrow icon */}
              <div className="absolute top-5 right-5 text-white/40">➔</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
