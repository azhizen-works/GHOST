import { useParams, Link } from "react-router-dom";
import newsData from "../Data/newsData";
import NavBar from "./NavBar";

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsData.find((item) => item.id === Number(id));

  if (!newsItem) return <div className="p-4">News not found.</div>;

  return (
    <>
      <NavBar />
    <div className="min-h-screen bg-white text-black">
      <main className="max-w-3xl mx-auto px-4 py-10 space-y-5">
        <Link to="/currentAffairs" className="text-blue-600 text-sm mb-2 inline-block">← Back to News</Link> <br />

        <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mb-2">
          {newsItem.category}
        </span>

        <h1 className="text-3xl font-bold mb-2">{newsItem.title}</h1>
        <p className="text-gray-600 text-lg mb-4">{newsItem.description}</p>

        <div className="flex items-center gap-2 mb-6">
          <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm">
            {newsItem.author.split(" ").map((n) => n[0]).join("")}
          </div>
          <div className="text-sm text-gray-600">{newsItem.author} · {newsItem.time}</div>
        </div>

        <div className="bg-gray-300 h-60 w-full rounded-xl mb-6"></div>

        <article className="bg-gray-50 p-6 rounded-xl leading-relaxed text-sm text-gray-800">
          <p className="mb-4">
            In a groundbreaking development that could reshape the global response to climate change, 
            world leaders from 195 countries have reached a historic agreement at the Global Climate Summit 
            in Geneva...
          </p>
          <h3 className="font-semibold mb-2">Key Provisions of the Agreement</h3>
          <p className="mb-4">
            The agreement includes several revolutionary measures that will fundamentally transform how 
            nations approach environmental policy...
          </p>
          <h3 className="font-semibold mb-2">Revolutionary Technology Initiatives</h3>
          <p>
            These include advanced solar panel systems, ocean-based carbon capture facilities, and more.
          </p>
        </article>

        <div className="text-right mt-4">
          <Link to="/currentAffairs" className="text-blue-600 text-sm">← Back to News</Link>
        </div>
      </main>
    </div>
    </>
  );
};

export default NewsDetail;
