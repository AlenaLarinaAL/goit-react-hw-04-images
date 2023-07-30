import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const BASE_KEY = '34965736-5e5d7805a8fd9db422550a68f';

const searchParams = {
  params: {
    key: BASE_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  },
};

export async function fetchImages(query, page = 1) {
  try {
    const urlParams = `?page=${page}&q=${query}`;
    const { data } = await axios.get(urlParams, searchParams);
    return data;
  } catch (error) {
    console.log(error);
  }
}
