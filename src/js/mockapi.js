import axios from 'axios';

axios.defaults.baseURL = 'https://687a0a90abb83744b7eb1e70.mockapi.io';

export const fetchAllPosts = () => {
  return axios.get('/posts');
};

export const createNewPost = postInfo => {
  return axios.post('/posts', postInfo);
};

export const deletePostById = postId => {
  return axios.delete(`/posts/${postId}`);
};
