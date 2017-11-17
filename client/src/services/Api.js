import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://192.168.136.130:8081/`
  })
}
