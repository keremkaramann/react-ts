import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/users" className="text-blue-500 hover:underline">
        Go to Users
      </Link>
      <Link to="/posts" className="text-blue-500 hover:underline">
        Go to Posts
      </Link>
    </div>
  );
};

export default HomePage;
