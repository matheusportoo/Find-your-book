import axios from 'axios';

export const DEFAULT_OPTIONS = {
  resultsPerPage: 10,
  baseURLApi: 'https://www.googleapis.com/books/v1',
  keyApi: 'AIzaSyDmhE5c6N2oOGKAjpLUxSrnV9MTJJVrloI'
};

const API = axios.create({
  baseURL: DEFAULT_OPTIONS.baseURLApi
});

const ServiceBook = {};

export default ServiceBook;

ServiceBook.get = ({ query, page }) => {
  const offset = (page - 1) * DEFAULT_OPTIONS.resultsPerPage;

  return API.get(
    `volumes?maxResults=${DEFAULT_OPTIONS.resultsPerPage}&q=${query}&printType=all&startIndex=${offset}&key=${DEFAULT_OPTIONS.keyApi}`
  );
};

ServiceBook.getById = (id) => {
  return API.get(`volumes/${id}?key=${DEFAULT_OPTIONS.keyApi}`);
};
