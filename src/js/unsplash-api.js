import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchPhotosByQuery = searchedQuery => {
  const axiosOptions = {
    params: {
      query: searchedQuery,
      color: 'black_and_white',
      orientation: 'portrait',
      per_page: 8,
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

// export const fetchPhotosByQuery = searchedQuery => {
// const requestParams = new URLSearchParams({
// query: searchedQuery,
// color: 'black_and_white',
// orientation: 'portrait',
// per_page: 8,
// client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
// });

//   return fetch(`https://api.unsplash.com/search/photos?${requestParams}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// };
