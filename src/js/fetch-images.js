import axios from 'axios';

export async function fetchImages(query, page, perPage) {
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  const KEY = '28539221-d5e0309a6fde535568a0abe02';
  return await axios
  .get(`?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`)
}