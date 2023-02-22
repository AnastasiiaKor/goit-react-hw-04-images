import axios from 'axios';

export async function getPictures(value, page = 1) {
  const KEY = '32337632-b40042b7961cd0f381dab24cb';
  const BASE_URL = `https://pixabay.com/api/?key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`;

  const response = await axios(BASE_URL);
  return response.data.hits;
}
