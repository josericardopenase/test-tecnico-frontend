import api from '../../config.js'
import axios from 'axios';

const client = axios.create({ baseURL: api.api.baseUrl, json: true });

const tokenExpired = token => Object.keys(token).length === 0 || token.expired + token.timeInSec < 30

const getToken = () => {
  const token = localStorage.getItem('token')
  if(token){
    try{
      return JSON.parse(token)
    }catch(err){
      return {}
    }
  }else{
    return {}
  }
}

client.interceptors.request.use((config) => {
  const token = getToken()
  if (tokenExpired(token)) {
    auth();
  }
  return config;
});


const auth = () => {
  const formData = new URLSearchParams()
  formData.append("grant_type", "client_credentials")
  const options = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        auth: {
          username: api.api.clientId,
          password: api.api.clientSecret
        },
        json: true
  }
  axios.post(api.api.authUrl, formData, options).then(function(response) {
          let token = Object.assign({}, response.data);
          token.timeInSec = Math.floor(Date.now() / 1000);
          localStorage.setItem('token', JSON.stringify(token))
      }).catch(function(err) {
         throw new Error(`HTTP Error on auth token ${err}`)
      })
}

export default {
    async execute(method, resource, respObj, data) {
        const token = getToken()
        return client({
          method,
          url: resource,
          data,
          crossdomain: true ,
          headers: { "Authorization": `Bearer ${token.access_token}` }
        }).then(req => {
          return req.data[respObj].items
        })
      },

      getNewReleases() {
        return this.execute('get', 'browse/new-releases', 'albums')
      },

      getFeaturedPlaylists() {
        return this.execute('get', 'browse/featured-playlists', 'playlists')
      },

      getCategories() {
        return this.execute('get', 'browse/categories', 'categories')
      },

}
