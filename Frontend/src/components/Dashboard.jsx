import React, { useRef, useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import { CiTrophy } from "react-icons/ci";
import { IoIosTrophy } from "react-icons/io";
import { PiCertificateLight } from "react-icons/pi";
import { FaUserGroup } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { GrNotes } from "react-icons/gr";
import { FaFire } from "react-icons/fa";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const learningData = [
  {
    title: "UPSC Civil Services",
    progress: 78,
    total: 120,
    percentage: 65,
    percentageLabel: "65% Complete",
  },
  {
    title: "SSC CGL Preparation",
    progress: 32,
    total: 80,
    percentage: 40,
    percentageLabel: "40% Complete",
  },
  {
    title: "Banking Exam Mastery",
    progress: 48,
    total: 60,
    percentage: 80,
    percentageLabel: "80% Complete",
  },
];

const tests = [
  {
    name: "UPSC Prelims Mock Test 5",
    time: "2 hours ago",
    score: "85%",
    scoreColor: "bg-green-100 text-green-600",
    showReview: true,
  },
  {
    name: "SSC CGL Mathematics",
    time: "1 day ago",
    score: "92%",
    scoreColor: "bg-green-100 text-green-600",
    showReview: true,
  },
  {
    name: "Banking Reasoning Test",
    time: "3 days ago",
    score: "78%",
    scoreColor: "bg-yellow-100 text-yellow-700",
    showReview: true,
  },
  {
    name: "Current Affairs Weekly",
    time: "Available",
    score: "",
    scoreColor: "",
    showReview: false,
  },
];

const events = [
  {
    title: "UPSC Mains Mock Test",
    label: "test",
    labelColor: "bg-pink-100 text-pink-500",
    time: "Tomorrow, 10:00 AM",
  },
  {
    title: "Banking Exam Strategy Webinar",
    label: "webinar",
    labelColor: "bg-blue-100 text-blue-500",
    time: "Dec 8, 4:00 PM",
  },
  {
    title: "SSC CGL Application Deadline",
    label: "deadline",
    labelColor: "bg-orange-100 text-orange-500",
    time: "Dec 15",
  },
];

const defaultProfilePic =
  "https://ui-avatars.com/api/?name=Priya&background=ececec&color=505050&size=128";

// -- ICON COMPONENTS --
const StreakIcon = () => (
  // Fire icon for streak
  <svg width={18} height={18} fill="none" viewBox="0 0 24 24">
    <path
      d="M12 3C12 3 14 7 14 10C14 12.2091 12.2091 14 10 14C8.34315 14 7 12.6569 7 11C7 8 12 3 12 3Z"
      fill="#38bdf8"
      stroke="#38bdf8"
      strokeWidth="1.2"
    />
    <path
      d="M12 21c4-1.5 5-5 5-7.5S14 3 12 3s-5 4-5 10.5S8 21 12 21Z"
      stroke="#38bdf8"
      strokeWidth="1.2"
      fill="#e0f2fe"
    />
  </svg>
);

const ClockIcon = () => (
  // Clock for Study Hours
  <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" stroke="#0ea5e9" strokeWidth="2" />
    <path d="M12 8v4l2 2" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const TrophyIcon = () => (
  // Trophy for Tests Completed
  <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="#a21caf" strokeWidth="2" />
    <path d="M9 12l2 2 4-4" stroke="#a21caf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RankIcon = () => (
  // Rank/Leaderboard
  <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
    <rect x="4" y="8" width="4" height="8" rx="1" fill="#22c55e" />
    <rect x="10" y="4" width="4" height="12" rx="1" fill="#22c55e" />
    <rect x="16" y="10" width="4" height="6" rx="1" fill="#22c55e" />
  </svg>
);

const BookIcon = () => (
  // Book for Continue Learning & Upcoming Events
  <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="#333" strokeWidth="1.2" />
  </svg>
);

const ChartIcon = () => (
  // Bar chart for Recent Test Performance
  <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
    <path d="M4 17V7a2 2 0 0 1 2-2h12" stroke="#333" strokeWidth="1.2" />
  </svg>
);

const PlayIcon = () => (
  // Play icon for Start button
  <svg width={16} height={16} fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="#a21caf" />
    <polygon points="10,8 16,12 10,16" fill="#fff" />
  </svg>
);

const GroupIcon = () => (
  // People/Group for Join Study Group
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
    <path d="M8 17c-2.21 0-4-1.79-4-4v-1c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4v1c0 2.21-1.79 4-4 4H8z" stroke="#666" strokeWidth="1.5" />
    <circle cx="8" cy="9" r="2" stroke="#666" strokeWidth="1.5" />
    <circle cx="16" cy="9" r="2" stroke="#666" strokeWidth="1.5" />
  </svg>
);

const CertificateIcon = () => (
  // Certificate for View Certificates
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="#666" strokeWidth="1.5" />
    <path d="M12 8v4l3 3" stroke="#666" strokeWidth="1.5" />
  </svg>
);

const FireTrophyIcon = () => (
  // Trophy with fire for 7-Day Streak
  <svg width={40} height={40} fill="none" viewBox="0 0 24 24">
    <rect x="5" y="5" width="14" height="14" rx="3" fill="#fff" opacity="0.13" />
    <path
      d="M8 17h8M12 17v2.5M9 6h6v7a3 3 0 1 1-6 0V6z"
      stroke="#fff"
      strokeWidth="2"
    />
    <path
      d="M12 3C12 3 13.5 6.5 13.5 9C13.5 11.2091 12.2091 13 10.5 13C9.11929 13 8 11.6569 8 10C8 7 12 3 12 3Z"
      fill="#fff"
      opacity="0.2"
    />
  </svg>
);

const EditIcon = () => (
  // Pencil/Edit
  <svg width={14} height={14} fill="none" viewBox="0 0 24 24">
    <path d="M4 20h4.586a1 1 0 0 0 .707-.293l10-10a1 1 0 0 0 0-1.414l-2.586-2.586a1 1 0 0 0-1.414 0l-10 10A1 1 0 0 0 4 15.414V20z" stroke="#888" strokeWidth="1.2" />
  </svg>
);

// -- COMPONENT --
export default function Dashboard() {
  const [profilePic, setProfilePic] = useState("/image1"); // from user upload!
  const fileInputRef = useRef();

  // Example handlers:
  const handleContinueLearning = (title) => alert(`Continue learning: ${title}`);
  const handleReviewTest = (testName) => alert(`Reviewing test: ${testName}`);
  const handleStartTest = (testName) => alert(`Starting test: ${testName}`);
  const handleTakeMockTest = () => alert("Taking a new Mock Test!");
  const handleJoinStudyGroup = () => alert("Joining Study Group!");
  const handleViewCertificates = () => alert("Viewing Certificates!");
  const handleEditProfile = () => fileInputRef.current?.click();
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };


  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="bg-gray-50 min-h-screen p-4 mb-10">
        {/* Top Section */}
        <div className="flex justify-between items-start mb-7">
          {/* Welcome/Stats */}
          <div className="ml-32">
            <div className="flex items-center mb-1">
              <h1 className="text-[2rem] sm:text-3xl font-bold mr-4">
                Welcome back, Priya!
              </h1>
              <span className="flex items-center px-3 py-1 rounded-full hover:scale-105 bg-blue-100 text-blue-600 text-sm font-semibold ml-1 gap-1 border border-blue-100 shadow-sm">
                <FaFire />
                1 Day Streak
              </span>
            </div>
            <div className="text-gray-600 text-sm -mt-1 mb-6">
              Ready to continue your exam preparation journey?
            </div>
            <div className="flex gap-6 w32">
              {/* Study Hours */}
              <div className="bg-white shadow rounded-xl px-8 py-4 flex flex-col items-center min-w-[140px]">
                <span className="text-gray-500 text-xs mb-2">Study Hours</span>
                <span className="text-2xl font-bold mb-2">127</span>
                <span className="bg-blue-100 p-2 rounded-lg">
                  <ClockIcon />
                </span>
              </div>
              {/* Tests Completed */}
              <div className="bg-white shadow rounded-xl px-8 py-4 flex flex-col items-center min-w-[140px]">
                <span className="text-gray-500 text-xs mb-2">Tests Completed</span>
                <span className="text-2xl font-bold mb-2">23</span>
                <span className="bg-purple-200 p-2 rounded-lg">
                  <CiTrophy />
                </span>
              </div>
              {/* Current Rank */}
              <div className="bg-white shadow rounded-xl px-8 py-4 flex flex-col items-center min-w-[140px]">
                <span className="text-gray-500 text-xs mb-2">Current Rank</span>
                <span className="text-2xl font-bold mb-2">#342</span>
                <span className="bg-green-100 p-2 rounded-lg">
                  <RankIcon />
                </span>
              </div>
            </div>
          </div>
          {/* Profile Image */}
          <div className="flex flex-col items-center min-w-[360px] ">
            <img
              src={profilePic}
              alt="User DP"
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
              style={{ boxShadow: "0 2px 14px 0 rgba(0,0,0,0.12)" }}
            />
            <button
              className="text-gray-700 hover:scale-105 text-xs mt-2 underline flex items-center gap-1"
              onClick={handleEditProfile}
            >
              Edit
              <AiOutlineEdit />
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleProfilePicChange}
              style={{ display: "none" }}
            />
          </div>
        </div>
        {/* Main Content */}
        <div className="flex gap-7">
          {/* Main Left: Learning and Performance */}
          <div className="flex-1">
            {/* Continue Learning */}
            <div className="bg-white rounded-2xl shadow p-5 mb-6">
              <h2 className="font-semibold text-lg mb-2 flex items-center">
                <span className="mr-2">
                  <IoBookOutline />
                </span>
                Continue Learning
              </h2>
              {learningData.map((item, i) => (
                <div key={item.title} className="mb-5">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.title}</span>
                    <span className="text-xs text-gray-500 font-semibold">
                      {item.progress}/{item.total}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-lg mt-1 mb-1.5">
                    <div
                      className="h-3 rounded-lg bg-gradient-to-r from-slate-800 to-gray-600"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">{item.percentageLabel}</span>
                    <button
                      className="px-4 py-1 rounded-xl  hover:scale-105 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-sm font-semibold shadow"
                      onClick={() => handleContinueLearning(item.title)}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Recent Test Performance */}
            <div className="bg-white rounded-2xl shadow p-5">
              <h2 className="font-semibold text-lg mb-3 flex items-center">
                <span className="mr-2">
                  <GoGraph />
                </span>
                Recent Test Performance
              </h2>
              {tests.map((test, i) => (
                <div className={`flex items-center justify-between py-2 ${i !== tests.length - 1 ? "border-b" : ""}`} key={test.name}>
                  <div>
                    <div className="font-medium">{test.name}</div>
                    <div className="text-xs text-gray-400">{test.time}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    {test.score && (
                      <span className={`text-xs font-bold rounded-lg px-2 py-1 ${test.scoreColor}`}>{test.score}</span>
                    )}
                    {test.showReview ? (
                      <button
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg hover:scale-105 text-sm font-semibold shadow border border-gray-200"
                        onClick={() => handleReviewTest(test.name)}
                      >
                        Review
                      </button>
                    ) : (
                      <button
                        className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-3 py-1 rounded-lg hover:scale-105 text-sm font-semibold shadow flex items-center gap-1"
                        onClick={() => handleStartTest(test.name)}
                      >
                        <PlayIcon />
                        Start
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Column */}
          <div className="flex flex-col gap-6 w-[330px]">
            {/* Upcoming Events */}
            <h2 className="font-semibold text-lg mb-3 flex items-center justify-center bg-red-300 rounded-lg h-20 cursor-pointer" onClick={() => navigate(`/leaderBoard`)}>
              <span className="mr-2">
                <GrNotes />
              </span>
              Leader Board
            </h2>
            <div className="bg-white rounded-2xl shadow p-5">
              <h2 className="font-semibold text-lg mb-3 flex items-center">
                <span className="mr-2">
                  <GrNotes />
                </span>
                Upcoming Events
              </h2>

              {events.map((event) => (
                <div className="flex items-center justify-between mb-2 last:mb-0" key={event.title}>
                  <div>
                    <div className="font-medium">{event.title}</div>
                    <div className="text-xs text-gray-400">{event.time}</div>
                  </div>
                  <span className={`text-xs rounded-lg px-2 py-0.5 font-semibold ${event.labelColor} border border-gray-100`}>
                    {event.label}
                  </span>
                </div>
              ))}
            </div>
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow p-5">
              <h2 className="font-semibold text-lg mb-3">Quick Actions</h2>
              <button
                className="w-full bg-gradient-to-r from-pink-500 to-purple-400 text-white font-semibold rounded-lg hover:scale-105 py-2 mb-2 shadow flex items-center justify-center gap-2"
                onClick={handleTakeMockTest}
              >
                <TrophyIcon />
                Take Mock Test
              </button>
              <button
                className="w-full flex items-center gap-2 bg-gray-100 py-2 rounded-lg hover:scale-105 mb-2 font-semibold text-gray-700 shadow"
                onClick={handleJoinStudyGroup}
              >
                <FaUserGroup />
                Join Study Group
              </button>
              <button
                className="w-full flex items-center gap-2 bg-gray-100 py-2 rounded-lg hover:scale-105 font-semibold text-gray-700 shadow"
                onClick={handleViewCertificates}
              >
                <PiCertificateLight />
                View Certificates
              </button>
            </div>
            {/* Streak Card */}
            <div className="rounded-2xl hover:scale-105 p-5 text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow flex flex-col items-center">
              <IoIosTrophy />
              <div className="text-xl font-bold mb-1">7-Day Streak!</div>
              <div className="font-medium">You're on fire! Keep up the great work.</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}