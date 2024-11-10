import axios from 'axios';

const API_KEY = '563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74';
const instance = axios.create({
  baseURL: 'https://api.pexels.com/v1/',
});
instance.defaults.headers.common['Authorization'] = API_KEY;
instance.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await instance.get(`search?query=${query}&page=${page}`);

  return data;
};

// export async function fetchPhotos(query, page) {
//   const response = await fetch(
//     `https://pixabay.com/api/?key=27639319-39c0b1a02ab6ff7f7ad16bce1&q=${query}&page=${page}&per_page=20`,
//   );
//   if (!response.ok) {
//     throw new Error('something went wrong');
//   }
//   return response.json();
//   // return fetch(
//   //   `https://pixabay.com/api/?key=27639319-39c0b1a02ab6ff7f7ad16bce1&q=${query}&page=${page}&per_page=20`,
//   // ).then(response => {
//   //   console.log(response);
//   //   if (!response.ok) {
//   //     throw new Error('something went wrong');
//   //   }
//   //   return response.json();
//   // });
// }
