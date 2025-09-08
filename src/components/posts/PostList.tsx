import { Link } from "react-router-dom";
import type { Post, User } from "../../types";
import { useEffect, useState } from "react";
import { fetchPosts, fetchUsers } from "../../services/api";
import PostCard from "./PostCard";
import AddNewPost from "./AddNewPost";

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const getPosts = async () => {
    const data = await fetchPosts();
    setPosts(data);
  };
  const getUsers = async () => {
    const data = await fetchUsers();
    setUsers(data);
  };
  useEffect(() => {
    getPosts();
    getUsers();
  }, []);

  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleEdit = (updatePost: Post) => {
    setPosts(
      posts.map((post) => (post.id === updatePost.id ? updatePost : post))
    );
  };
  return (
    <div>
      <Link
        to="/"
        className=" m-2 text-xl bg-indigo-400 text-white px-3 py-3 rounded hover:bg-indigo-600 cursor-pointer transition-colors duration-500"
      >
        Go Back to Home Page
      </Link>
      <h1 className="text-center m-5 font-bold text-3xl">Post List</h1>
      <div className="flex justify-center m-2">
        <AddNewPost posts={posts} setPosts={setPosts} />
      </div>
      <div className="border-2 w-full m-auto"></div>
      <div className="m-7 flex flex-wrap justify-center gap-9">
        {posts.length === 0 ? (
          <div>
            <p className="text-gray-500 text-xl mb-1">There is no user left!</p>
            <button
              onClick={getPosts}
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-800 cursor-pointer transition-colors duration-500"
            >
              Fetch Posts
            </button>
          </div>
        ) : (
          posts?.map((post) => {
            const user = users.find((user) => user.id === post.userId);
            return (
              <PostCard
                key={post.id}
                posts={post}
                userName={post.user || (user ? user.name : "Unknown User")}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default PostList;
