import axios from 'axios';

axios.defaults.baseURL = 'https://687df4c5c07d1a878c309f09.mockapi.io';

export const fetchAllPosts = () => {
  return axios.get('/posts');
};

export const createNewPost = postInfo => {
  return axios.post('/posts', postInfo);
};

export const deletePostById = postId => {
  return axios.delete(`/posts/${postId}`);
};
