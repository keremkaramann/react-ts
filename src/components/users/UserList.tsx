import UserCard from "./UserCard";
import type { User } from "../../types";
import { fetchUsers } from "../../services/api";
import { useEffect, useState } from "react";
import AddNewUser from "./AddNewUser";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    const data = await fetchUsers();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (updateUser: User) => {
    setUsers(
      users.map((user) => (user.id === updateUser.id ? updateUser : user))
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
      <h1 className="text-center m-5 font-bold text-3xl">User List</h1>
      <div className="flex justify-center m-2">
        <AddNewUser users={users} setUsers={setUsers} />
      </div>
      <div className="border-2 w-full m-auto"></div>
      <div className="m-7 flex flex-wrap justify-center gap-9">
        {users.length === 0 ? (
          <div>
            <p className="text-gray-500 text-xl mb-1">There is no user left!</p>
            <button
              onClick={getUsers}
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-800 cursor-pointer transition-colors duration-500"
            >
              Fetch Users
            </button>
          </div>
        ) : (
          users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UserList;
