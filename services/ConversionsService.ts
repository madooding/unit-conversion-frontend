import AxiosFactory from '@/services/Axios'
import BaseService from '@/services/base'

export default class ConversionsService extends BaseService {
  static getConversionsTable() {
    return AxiosFactory.getInstance().get('conversions')
  }
}
