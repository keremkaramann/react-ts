import { useState } from "react";
import type { User } from "../types";

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
    companyName: user.company.name,
  });

  const handleSave = () => {
    const updateUser: User = {
      ...user,
      name: formData.name,
      username: formData.username,
      email: formData.email,
      company: { ...user.company, name: formData.companyName },
    };
    onEdit(updateUser);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-80">
      {isEditing ? (
        <>
          <input
            type="text"
            className="border-1 p-1 rounded m-1"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="text"
            className="border-1 p-1 rounded m-1"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <input
            type="text"
            className="border-1 p-1 rounded m-1"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="text"
            className="border-1 p-1 rounded m-1"
            value={formData.companyName}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
          />
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-2">{user.name}</h2>
          <div className="flex gap-2">
            <p className="text-gray-600 font-medium">Username: </p>
            <p className="text-gray-600">{user.username}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-gray-600 font-medium">Email:</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-gray-600 mb-4 font-medium">Company:</p>
            <p className="text-gray-600">{user.company.name}</p>
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
