import { useState, useEffect } from "react";
import {
    BookOpen, Clock, Target, List, ChevronRight
} from "lucide-react";

import { TbLogs } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { FaHeadphones } from "react-icons/fa6";

import { LuBrain, LuAlarmClockMinus } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { FaPray, FaHome, FaNewspaper } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { BsRocketTakeoff } from "react-icons/bs";
import { MdArrowBackIos } from "react-icons/md";
import NavBar from "./NavBar";
import Footer from "./Footer";

const sections = [
    { id: "introduction", title: "Introduction", icon: "📚" },
    { id: "active-recall", title: "Active Recall Techniques", icon: <LuBrain /> },
    { id: "spaced-repetition", title: "Spaced Repetition System", icon: <SlCalender /> },
    { id: "time-management", title: "Strategic Time Management", icon: <LuAlarmClockMinus /> },
    { id: "stress-management", title: "Stress & Mental Health", icon: <FaPray /> },
    { id: "environment", title: "Optimal Study Environment", icon: <FaHome /> },
    { id: "revision", title: "Effective Revision Strategies", icon: <FaNewspaper /> },
    { id: "exam-day", title: "Exam Day Excellence", icon: <TbTargetArrow /> },
    { id: "conclusion", title: "Your Success Journey", icon: <BsRocketTakeoff /> },
];

const videosBySection = {
    "introduction": [["https://www.youtube.com/embed/dQw4w9WgXcQ"],],
    "active-recall": ["https://www.youtube.com/embed/2Yt6raj-S1M"],
    "spaced-repetition": ["https://www.youtube.com/embed/z6zLfW6qKx4"],
    "time-management": ["https://www.youtube.com/embed/mVdZtN06v2k"],
    "stress-management": ["https://www.youtube.com/embed/jKo4nrg_Hfg"],
    "environment": ["https://www.youtube.com/embed/_lA_RZIYgrM"],
    "revision": ["https://www.youtube.com/embed/eTLxrzLsU78"],
    "exam-day": ["https://www.youtube.com/embed/_uQrJ0TkZlc"],
    "conclusion": ["https://www.youtube.com/embed/l-gQLqv9f4o"],
};

export default function VideosPage() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState("");
    const navigate = useNavigate()

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


    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <NavBar />
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
                <div
                    className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
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
                        Explore Study Videos for
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
                            Every Topic
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                        Visual learning resources curated to enhance your preparation with powerful insights.
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
                    {/* Sidebar TOC */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-4">
                            {/* Video & Podcast Full Width Buttons */}
                            <div className="space-y-3">
                                <div className="bg-red-600 rounded-xl text-white w-full px-4 py-4 text-center shadow-md cursor-pointer" onClick={() => navigate(`/`)}>
                                    <span className="text-2xl block mb-1 place-items-center"><TbLogs /></span>
                                    <span className="font-semibold">Blogs</span>
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

                    {/* Video Content */}
                    <div className="lg:col-span-3 space-y-20">
                        {sections.map(({ id, title }) => (
                            <section id={id} key={id}>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
                                <div className="flex overflow-x-auto space-x-6 pb-2">
                                    {(videosBySection[id] || []).map((url, index) => (
                                        <div key={index} className="flex-shrink-0 w-[320px] h-[180px] rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                                            <iframe
                                                src={url}
                                                title={`${title} Video ${index + 1}`}
                                                allowFullScreen
                                                className="w-full h-full"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
