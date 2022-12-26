import * as Unit from '@/constants/units'

export interface ConverstionTableItem {
  unit: Unit.Area | Unit.Distance | Unit.Speed | Unit.Volume
  name: string
  ratio: number
}
