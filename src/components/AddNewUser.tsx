import React, { useState } from "react";
import type { User } from "../types";

interface Props {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const AddNewUser: React.FC<Props> = ({ users, setUsers }) => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleCreate = () => {
    if (!name || !username || !email) {
      alert("All fields are required!");
      return;
    }
    const newUser: User = {
      id: Date.now(),
      name,
      username,
      email,
    };
    setUsers([newUser, ...users]);
    setName("");
    setUsername("");
    setEmail("");
  };

  return (
    <div className="mb-6 p-4 bg-gray-50 rounded shadow-md w-full max-w-md">
      <h3 className="text-lg font-bold mb-4">Create User</h3>
      <input
        className="w-full mb-2 p-2 border border-gray-300 rounded"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full mb-2 p-2 border border-gray-300 rounded"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="w-full mb-2 p-2 border border-gray-300 rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handleCreate}
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-800 cursor-pointer transition-colors duration-500"
      >
        Add User
      </button>
    </div>
  );
};

export default AddNewUser;
