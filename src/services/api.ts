import type { User, Post } from "../types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch(`${BASE_URL}/users`);
  const data = await res.json();
  return data;
};
export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${BASE_URL}/posts`);
  const data = await res.json();
  return data;
};
