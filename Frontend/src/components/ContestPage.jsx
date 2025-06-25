import React, { useState } from 'react';
import EnrollmentForm from './EnrollmentForm'; // make sure this path is correct
import Navbar from './NavBar';
import Footer from './Footer';

const contests = [
  {
    category: 'Banking',
    level: 'Intermediate',
    title: 'SBI PO Prelims Mock Test 2024',
    date: '2024-06-25',
    time: '10:00 AM',
    enrolled: 2847,
    total: 5000,
    syllabus: ['Reasoning Ability', 'English Language', 'Quantitative Aptitude'],
  },
  {
    category: 'Civil Services',
    level: 'Advanced',
    title: 'UPSC CSE Prelims General Studies',
    date: '2024-06-26',
    time: '2:00 PM',
    enrolled: 4231,
    total: 8000,
    syllabus: ['History', 'Geography', 'Polity', 'Economy', 'Current Affairs'],
  },
  {
    category: 'Railway',
    level: 'Beginner',
    title: 'RRB NTPC Group D Practice Test',
    date: '2024-06-27',
    time: '11:00 AM',
    enrolled: 1856,
    total: 4000,
    syllabus: ['General Awareness', 'Mathematics', 'General Intelligence'],
  },
  {
    category: 'State PSC',
    level: 'Intermediate',
    title: 'Bihar PSC Combined Exam',
    date: '2024-06-28',
    time: '9:00 AM',
    enrolled: 1423,
    total: 3000,
    syllabus: ['General Studies', 'Bihar Specific GK', 'Current Affairs'],
  },
  {
    category: 'Banking',
    level: 'Beginner',
    title: 'IBPS Clerk Numerical Ability',
    date: '2024-06-29',
    time: '3:00 PM',
    enrolled: 3124,
    total: 6000,
    syllabus: ['Data Interpretation', 'Number Series', 'Arithmetic Problems'],
  },
  {
    category: 'Civil Services',
    level: 'Intermediate',
    title: 'SSC CGL Tier 1 Complete Test',
    date: '2024-06-30',
    time: '1:00 PM',
    enrolled: 5642,
    total: 10000,
    syllabus: ['General Intelligence', 'Quantitative Aptitude', 'English'],
  },
];

export default function ContestPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [selectedContest, setSelectedContest] = useState(null);

  const handleEnroll = (contest) => {
    setSelectedContest(contest);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setSelectedContest(null);
  };
  return (
    <div className="min-h-screen font-sans">
      {/* <header className="flex items-center justify-between px-6 sm:px-14 py-6 backdrop-blur-md bg-white/10 text-black rounded-b-lg z-50 sticky top-0"> */}
        <Navbar />
      {/* </header> */}


      {/* CONTENT SECTION STARTS HERE */}
      <div className="bg-gradient-to-b from-blue-100 to-white p-6">

        <section className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Live Contest Arena</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of aspirants in our timed practice contests. Test your preparation,
            compete with peers, and boost your confidence for upcoming government examinations.
          </p>
        </section>

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm font-medium text-gray-700 mb-6 px-4 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm py-4 px-3">
            <div className="text-xl font-bold flex items-center justify-center gap-2">
              📘 <span>19,123</span>
            </div>
            <p className="text-gray-500 mt-1">Total Enrollments</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm py-4 px-3">
            <div className="text-xl font-bold flex items-center justify-center gap-2">
              👥 <span>6</span>
            </div>
            <p className="text-gray-500 mt-1">Active Contests</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm py-4 px-3">
            <div className="text-xl font-bold flex items-center justify-center gap-2">
              ⏰ <span>50</span>
            </div>
            <p className="text-gray-500 mt-1">Minutes Duration</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm py-4 px-3">
            <div className="text-xl font-bold flex items-center justify-center gap-2">
              🏆 <span>50</span>
            </div>
            <p className="text-gray-500 mt-1">Questions Each</p>
          </div>
        </section>

        <div className="flex justify-center flex-wrap gap-3 mb-6">
          {['All', 'Banking', 'Civil Services', 'Railway', 'State PSC'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === tab
                ? 'bg-blue-600 text-white shadow'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="w-full flex justify-center">
          <section className="grid grid-cols-3 gap-y-10 gap-x-[30px]">
            {contests.map((c, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 
             rounded-xl p-4 border border-blue-100 w-[300px] min-h-[300px] flex flex-col justify-between"
              >

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-white px-2 py-0.5 rounded-full bg-blue-600">
                      {c.category}
                    </span>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${c.level === 'Beginner'
                        ? 'bg-green-100 text-green-700'
                        : c.level === 'Intermediate'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                        }`}
                    >
                      {c.level}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-gray-800 mb-1">{c.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">
                    📅 {c.date} &nbsp; 🕘 {c.time} &nbsp; • &nbsp; 🧾 50 Questions
                  </p>

                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: `${(c.enrolled / c.total) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 mb-3">
                    Enrollment Progress <strong>{c.enrolled}</strong> / {c.total}
                  </p>

                  <div className="text-xs text-gray-700 mb-4">
                    <p className="font-semibold mb-1">Syllabus Coverage:</p>
                    <div className="flex flex-wrap gap-3">
                      {c.syllabus.map((item, idx2) => (
                        <span
                          key={idx2}
                          className="px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <button
                    className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 text-sm shadow"
                    onClick={() => handleEnroll(c)}
                  >
                    Enroll Now
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-4 py-1.5 rounded-md hover:bg-blue-50 text-sm">
                    Practice
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
      {showForm && <EnrollmentForm contest={selectedContest} onClose={handleClose} />}


      <Footer />

    </div>
  );
}
