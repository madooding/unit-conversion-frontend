import { Axios, AxiosRequestConfig } from 'axios'

let axios: Axios | undefined

export default class BaseService {
  static createAxiosInstance(baseURL: string = BASE_URL) {
    const axios = new Axios({ baseURL })
    axios.interceptors.response.use((response) => {
      try {
        return JSON.parse(response.data)
      } catch {
        return response.data
      }
    })
    return axios
  }

  static getAxiosInstance() {
    if (!axios) axios = this.createAxiosInstance()
    return axios
  }

  static get(url: string, config?: AxiosRequestConfig<any>): Promise<any> {
    return this.getAxiosInstance().get(url, config)
  }

  static post(url: string, data?: any, config?: AxiosRequestConfig<any>): Promise<any> {
    return this.getAxiosInstance().post(url, data, config)
  }

  static put(url: string, data?: any, config?: AxiosRequestConfig<any>): Promise<any> {
    return this.getAxiosInstance().put(url, data, config)
  }

  static delete(url: string, config?: AxiosRequestConfig<any>): Promise<any> {
    return this.getAxiosInstance().delete(url, config)
  }
}
