import { useState } from "react";
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
    body: posts.body,
  });

  const handleSave = () => {
    const updatePost: Post = {
      ...posts,
      title: formData.title,
      body: formData.body,
    };
    onEdit(updatePost);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-3xl">
      {isEditing ? (
        <>
          <input
            type="text"
            className="border-1 p-1 rounded m-1"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <input
            type="text"
            className="border-1 p-1 rounded m-1"
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          />
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-2"> Title: {posts.title}</h2>
          <div className="flex gap-2">
            <p className="text-gray-600 font-medium">Body: </p>
            <p className="text-gray-600">{posts.body}</p>
          </div>

          <div className="flex gap-2">
            <p className="text-gray-600 font-medium">User:</p>
            <p className="text-gray-600">{userName ?? "Unknown User"}</p>
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
