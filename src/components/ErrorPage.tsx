import Lottie from "lottie-react";
import errorAnimation from "../assets/404 Error - Doodle animation.json";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center mt-20 gap-5">
      <h1 className="text-2xl font-bold text-red-500">Page not found</h1>
      <div className="w-80 h-80">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
      <Link
        to="/"
        className="bg-indigo-400 text-white px-3 py-1 rounded hover:bg-indigo-600 cursor-pointer transition-colors duration-500"
      >
        Go Back to Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
