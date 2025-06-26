// CourseDetails.jsx
import React, { useState } from 'react';
import {
    FaStar,
    FaCertificate,
    FaGlobe,
    FaClock,
    FaPlayCircle,
} from 'react-icons/fa';
import NavBar from './NavBar';
import Footer from './Footer';

const course = {
    title: 'IBM UI/UX Designer Professional Certificate',
    subtitle:
        'Unlock your UI/UX career with job‑ready skills. Build skills & hands‑on experience employers are looking for, including Figma and Miro, in 4 months.',
    instructor: 'John Rofrano',
    rating: 4.7,
    reviews: 15,
    level: 'Beginner',
    duration: '4 months • 8 hours/week',
    schedule: 'Flexible schedule',
    modules: 6,
    whatYouLearn: [
        'Gain job‑ready UI/UX design skills employers look for to create intuitive, accessible, visually compelling digital experiences across platforms.',
        'Create and test wireframes, prototypes, and layouts using Figma and industry best practices for usability and accessibility.',
        'Apply Agile and latest design practices to rapidly deliver compelling web, mobile and desktop application interfaces and experiences products.',
        'Conduct user research, map journeys, and apply information architecture to build clear, user‑centered navigation and content structures.',
    ],
    skills: [
        'User Experience Design',
        'Wireframing',
        'Responsive Web Design',
        'Agile Software Development',
        'Usability Testing',
        'Design Thinking',
        'Usability',
        'Agile Project Management',
        'User Interface (UI) Design',
    ],
    testimonials: [
        {
            name: 'Felipe M.',
            since: 2018,
            quote:
                'To be able to take courses at my own pace and rhythm has been an amazing experience. I can learn whenever it fits my schedule and mood.',
        },
        {
            name: 'Jennifer J.',
            since: 2020,
            quote:
                'I directly applied the concepts and skills I learned from my courses to an exciting new project at work.',
        },
        {
            name: 'Larry W.',
            since: 2021,
            quote:
                'When I need courses on topics that my university doesn’t offer, Coursera is one of the best places to go.',
        },
        {
            name: 'Chaitanya A.',
            since: 2022,
            quote:
                'Learning isn’t just about being better at your job; it’s so much more than that. Coursera allows me to learn without limits.',
        },
    ],
    faqs: [
        { q: 'Who is this program for?', a: 'This program is ideal for beginners and career changers interested in UI/UX.' },
        { q: 'What background knowledge is necessary?', a: 'No prior design experience is required; basic computer knowledge is helpful.' },
        { q: 'Can I enroll in a single course?', a: 'Yes, individual courses can be taken separately after enrollment.' },
    ],
};

export default function CourseDetails() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', experience: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setShowModal(false);
    };

    return (
        <>
            <div className="bg-gray-50 min-h-screen text-gray-800">
                <NavBar />
                <header className="bg-white shadow py-10">
                    <div className="container mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div>
                            <img src="/ibm-logo.png" alt="IBM Logo" className="h-12 mb-4" />
                            <h1 className="text-3xl lg:text-4xl font-bold">{course.title}</h1>
                            <p className="mt-2 text-gray-600 max-w-2xl">{course.subtitle}</p>
                            <div className="mt-4 flex items-center gap-2 text-gray-500 text-sm">
                                <span>
                                    Instructors: <span className="text-gray-800 font-medium">{course.instructor}</span>, +5 more
                                </span>
                                <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs">Top Instructor</span>
                            </div>
                            <button
                                onClick={() => setShowModal(true)}
                                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
                            >
                                Enroll for Free
                            </button>
                        </div>
                    </div>
                </header>

                {/* Enrollment Modal */}
                {showModal && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg p-6 w-full max-w-md">
                            <h2 className="text-xl font-semibold mb-4">Enroll Now</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md"
                                    required
                                />
                                <select
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md"
                                    required
                                >
                                    <option value="">Select Experience Level</option>
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="advanced">Advanced</option>
                                </select>
                                <div className="flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}


                <section className="container mx-auto px-6 lg:px-0 mt-8">
                    <div className="bg-white rounded-lg shadow flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
                        <div className="p-6 flex-1 text-center">
                            <div className="font-semibold">{course.modules}-course series</div>
                            <div className="text-sm text-gray-500">Earn a career credential that demonstrates your expertise.</div>
                        </div>
                        <div className="p-6 flex-1 text-center flex items-center justify-center gap-2">
                            <FaStar className="text-yellow-500" />
                            <span className="font-semibold">{course.rating}</span>
                            <span className="text-sm text-gray-500">({course.reviews} reviews)</span>
                        </div>
                        <div className="p-6 flex-1 text-center">
                            <div className="font-semibold">{course.level}</div>
                            <div className="text-sm text-gray-500">Recommended experience</div>
                        </div>
                        <div className="p-6 flex-1 text-center">
                            <div className="font-semibold">{course.duration}</div>
                            <div className="text-sm text-gray-500">Estimated effort</div>
                        </div>
                        <div className="p-6 flex-1 text-center">
                            <div className="font-semibold">{course.schedule}</div>
                            <div className="text-sm text-gray-500">Learn at your own pace</div>
                        </div>
                    </div>
                </section>




                <nav className="container mx-auto px-6 lg:px-0 mt-8 border-b border-gray-200">
                    <ul className="flex gap-6 text-gray-600">
                        {['About', 'Outcomes', 'Courses', 'FAQ'].map(tab => (
                            <li key={tab} className="py-4 border-b-2 border-transparent hover:border-blue-500 cursor-pointer">
                                {tab}
                            </li>
                        ))}
                    </ul>
                </nav>



                <main className="container mx-auto px-6 lg:px-0 py-8 space-y-12">
                    {/* What you'll learn */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">What you'll learn</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {course.whatYouLearn.map((point, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <FaPlayCircle className="text-blue-500 mt-1" />
                                    <p className="text-gray-700">{point}</p>
                                </div>
                            ))}
                        </div>
                    </section>





                    {/* Skills */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Skills you'll gain</h2>
                        <div className="flex flex-wrap gap-2">
                            {course.skills.map((skill, i) => (
                                <span key={i} className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm">
                                    {skill}
                                </span>
                            ))}
                            {/* <button className="text-blue-600 ml-2 text-sm">View all skills</button> */}
                        </div>
                    </section>




                    


                    {/* Professional Certificate Description */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Professional Certificate – {course.modules}-course series</h2>
                        <p className="text-gray-700 leading-relaxed">
                            {/* <!-- Replace this with a dynamic, detailed description --> */}
                            Global Growth Insights reports that demand for UI/UX designers is climbing fast, driven by global shifts to user-centric digital experiences...
                            Global Growth Insights reports that demand for UI/UX designers is climbing fast, driven by global shifts to user-centric digital experiences...
                            Global Growth Insights reports that demand for UI/UX designers is climbing fast, driven by global shifts to user-centric digital experiences...
                            Global Growth Insights reports that demand for UI/UX designers is climbing fast, driven by global shifts to user-centric digital experiences...
                            Global Growth Insights reports that demand for UI/UX designers is climbing fast, driven by global shifts to user-centric digital experiences...
                            Global Growth Insights reports that demand for UI/UX designers is climbing fast, driven by global shifts to user-centric digital experiences...
                            Global Growth Insights reports that demand for UI/UX designers is climbing fast, driven by global shifts to user-centric digital experiences...
                        </p>
                    </section>



                    {/* Testimonials */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-6">Why people choose this certificate</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {course.testimonials.map((t, i) => (
                                <div key={i} className="bg-white p-4 rounded-lg shadow">
                                    <p className="italic text-gray-800 mb-2">"{t.quote}"</p>
                                    <p className="text-sm text-gray-600">— {t.name}, Learner since {t.since}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Frequently asked questions</h2>
                        <div className="bg-white rounded-lg shadow divide-y">
                            {course.faqs.map((f, i) => (
                                <details key={i} className="p-4">
                                    <summary className="cursor-pointer font-medium">{f.q}</summary>
                                    <p className="mt-2 text-gray-600">{f.a}</p>
                                </details>
                            ))}
                        </div>
                        <button className="mt-4 text-blue-600 text-sm">Visit the learner help center →</button>
                    </section>




                </main>



                <Footer />
            </div>
        </>
    );
}
