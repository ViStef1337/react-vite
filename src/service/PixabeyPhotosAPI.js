import axios from 'axios';

const API_KEY = '27639319-39c0b1a02ab6ff7f7ad16bce1';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
});
instance.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
  key: API_KEY,
};
export const getImages = async (query, page) => {
  const { data } = await instance.get(`?q=${query}&page=${page}`);
  console.log(data);

  return data;
};
// https://pixabay.com/api/?q=cat&page=1&orientation=landscape&per_page=15&key=27639319-39c0b1a02ab6ff7f7ad16bce1
// https://pixabay.com/api/?q=cat&page=1&orientation=landscape&per_page=15&key=27639319-39c0b1a02ab6ff7f7ad16bce1
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
