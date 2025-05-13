import axios from 'axios';

export default class AxiosService {
  get(url, headers = {}) {
    return axios.get(url, { headers });
  }

  post(url, data, headers = {}) {
    return axios.post(url, data, { headers });
  }
}


