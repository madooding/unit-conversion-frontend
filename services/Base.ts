import { Axios } from 'axios'
import AxiosFactory from '@/services/Axios'

export default class BaseService {
  protected static axios: Axios = AxiosFactory.getInstance()

  public get axios() {
    return AxiosFactory.getInstance()
  }
}
