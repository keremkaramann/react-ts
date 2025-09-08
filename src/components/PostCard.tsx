import { useEffect, useState } from "react";
import type { Post } from "../types";

interface PostCardProps {
  posts: Post;
  userName?: string;
  onDelete: (id: number) => void;
  onEdit: (UpdatePost: Post) => void;
}

const PostCard: React.FC<PostCardProps> = ({
  posts,
  userName,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    title: posts.title,
    user: userName,
  });

  const handleSave = () => {
    const updatePost: Post = {
      ...posts,
      title: formData.title,
      user: formData.user,
    };
    onEdit(updatePost);
    setIsEditing(false);
  };

  useEffect(() => {
    setFormData((prev) => ({ ...prev, user: userName }));
  }, [userName]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-3xl">
      {isEditing ? (
        <>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border-1 p-1 rounded m-1 w-full"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <label
            htmlFor="user"
            className="block text-sm font-medium text-gray-700"
          >
            User:
          </label>
          <input
            type="text"
            id="user"
            name="user"
            className="border-1 p-1 rounded m-1 w-full"
            value={formData.user}
            onChange={(e) => setFormData({ ...formData, user: e.target.value })}
          />
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-2"> Title: {posts.title}</h2>
          <div className="flex gap-2">
            <p className="text-gray-600 font-bold">User:</p>
            <p className="text-gray-600">
              {formData.user}
              <span className="font-medium">(User Id:{posts.userId})</span>
            </p>
          </div>
          <div className="flex gap-2">
            <p className="text-gray-600 font-bold">Post Id: </p>
            <p className="text-gray-600 ">{posts.id}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-gray-600 font-bold">User Id: </p>
            <p className="text-gray-600 ">{posts.userId}</p>
          </div>
        </>
      )}

      <div className="flex justify-between m-5">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-400 text-white px-3 py-1 rounded hover:bg-green-600 cursor-pointer transition-colors duration-500 mt-2"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer transition-colors duration-500"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onDelete(posts.id)}
          className="bg-red-400 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer transition-colors duration-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;
