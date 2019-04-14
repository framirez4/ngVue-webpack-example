import axios from 'axios'

export default {
  getBatmanMovies () {
    return axios.get('https://api.tvmaze.com/search/shows?q=batman')
      .then(res => res.data)
      .catch(err => Promise.reject(err))
  }
}