import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchPhotosByQuery = (searchedQuery, currentPage, perPage) => {
  const axiosOptions = {
    params: {
      query: searchedQuery,
      color: 'black_and_white',
      orientation: 'portrait',
      page: currentPage,
      per_page: perPage,
      client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
    },
  };

  return axios.get(`/search/photos`, axiosOptions);
};

export const fetchRandomPhotos = () => {
  const axiosOptions = {
    params: {
      orientation: 'portrait',
      count: 8,
      client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
    },
  };

  return axios.get('/photos/random', axiosOptions);
};
