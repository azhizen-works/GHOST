import React, { useEffect, useState } from 'react'
import {
  FaClipboardList, FaCalendarCheck, FaChartPie, FaChalkboardTeacher,
  FaLandmark, FaUserFriends, FaUniversity, FaTrain, FaShieldAlt, FaRegBuilding
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './NavBar';


import { FaArrowRightLong } from "react-icons/fa6";
import { PiWarningCircleLight } from "react-icons/pi";
import { SiTarget } from "react-icons/si";



const examCategories = [
  {
    title: "UPSC",
    description: "Civil Service Examination",
    applicants: "10L+",
    subjects: ["General studies", "CSAT", "+2 more"],
    color: "bg-green-600",
    icon: <FaLandmark size={32} className="text-white" />,
  },
  {
    title: "SSC",
    description: "Staff Selection Commission",
    applicants: "50L+",
    subjects: ["General Intelligence", "Quantitative Aptitude", "+2 more"],
    color: "bg-purple-600",
    icon: <FaUserFriends size={32} className="text-white" />,
  },
  {
    title: "Banking",
    description: "IBPS, SBI, RBI Exams",
    applicants: "10L+",
    subjects: ["General studies", "CSAT", "+2 more"],
    color: "bg-blue-600",
    icon: <FaUniversity size={32} className="text-white" />,
  },
  {
    title: "Railway",
    description: "RRB & Railway Recruitment",
    applicants: "10L+",
    subjects: ["General studies", "CSAT", "+2 more"],
    color: "bg-red-600",
    icon: <FaTrain size={32} className="text-white" />,
  },
  {
    title: "Defence",
    description: "Army, Air Force, Navy Exams",
    applicants: "50L+",
    subjects: ["General Intelligence", "Quantitative Aptitude", "+2 more"],
    color: "bg-orange-500",
    icon: <FaShieldAlt size={32} className="text-white" />,
  },
  {
    title: "State PSC",
    description: "State Public Service Commission",
    applicants: "10L+",
    subjects: ["General studies", "CSAT", "+2 more"],
    color: "bg-blue-500",
    icon: <FaRegBuilding size={32} className="text-white" />,
  },
];








const articles = [
  {
    category: "Economy",
    priority: "High Priority",
    title: "Economic Survey 2024: Key Highlights for Competitive exams",
    desc: "Important economic indicators and policy changes that frequently appear in government exams.",
    date: "15 January 2024",
    link: "#",
    categoryColor: "bg-blue-200 text-blue-700",
    priorityColor: "bg-pink-200 text-pink-700",
  },
  {
    category: "International",
    priority: "High Priority",
    title: "International Relations Updates: G20 Summit Outcomes",
    desc: "Comprehensive coverage of recent diplomatic developments and their exam relevance.",
    date: "14 January 2024",
    link: "#",
    categoryColor: "bg-purple-200 text-purple-700",
    priorityColor: "bg-pink-200 text-pink-700",
  },
  {
    category: "Science & Tech",
    priority: "High Priority",
    title: "Science and Technology: Space Missions and Achievements",
    desc: "Latest developments in India’s space program and global technology advantages.",
    date: "13 January 2024",
    link: "#",
    categoryColor: "bg-cyan-200 text-cyan-700",
    priorityColor: "bg-pink-200 text-pink-700",
  },
  {
    category: "Environment",
    priority: "High Priority",
    title: "environmental Policies: Climate changes Initiatives",
    desc: "New environment regulation and international climate commitments.",
    date: "12 January 2024",
    link: "#",
    categoryColor: "bg-orange-200 text-orange-700",
    priorityColor: "bg-pink-200 text-pink-700",
  },
];

const quickUpdates = [
  { label: "RBI Policy Rates:", value: "Repo rate maintained at 6.5%" },
  { label: "New Scheme:", value: "PM-SURAJ: Increased announced" },
  { label: "International:", value: "India-Australia re-signed agreement updates" },
  { label: "Sports:", value: "Commonwealth Games medal tally finalized" },
];

const importantDates = [
  { label: "Republic Day", date: "Jan 26" },
  { label: "Union Budget", date: "Feb 1" },
  { label: "World Cancer Day", date: "Feb 4" },
  { label: "National Science Day", date: "Feb 28" },
];








const AfterLogin = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [showResources, setShowResources] = useState(false);
  const navigate = useNavigate();



  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedCategory(null);
      setIsClosing(false);
    }, 300); // Match animation duration
  };


  useEffect(() => {
    let timer;
    if (showPopup) {
      timer = setTimeout(() => setShowPopup(false), 2 * 60 * 1000);
    }
    return () => clearTimeout(timer);
  }, [showPopup]);


  return (
    <>

      {/* <header className="flex items-center justify-between px-6 sm:px-14 py-6 backdrop-blur-md bg-white/10 text-black rounded-b-lg z-50 sticky top-0"> */}
      <Navbar />
      {/* </header> */}

























      <div className="bg-gradient-to-br from-blue-500 to-blue-900 text-white py-16 px-6 md:px-20 flex flex-col md:flex-row justify-evenly items-center min-h-screen">
        {/* Left Section */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Master Government<br />Competitive Exams
          </h1>
          <p className="text-lg text-blue-100">
            Join India's most comprehensive preparation platform with AI-powered study plans, expert guidance,
            and proven success strategies. Transform your preparation journey today.
          </p>

          <div className="flex gap-4 mt-6">
            <div className="bg-white/10 p-4 rounded-lg text-center w-40">
              <p className="text-yellow-300 text-xl font-bold">10 L+</p>
              <p className="text-sm">Annual Applicants</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg text-center w-40">
              <p className="text-green-300 text-xl font-bold">100%</p>
              <p className="text-sm">Success rate</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg text-center w-44">
              <p className="text-white text-xl font-bold">13–14 months</p>
              <p className="text-sm">Preparation duration</p>
            </div>
          </div>

          <button className="flex place-items-center justify-center gap-3 mt-8 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300   hover:scale-105 transition">
            Watch demo <FaArrowRightLong className='mt-1' />
          </button>
        </div>
        <div className="mt-10 md:mt-0 w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-6 text-white">Quick Access</h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white/10 hover:bg-white/20  hover:scale-105 p-4 rounded-xl flex gap-3 transition-all">
              <div className="bg-green-500 text-white p-2 rounded-lg w-10 h-10">
                <FaClipboardList className="text-xl" />
              </div>
              <div>
                <p className="font-semibold text-sm text-white">Take Assessment</p>
                <p className="text-xs text-blue-100">Find your preparation Level</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 hover:bg-white/20  hover:scale-105 p-4 rounded-xl flex gap-3 transition-all">
              <div className="bg-purple-500 text-white p-2 rounded-lg w-10 h-10">
                <FaCalendarCheck className="text-xl" />
              </div>
              <div>
                <p className="font-semibold text-sm text-white">Daily Quiz</p>
                <p className="text-xs text-blue-100">Test your Knowledge</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 hover:bg-white/20  hover:scale-105 p-4 rounded-xl flex gap-3 transition-all">
              <div className="bg-orange-400 text-white p-2 rounded-lg w-10 h-10">
                <FaChartPie className="text-xl" />
              </div>
              <div>
                <p className="font-semibold text-sm text-white">Study Plan</p>
                <p className="text-xs text-blue-100">Get Personalized Road Map</p>
              </div>
            </div>

            {/* Card 4 */}
            <div
              onClick={() => setShowPopup(true)}
              className="bg-white/10 hover:bg-white/20 hover:scale-105 p-4 rounded-xl flex gap-3 transition-all cursor-pointer"
            >
              <div className="bg-red-500 text-white p-2 rounded-lg w-10 h-10">
                <FaChalkboardTeacher className="text-xl" />
              </div>
              <div>
                <p className="font-semibold text-sm text-white">Live Classes</p>
                <p className="text-xs text-blue-100">Join Expert Session</p>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-white mb-1">
              <span>Today's Progress</span>
              <span>70% Completed</span>
            </div>
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-2 bg-gradient-to-r from-purple-500 via-pink-400 to-purple-600 rounded-full"
                style={{ width: '70%' }}
              ></div>
            </div>
            <p className="text-xs text-blue-100 mt-1">Keep the Momentum</p>
          </div>


          {/* Participate Button */}
          <button className="w-full mt-5 bg-white/20  hover:scale-105 text-white font-semibold py-2 rounded-lg hover:bg-white/30 transition" onClick={() => navigate(`/contest`)}>
            Participate Contest
          </button>

          {/* Popup
            {showPopup && (
              <div className="mt-4 bg-blue-100 p-4 rounded-lg shadow text-sm text-blue-900">
                <p className="font-semibold">Live Class Info</p>
                <p className="mt-2 text-blue-800">
                  Join the expert session now! This popup will close in 2 minutes.
                </p>
              </div>
            )} */}
        </div>
      </div>

      <div className="flex flex-col items-center w-full mt-10">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Choose Your Exam Category
        </h1>
        {/* Subtitle */}
        <p className="text-center text-base md:text-lg text-black mb-8 max-w-3xl">
          Comprehensive preparation materials and strategic guidance for all major government competitive exams
        </p>
        {/* Search & Filters */}
        <div className="flex flex-row items-center bg-white rounded-md shadow-lg px-4 py-3 space-x-3 w-full max-w-3xl mb-8">
          <input
            type="text"
            placeholder="Search exams ,Categories ,Subjects etc...."
            className="flex-grow px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
          />
          <select className="px-4 py-2 rounded border border-gray-300 bg-white text-sm">
            <option>Levels</option>
            {/* Add options here */}
          </select>
          <select className="px-4 py-2 rounded border border-gray-300 bg-white text-sm">
            <option>Sort by vacancies</option>
            {/* Add options here */}
          </select>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-6 mt-8">
        {examCategories.map((cat) => (
          <div
            key={cat.title}
            className="w-[300px] bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:scale-105 transition "
            style={{ minHeight: 305 }}
          >
            <div className={`flex items-center justify-between px-4 py-4 ${cat.color}`}>
              <div>
                <div className="text-lg font-semibold text-white">{cat.title}</div>
                <div className="text-sm text-white">{cat.description}</div>
              </div>
              <div>{cat.icon}</div>
            </div>
            <div className="flex flex-col flex-1 px-5 py-4">
              <div className="text-xs text-gray-400 mb-1">Applicants</div>
              <div className="text-sm text-gray-700 mb-2">{cat.applicants}</div>
              <div className="text-xs text-gray-400 mb-1">Key Subjects</div>
              <div className="flex flex-wrap gap-2 mb-4">
                {cat.subjects.map((subj, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700"
                  >
                    {subj}
                  </span>
                ))}
              </div>
              <button
                className="mt-auto bg-black text-white rounded-full px-4 py-2 text-sm font-medium shadow hover:bg-blue-300 hover:scale-105 transition"
                onClick={() => setSelectedCategory(cat)}
              >
                Explore Resources
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div
            className={`bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative ${isClosing ? "animate-zoomOut" : "animate-zoomIn"
              }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
            >
              &times;
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-full ${selectedCategory.color}`}>
                {selectedCategory.icon}
              </div>
              <div>
                <h2 className="text-lg font-bold">{selectedCategory.title}</h2>
                <p className="text-sm text-gray-500">{selectedCategory.description}</p>
              </div>
            </div>
            <div>
              <p className="text-sm mb-2">
                <strong>Applicants:</strong> {selectedCategory.applicants}
              </p>
              <p className="text-sm mb-2">
                <strong>Subjects:</strong> {selectedCategory.subjects.join(", ").replace("+2 more", "and others")}
              </p>
              <p className="text-sm text-gray-600 mt-4">
                More resources and practice sets will be available here soon. Stay tuned!
              </p>
              <button className='mt-4 bg-blue-400 w-full p-2 rounded text-white font-semibold' onClick={()=> navigate(`/CourseEnroll`)}>Enroll Now</button>
            </div>
          </div>
        </div>
      )}





      <div className="w-full min-h-screen bg-white flex flex-col items-center px-4 py-10">
        <div className="max-w-5xl w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">Daily Current Affairs</h1>
          <p className="text-center text-gray-600 mb-8">
            Stay updated with the latest news and development curated specifically for <br className="hidden md:inline" />
            government exam preparation
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left: Articles */}
            <div className="flex-1 flex flex-col gap-4 ">
              {articles.map((art, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col gap-2 cursor-pointer hover:scale-105 transition" onClick={() => navigate(`/currentAffairs`)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${art.categoryColor}`}>
                      {art.category}
                    </span>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${art.priorityColor}`}>
                      {art.priority}
                    </span>
                  </div>
                  <div className="font-semibold text-gray-800">{art.title}</div>
                  <div className="text-sm text-gray-500">{art.desc}</div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-400">{art.date}</span>
                    <a
                      href={art.link}
                      className="text-xs text-sky-600 font-medium hover:underline flex items-center gap-1"
                    >
                      Read Full Article <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* Right: Quick Updates & Dates */}
            <div className="w-full md:w-[320px] flex flex-col gap-4">
              <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="inline-block content-center w-6 h-6 bg-sky-200 text-sky-700 items-center justify-center rounded-full mr-2">
                    {/* <svg width="16" height="16" fill="currentColor"><path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM8 0a8 8 0 110 16A8 8 0 018 0zm.75 4.75a.75.75 0 00-1.5 0v4.5c0 .414.336.75.75.75s.75-.336.75-.75v-4.5zm-.75 8a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg> */}
                    <PiWarningCircleLight className='ml-1 font-bold' />
                  </span>
                  <span className="font-semibold text-sky-800 text-sm">Today's Quick Updates</span>
                </div>
                <ul className="text-xs text-gray-700 pl-2 list-disc">
                  {quickUpdates.map((q, idx) => (
                    <li key={idx} className="mb-1">
                      <span className="font-semibold">{q.label}</span> {q.value}
                    </li>
                  ))}
                </ul>
                <div className="text-[11px] text-gray-400 mt-2">
                  Sports: Common wealth Games medal tally finalized<br />
                  International: India-Australia re-signed agreement updates
                </div>
              </div>
              <div className="bg-orange-50 rounded-xl p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="inline-block content-center w-6 h-6 bg-orange-200 text-orange-700  items-center justify-center rounded-full mr-2">
                    {/* <svg width="16" height="16" fill="currentColor"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" fill="none" /><circle cx="8" cy="8" r="2" fill="currentColor" /></svg> */}
                    <SiTarget className='ml-1' />
                  </span>
                  <span className="font-semibold text-orange-800 text-sm">Important Dates</span>
                </div>
                <ul className="text-xs text-gray-700">
                  {importantDates.map((d, idx) => (
                    <li key={idx} className="flex justify-between mb-1">
                      <span>{d.label}</span>
                      <span className="font-semibold">{d.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="mt-5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-md py-2 transition text-sm hover:scale-105 w-24 text-center"
              onClick={() => navigate(`/currentAffairs`)}
            >
              Read More
            </button>
          </div>

        </div>


      </div>









      <Footer />





















    </>

  )
}

export default AfterLogin