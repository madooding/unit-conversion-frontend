import * as Unit from '@/constants/units'

export interface ConverstionTableItem<U extends Unit.Area | Unit.Distance | Unit.Speed | Unit.Volume = Unit.Area | Unit.Distance | Unit.Speed | Unit.Volume> {
  unit: U
  name: string
  ratio: number
}
