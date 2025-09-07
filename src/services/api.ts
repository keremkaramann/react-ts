import type { User, Post } from "../types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

//users
export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch(`${BASE_URL}/users`);
  const data = await res.json();
  return data;
};

//posts
export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${BASE_URL}/posts`);
  const data = await res.json();
  return data;
};
