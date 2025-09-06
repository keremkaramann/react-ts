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

  return (
    <div>
      <h1 className="text-center m-5 font-bold text-3xl">User List</h1>
      <div className="flex justify-center">
        <AddNewUser users={users} setUsers={setUsers} />
      </div>
      <div className="border-2 w-xl m-auto m-3"></div>
      <div className="m-5 flex flex-wrap justify-center gap-9">
        {users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
