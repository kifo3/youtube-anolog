import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '1ade67d2a7msh5bd9e7806e07b51p1dde4ejsn206f961cd9e7',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options)
    return response.data
  }
}