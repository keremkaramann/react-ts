import React, { useState } from "react";
import type { Post } from "../types";

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const AddNewPost: React.FC<Props> = ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [user, setUser] = useState("");

  const handleCreate = () => {
    if (!title || !body || !user) {
      alert("All fields are required!");
      return;
    }

    const newPost: Post & { user: string } = {
      id: Date.now(),
      title,
      userId: Date.now(),
      user: user,
    };

    setPosts([newPost, ...posts]);

    setTitle("");
    setBody("");
    setUser("");
  };

  return (
    <div className="mb-6 p-4 bg-gray-50 rounded shadow-md w-full max-w-md">
      <h3 className="text-lg font-bold mb-4">Add New Post</h3>

      <input
        type="text"
        placeholder="Title"
        className="w-full mb-2 p-2 border border-gray-300 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        className="w-full mb-2 p-2 border border-gray-300 rounded"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <input
        type="text"
        placeholder="User Name"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <button
        onClick={handleCreate}
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-800 cursor-pointer transition-colors duration-500"
      >
        Add Post
      </button>
    </div>
  );
};

export default AddNewPost;
