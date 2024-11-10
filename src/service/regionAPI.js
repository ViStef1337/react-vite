import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});

export const getRegion = async region => {
  const { data } = await instance.get(`/region/${region}`);

  return data;
};
