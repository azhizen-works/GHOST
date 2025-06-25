import { useState, useEffect } from "react";
import {
  BookOpen, Clock, Target, List, ChevronRight, Brain, Calendar, Heart,
  Home, FileText, Rocket, Lightbulb, CheckCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { FaVideo } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";


import { LuBrain, LuAlarmClockMinus, LuCalendar } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { FaPray, FaHome, FaNewspaper } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { BsRocketTakeoff } from "react-icons/bs";
import { MdArrowBackIos } from "react-icons/md";
import Footer from "./Footer";
import NavBar from "./NavBar";


const sections = [
  { id: "introduction", title: "Introduction", icon: "📚" },
  { id: "active-recall", title: "Active Recall Techniques", icon: <LuBrain /> },
  { id: "spaced-repetition", title: "Spaced Repetition System", icon: <LuCalendar /> },
  { id: "time-management", title: "Strategic Time Management", icon: <LuAlarmClockMinus /> },
  { id: "stress-management", title: "Stress & Mental Health", icon: <FaPray /> },
  { id: "environment", title: "Optimal Study Environment", icon: <FaHome /> },
  { id: "revision", title: "Effective Revision Strategies", icon: <FaNewspaper /> },
  { id: "exam-day", title: "Exam Day Excellence", icon: <TbTargetArrow /> },
  { id: "conclusion", title: "Your Success Journey", icon: <BsRocketTakeoff /> },
];


export default function Blogs() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((current / height) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const Card = ({ className = "", children }) => (
    <div className={`rounded-xl border bg-white shadow-sm ${className}`}>{children}</div>
  );

  const Badge = ({ className = "", children }) => (
    <span className={`inline-block px-3 py-1 text-sm rounded-full ${className}`}>{children}</span>
  );
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <NavBar />
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <BookOpen className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Master Your Exams with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
              Proven Strategies
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Transform your study approach with research-backed techniques that reduce stress, boost retention, and maximize your academic performance.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Clock className="w-4 h-4" />
              <span>8-12 min read</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Target className="w-4 h-4" />
              <span>All academic levels</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-1 m-7 hover:text-blue-500 border-2 hover:border-blue-500 p-5 rounded-md w-44 cursor-pointer" onClick={() => navigate('/')}>
          <span className=" text-sm font-semibold  flex place-items-baseline mt-1"> <MdArrowBackIos /></span>
          <span className=" text-sm font-semibold  flex place-items-baseline">Back to Syllabus</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar TOC */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-4">
              {/* Video & Podcast Full Width Buttons */}
              <div className="space-y-3">
                <div className="bg-red-600 rounded-xl text-white w-full px-4 py-4 text-center shadow-md cursor-pointer" onClick={() => navigate("/videos")}>
                  <span className="text-2xl block mb-1 place-items-center"><FaVideo /></span>
                  <span className="font-semibold">Watch Videos</span>
                </div>
                <div className="bg-pink-600 rounded-xl text-white w-full px-4 py-4 text-center shadow-md cursor-pointer" onClick={() => navigate("/podcasts")}>
                  <span className="text-2xl block mb-1 place-items-center"><FaHeadphones /></span>
                  <span className="font-semibold">Listen to Podcasts</span>
                </div>
              </div>

              {/* TOC Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <List className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Table of Contents</h3>
                </div>
                <nav className="space-y-2">
                  {sections.map(({ id, title, icon }) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all duration-200 group ${activeSection === id
                        ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                        : "hover:bg-gray-50 text-gray-600 hover:text-gray-900"
                        }`}
                    >
                      <span className="text-lg">{icon}</span>
                      <span className="text-sm font-medium flex-1">{title}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${activeSection === id ? "rotate-90 text-blue-500" : "text-gray-400"
                          }`}
                      />
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="lg:col-span-3 space-y-20">
            {[
              {
                id: "introduction",
                title: "The Science of Successful Studying",
                icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
                content: (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Exam preparation isn't just about memorizing facts—it's about understanding how your brain learns best.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      This guide offers strategies backed by cognitive psychology to boost retention and academic success.
                    </p>
                  </>
                ),
              },
              {
                id: "active-recall",
                title: "Active Recall: Your Brain's Best Friend",
                icon: <Brain className="w-8 h-8 text-purple-600" />,
                content: (
                  <>
                    <p className="mb-4 text-gray-700">
                      Instead of passively reading, active recall helps strengthen memory by forcing retrieval.
                    </p>
                    <ul className="space-y-2 text-green-700 bg-green-50 border border-green-200 p-4 rounded-lg">
                      <li className="flex gap-2"><CheckCircle className="text-green-600" /> Feynman Technique</li>
                      <li className="flex gap-2"><CheckCircle className="text-green-600" /> Practice Testing</li>
                      <li className="flex gap-2"><CheckCircle className="text-green-600" /> Mind Mapping</li>
                    </ul>
                  </>
                ),
              },
              {
                id: "spaced-repetition",
                title: "Spaced Repetition: Timing Is Everything",
                icon: <Calendar className="w-8 h-8 text-orange-600" />,
                content: <p className="text-gray-700">Reviewing at increasing intervals dramatically improves retention.</p>,
              },
              {
                id: "time-management",
                title: "Strategic Time Management",
                icon: <Clock className="w-8 h-8 text-green-600" />,
                content: (
                  <>
                    <p className="text-gray-700 mb-4">Customize your Pomodoro durations based on focus type.</p>
                    <Badge className="bg-red-50 text-red-700 border border-red-200 flex gap-3 place-items-baseline">
                      <FaRegLightbulb className="text-yellow-500" /> Use Do Not Disturb mode to avoid distraction!
                    </Badge>
                  </>
                ),
              },
              {
                id: "stress-management",
                title: "Stress Management & Mental Wellness",
                icon: <Heart className="w-8 h-8 text-pink-600" />,
                content: <p className="text-gray-700">Sleep, hydration, and social support are crucial for academic focus.</p>,
              },
              {
                id: "environment",
                title: "Designing Your Optimal Study Environment",
                icon: <Home className="w-8 h-8 text-teal-600" />,
                content: <p className="text-gray-700">Good lighting, airflow, and clutter-free spaces boost productivity.</p>,
              },
              {
                id: "revision",
                title: "Advanced Revision Strategies",
                icon: <FileText className="w-8 h-8 text-cyan-600" />,
                content: <p className="text-gray-700">Use phased revision: overview, deep dive, and integration.</p>,
              },
              {
                id: "exam-day",
                title: "Exam Day Excellence",
                icon: <Target className="w-8 h-8 text-red-600" />,
                content: <p className="text-gray-700">Use POWER: Plan, Organize, Write, Evaluate, Relax.</p>,
              },
              {
                id: "conclusion",
                title: "Your Journey to Academic Excellence",
                icon: <Rocket className="w-8 h-8 text-purple-600" />,
                content: <p className="text-gray-700">Progress over perfection. Consistency creates results. 🚀</p>,
              },
            ].map(({ id, title, icon, content }) => (
              <section id={id} key={id}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gray-100 rounded-xl">{icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
                </div>
                <Card className="p-6">{content}</Card>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
