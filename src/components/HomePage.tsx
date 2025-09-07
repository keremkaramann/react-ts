import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="text-center m-4">
      <h1 className="font-bold text-5xl mb-5">Home Page</h1>
      <div className=" flex gap-5 justify-center text-2xl">
        <Link
          to="/users"
          className=" bg-indigo-400 text-white px-4 py-3 rounded hover:bg-indigo-600 cursor-pointer transition-colors duration-500"
        >
          Go to Users
        </Link>
        <Link
          to="/posts"
          className="bg-indigo-400 text-white px-4 py-3 rounded hover:bg-indigo-600 cursor-pointer transition-colors duration-500"
        >
          Go to Posts
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
