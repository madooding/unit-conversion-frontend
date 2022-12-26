import { Axios } from 'axios'

let axios: Axios | undefined

export default class AxiosFactory {
  static createInstance() {
    const axios = new Axios({ baseURL: BASE_URL })
    axios.interceptors.response.use((response) => {
      return response.data
    })
    return axios
  }

  static getInstance() {
    if (!axios) axios = this.createInstance()
    return axios
  }
}
