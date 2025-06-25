import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { MdTimer } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import { IoBookSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function ExamStrategyPage() {
  const [selectedGrade, setSelectedGrade] = useState("6th");
  const navigate = useNavigate();

  const subjectsByGrade = {
    "6th": ["Tamil", "English", "Mathematics", "Science", "Social Science", "Additional Theory"],
    "7th": ["Tamil", "English", "Mathematics", "Science", "Social Science"],
    "8th": ["Tamil", "English", "Mathematics", "Science", "Computer Science"],
    "9th": ["Tamil", "English", "Mathematics", "Science", "Social Science"],
    "10th": ["Tamil", "English", "Mathematics", "Science", "Social Science"],
    "11th": ["Tamil", "English", "Mathematics", "Physics", "Chemistry", "Biology"],
    "12th": ["Tamil", "English", "Mathematics", "Physics", "Chemistry", "Computer Science"],
    "13th": ["Tamil", "English", "Mathematics", "Physics", "Chemistry", "Computer Science","Computer Science","Computer Science",],
  };

  const handleCourseClick = (subject) => {
    navigate(`/blogs/${subject}`);
  };

  return (
    <>
    <NavBar />
      {/* Header */}
      <div className="bg-gradient-to-b from-[#3A0CA3] to-[#7209B7] text-white p-6 md:p-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="bg-white/10 p-4 rounded-full">
              <span className="text-3xl">📖</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Master Your Exams with <span className="text-yellow-300">Proven Strategies</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80">
            Transform your study approach with research-backed techniques that reduce stress,
            boost retention, and maximize your academic performance across all subjects.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="bg-white/10 px-4 py-2 rounded-full flex gap-2 place-items-baseline"><MdTimer /> 8–12 min read</span>
            <span className="bg-white/10 px-4 py-2 rounded-full flex gap-2 place-items-baseline"><FaGraduationCap /> All academic levels</span>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row px-4 lg:px-24 gap-6 mt-10 h-[calc(110vh-300px)] mb-10">
        {/* Grade Selector - Left Panel */}
        <div className="w-full lg:w-1/3 xl:w-1/4 relative">
          <div className="bg-white text-black rounded-2xl shadow-md p-6 sticky top-24">
            <div className="font-semibold text-xl mb-4 flex items-center gap-2">
              <ImBooks className="text-blue-700" />
              TNPSC
            </div>
            {Object.keys(subjectsByGrade).map((grade) => (
              <div
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className={`cursor-pointer rounded-lg px-3 py-2 mb-2 transition flex items-center justify-between ${
                  selectedGrade === grade
                    ? "bg-blue-200 text-blue-900 font-semibold"
                    : "bg-blue-50 hover:bg-blue-100 text-blue-600"
                }`}
              >
                <span>{grade}</span>
                <FiChevronRight />
              </div>
            ))}
          </div>
        </div>

        {/* Subject List - Right Panel (scrollable) */}
        <div className="w-full lg:w-2/3 xl:w-3/4 overflow-y-scroll max-h-[calc(110vh-300px)] pr-1 custom-scrollbar">
          <div className="bg-white text-black rounded-2xl shadow-md p-6">
            <div className="font-semibold text-xl mb-6 flex items-center gap-2">
              <IoBookSharp className="text-green-600" />
              Subjects for <span className="text-blue-700 ml-1">{selectedGrade}</span>
            </div>
            <div className="space-y-3">
              {subjectsByGrade[selectedGrade]?.map((subject) => (
                <div
                  key={subject}
                  onClick={() => handleCourseClick(subject)}
                  className="flex items-center justify-between bg-blue-50 hover:bg-blue-100 px-4 py-3 rounded-lg cursor-pointer transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📘</span>
                    <span className="text-blue-800 font-medium">{subject}</span>
                  </div>
                  <FaLongArrowAltRight className="text-blue-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Scrollbar Hider */}
      <style>
        {`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
          height: 0px;
        }
        .custom-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* IE 10+ */
        }
        `}
      </style>
     
    </>
  );
}
