import { useEffect, useState } from "react";
import { BookOpen, List, ChevronRight } from "lucide-react";
import { TbVideo } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { FaPodcast, FaHeadphones } from "react-icons/fa6";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { MdArrowBackIos } from "react-icons/md";

import { LuBookOpenText  } from "react-icons/lu";
import Footer from "./Footer";
import NavBar from "./NavBar";

// Fix: Ensure all values are flat arrays of strings
const podcastsByTopic = {
  "introduction": ["Intro to Effective Studying", "Intro to Effective Studying", "Intro to Effective Studying"],
  "active-recall": ["Mastering Active Recall", "Mastering Active Recall", "Mastering Active Recall"],
  "spaced-repetition": [],
  "management": ["Time Management Hacks", "Planning Smartly"],
  "stress-management": ["Mental Health for Exams"],
  "environment": [],
  "revision": ["Revision Techniques"],
  "exam-day": ["Crushing Exam Day", "How to Stay Calm"],
  "conclusion": ["Consistency Over Perfection"]
};

// Build section list with first episode as title fallback
const sections = Object.entries(podcastsByTopic).map(([id, episodes]) => ({
  id,
  title: episodes[0] || id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
  episodes,
  icon: <FaPodcast />
}));

export default function PodcastPage() {
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
      entries => {
        entries.forEach(entry => {
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

  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
    <NavBar />
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 transition-all"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <BookOpen className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Explore Curated Podcasts for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
              Study Success
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-3xl mx-auto">
            Audio learning to empower your preparation journey — from mindset to mastery.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="flex gap-1 m-7 hover:text-blue-500 border-2 hover:border-blue-500 p-5 rounded-md w-44 cursor-pointer" onClick={() => navigate('/')}>
          <span className=" text-sm font-semibold  flex place-items-baseline mt-1"> <MdArrowBackIos /></span>
          <span className=" text-sm font-semibold  flex place-items-baseline">Back to Syllabus</span>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-4">
              {/* Navigation Buttons */}
              <div className="space-y-3">
                <div
                  className="bg-red-600 rounded-xl text-white w-full px-4 py-4 text-center shadow-md cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  <span className="text-2xl block mb-1 place-items-center"><LuBookOpenText  /></span>
                  <span className="font-semibold">Read Blogs</span>
                </div>
                <div
                  className="bg-purple-600 rounded-xl text-white w-full px-4 py-4 text-center shadow-md cursor-pointer"
                  onClick={() => navigate("/videos")}
                >
                  <span className="text-2xl block mb-1 place-items-center"><TbVideo /></span>
                  <span className="font-semibold">Watch Videos</span>
                </div>
              </div>

              {/* TOC */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <List className="w-5 h-5 text-pink-600" />
                  <h3 className="font-semibold text-gray-900">Podcast Topics</h3>
                </div>
                <nav className="space-y-2">
                  {sections.map(({ id, title, icon }) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all duration-200 group ${
                        activeSection === id
                          ? "bg-pink-50 text-pink-700 border-l-4 border-pink-500"
                          : "hover:bg-gray-50 text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <span className="text-lg">{icon}</span>
                      <span className="text-sm font-medium flex-1">{title}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          activeSection === id ? "rotate-90 text-pink-500" : "text-gray-400"
                        }`}
                      />
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Podcast Content */}
          <div className="lg:col-span-3 space-y-20">
            {sections.map(({ id, title, episodes }) => (
              episodes.length > 0 && (
                <section id={id} key={id}>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
                  <div className="flex overflow-x-auto gap-6 pb-2 scrollbar-hide">
                    {episodes.map((epTitle, i) => (
                      <div
                        key={i}
                        className="flex-shrink-0 w-[320px] rounded-xl bg-white shadow-lg border border-gray-200 p-4 flex flex-col justify-between"
                      >
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1 flex gap-3">
                            <FaHeadphones /> {epTitle}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3">
                            A deep dive into "{epTitle}" with practical examples and study wisdom.
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-sm text-gray-500">Duration: 12 min</span>
                          <button className="text-pink-600 hover:text-pink-800 transition">
                            <BsFillPlayCircleFill className="h-6 w-6" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
