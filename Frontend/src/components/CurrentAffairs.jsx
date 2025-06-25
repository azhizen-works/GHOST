import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import newsData from "../Data/newsData";
import Navbar from "./NavBar";
import Footer from "./Footer";

const categories = [
  "All",
  "Politics",
  "Technology",
  "Business",
  "Health",
  "Environment",
  "Science",
];

const CurrentAffairs = () => {
  const [visibleCards, setVisibleCards] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const handleReadMore = () => {
    setVisibleCards((prev) => prev + 3);
  };

  const featuredStory = newsData[0]; // first item as featured
  const filteredNews = selectedCategory === "All"
    ? newsData.slice(1) // exclude featured
    : newsData.filter(
        (news, index) => index !== 0 && news.category === selectedCategory
      );

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
            {/* <header className="flex items-center justify-between px-6 sm:px-14 py-6 backdrop-blur-md bg-white/10 text-black rounded-b-lg z-50 sticky top-0"> */}
            <Navbar />
            {/* </header>  */}

      {/* Hero Section */}
      <section className="text-center py-8 px-4">
        <h1 className="text-4xl font-bold mb-2">Azhizen News Hub</h1>
        <p className="text-gray-600">
          Stay informed with curated, in-depth coverage of the world’s most important stories
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <span
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCards(3);
              }}
              className={`px-4 py-1 rounded-full text-sm cursor-pointer ${
                cat === selectedCategory
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Story */}
      {featuredStory && (
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Featured Story</h2>
          <div
            className="flex flex-col md:flex-row bg-gray-100 rounded-xl overflow-hidden cursor-pointer"
            onClick={() => navigate(`/currentAffairs/${featuredStory.id}`)}
          >
            <div className="md:w-1/2 h-64 md:h-auto bg-gray-300"></div>
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mb-2 w-20">
                {featuredStory.category}
              </span>
              <h3 className="text-xl font-bold mb-2">{featuredStory.title}</h3>
              <p className="text-gray-700 mb-4">{featuredStory.description}</p>
              <div className="text-sm text-gray-500">
                {featuredStory.author} · {featuredStory.time}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Latest News */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Latest News</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {filteredNews.slice(0, visibleCards).map((news) => (
            <div
              key={news.id}
              className="w-72 bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
              onClick={() => navigate(`/currentAffairs/${news.id}`)}
            >
              <div className="bg-green-600 h-32"></div>
              <div className="p-4">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mb-2">
                  {news.category}
                </span>
                <h4 className="font-semibold text-sm">{news.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{news.description}</p>
                <div className="text-xs text-gray-500 mt-2">
                  {news.author} · {news.time}
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleCards < filteredNews.length && (
          <div className="mt-8 text-center">
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-md text-sm"
              onClick={handleReadMore}
            >
              Read More
            </button>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default CurrentAffairs;
