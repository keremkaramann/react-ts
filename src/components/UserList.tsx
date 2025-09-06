import UserCard from "./UserCard";
import type { User } from "../types";
import { fetchUsers } from "../services/api";
import { useEffect, useState } from "react";
import AddNewUser from "./AddNewUser";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1 className="text-center m-5 font-bold text-3xl">User List</h1>
      <div className="flex justify-center">
        <AddNewUser users={users} setUsers={setUsers} />
      </div>
      <div className="border-2 w-xl m-auto m-3"></div>
      <div className="m-5 flex flex-wrap justify-center gap-9">
        {users.length === 0 ? (
          <p className="text-gray-500 text-xl">There is no user!</p>
        ) : (
          users.map((user) => (
            <UserCard key={user.id} user={user} onDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default UserList;
