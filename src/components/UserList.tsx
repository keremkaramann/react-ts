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

  const handleEdit = (updateUser: User) => {
    setUsers(
      users.map((user) => (user.id === updateUser.id ? updateUser : user))
    );
  };

  return (
    <div>
      <h1 className="text-center m-5 font-bold text-3xl">User List</h1>
      <div className="flex justify-center m-2">
        <AddNewUser users={users} setUsers={setUsers} />
      </div>
      <div className="border-2 w-xl m-auto"></div>
      <div className="m-7 flex flex-wrap justify-center gap-9">
        {users.length === 0 ? (
          <p className="text-gray-500 text-xl">There is no user!</p>
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
