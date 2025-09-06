import UserCard from "./UserCard";
import type { User } from "../types";
import { fetchUsers } from "../services/api";
import { useEffect, useState } from "react";
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
    <>
      <h1 className="text-center mt-5 font-bold text-3xl">User List</h1>
      <div className="m-5 flex flex-wrap justify-between gap-9">
        {users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default UserList;
