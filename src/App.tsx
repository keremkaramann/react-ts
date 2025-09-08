import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./components/posts/PostList";
import UserList from "./components/users/UserList";
import HomePage from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
