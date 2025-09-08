import { useState } from "react";
import type { User } from "../../types";

interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
  onEdit: (UpdateUser: User) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: user.name,
    username: user.username,
    email: user.email,
  });

  const handleSave = () => {
    const updateUser: User = {
      ...user,
      name: formData.name,
      username: formData.username,
      email: formData.email,
    };
    onEdit(updateUser);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-80">
      {isEditing ? (
        <>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-1 p-1 rounded m-1"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="border-1 p-1 rounded m-1"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-1 p-1 rounded m-1"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </>
      ) : (
        <>
          <div className="flex gap-2">
            <p className="text-gray-600 font-bold">Name: </p>
            <p className="mb-2">{user.name}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-gray-600 font-bold">User Id: </p>
            <p className="text-gray-600 ">{user.id}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-gray-600 font-bold">Username: </p>
            <p className="text-gray-600">{user.username}</p>
          </div>
          <div className="flex gap-2 mb-2">
            <p className="text-gray-600 font-bold">Email:</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </>
      )}

      <div className="flex justify-between">
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
          onClick={() => onDelete(user.id)}
          className="bg-red-400 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer transition-colors duration-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
