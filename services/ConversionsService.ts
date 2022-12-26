import { ConverstionTableItem } from '~/types/conversion'
import BaseService from '@/services/base'

export default class ConversionsService extends BaseService {
  static getConversionsTable(): Promise<Record<string, ConverstionTableItem[]>> {
    return this.get('conversions')
  }
}
