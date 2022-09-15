import axios from 'axios';

const API_KEY = '29813155-5a00f003dd0e1c7c871c10152';
const BASE_URL = 'https://pixabay.com';

export const fetchData = (query, page, perPage) => {
  return axios
    .get(
      `${BASE_URL}/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then(response => response.data);
  
};