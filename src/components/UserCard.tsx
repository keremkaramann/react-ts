import type { User } from "../types";

interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-80">
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

      <div className="flex justify-between">
        <button className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer transition-colors duration-500">
          Edit
        </button>
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
