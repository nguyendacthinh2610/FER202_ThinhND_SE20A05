// api.js

const getDelay = () => {
  if (typeof window !== 'undefined' && window.__apiDelay !== undefined) {
    return window.__apiDelay;
  }
  return 1000; // default 1000ms delay
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchUser = async (userId) => {
  const ms = getDelay();
  await delay(ms);
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!response.ok) throw new Error(`Failed to fetch user ${userId}`);
  const user = await response.json();
  return user;
};

export const fetchPost = async (postId) => {
  const ms = getDelay();
  await delay(ms);
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  if (!response.ok) throw new Error(`Failed to fetch post ${postId}`);
  const post = await response.json();
  return post;
};

export const fetchAllUsers = async () => {
  const ms = getDelay();
  await delay(ms);
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) throw new Error('Failed to fetch users');
  const users = await response.json();
  return users;
};

export const fetchAllPosts = async () => {
  const ms = getDelay();
  await delay(ms);
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Failed to fetch posts');
  const posts = await response.json();
  return posts;
};
