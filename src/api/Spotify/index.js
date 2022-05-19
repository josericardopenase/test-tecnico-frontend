import api from '../../config.js'
import axios from 'axios';


const client = axios.create({ baseURL: api.api.baseUrl, json: true });

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
          console.log(response);
      }).catch(function(err) {
        console.log(err)
      })
}

export default auth
