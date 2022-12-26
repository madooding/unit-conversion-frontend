import BaseService from '@/services/base'
import { Area, Distance, Speed, Volume } from '~/constants/units'
import { ConverstionTableItem } from '@/types/conversion'

// NOTE: Ratio compared with centimeter
const distances: ConverstionTableItem<Distance>[] = [
  {
    unit: Distance.Centimeter,
    name: 'Centimeter',
    ratio: 1,
  },
  {
    unit: Distance.Meter,
    name: 'Meter',
    ratio: 0.01,
  },
  {
    unit: Distance.Kilometer,
    name: 'Kilometer',
    ratio: 0.00001,
  },
  {
    unit: Distance.Millimeter,
    name: 'Millimeter',
    ratio: 10,
  },
  {
    unit: Distance.Micrometer,
    name: 'Micrometer',
    ratio: 10000,
  },
  {
    unit: Distance.Nanometer,
    name: 'Nanometer',
    ratio: 10000000,
  },
  {
    unit: Distance.Mile,
    name: 'Mile',
    ratio: 0.0000062137,
  },
  {
    unit: Distance.Yard,
    name: 'Yard',
    ratio: 0.010936133,
  },
  {
    unit: Distance.Foot,
    name: 'Foot',
    ratio: 0.032808399,
  },
  {
    unit: Distance.Inch,
    name: 'Inch',
    ratio: 0.3937007874,
  },
]

// NOTE: Ratio compared with Square Centimeter
const areas: ConverstionTableItem<Area>[] = [
  {
    unit: Area.SquareMeter,
    name: 'Square Meter',
    ratio: 0.0001,
  },
  {
    unit: Area.SquareKilometer,
    name: 'Square Kilometer',
    ratio: 1e-10,
  },
  {
    unit: Area.SquareCentimeter,
    name: 'Square Centimeter',
    ratio: 1,
  },
  {
    unit: Area.SquareMillimeter,
    name: 'Square Millimeter',
    ratio: 100,
  },
  {
    unit: Area.SquareMicrometer,
    name: 'Square Micrometer',
    ratio: 100000000,
  },
  {
    unit: Area.SquareMile,
    name: 'Square Mile',
    ratio: 3.861021585e-11,
  },
  {
    unit: Area.SquareYard,
    name: 'Square Yard',
    ratio: 0.000119599,
  },
  {
    unit: Area.SquareFoot,
    name: 'Square Foot',
    ratio: 0.001076391,
  },
  {
    unit: Area.SquareInch,
    name: 'Square Inch',
    ratio: 0.15500031,
  },
  {
    unit: Area.Acre,
    name: 'Acre',
    ratio: 2.471053814e-8,
  },
  {
    unit: Area.Rai,
    name: 'Rai',
    ratio: 6.25e-8,
  },
]

// NOTE: Ratio compared with Cubic Centimeter
const volumes: ConverstionTableItem<Volume>[] = [
  {
    unit: Volume.CubicMeter,
    name: 'Cubic Meter',
    ratio: 0.000001,
  },
  {
    unit: Volume.CubicKilometer,
    name: 'Cubic Kilometer',
    ratio: 1e-15,
  },
  {
    unit: Volume.CubicCentimeter,
    name: 'Cubic Centimeter',
    ratio: 1,
  },
  {
    unit: Volume.CubicMillimeter,
    name: 'Cubic Millimeter',
    ratio: 1000,
  },
  {
    unit: Volume.Liter,
    name: 'Liter',
    ratio: 1,
  },
  {
    unit: Volume.Milliliter,
    name: 'Milliliter',
    ratio: 0.001,
  },
  {
    unit: Volume.CubicMile,
    name: 'Cubic Mile',
    ratio: 2.399127585e-16,
  },
  {
    unit: Volume.CubicYard,
    name: 'Cubic Yard',
    ratio: 0.000001308,
  },
  {
    unit: Volume.CubicFoot,
    name: 'Cubic Foot',
    ratio: 0.0000353147,
  },
  {
    unit: Volume.CubicInch,
    name: 'Cubic Inch',
    ratio: 0.0610237441,
  },
]

// NOTE: Ratio compared with Centimeter/Second
const speeds: ConverstionTableItem<Speed>[] = [
  { unit: Speed.CMPH, name: 'Centimeter/Hour', ratio: 3600 },
  { unit: Speed.CMPMIN, name: 'Centimeter/Minute', ratio: 60 },
  { unit: Speed.CMPS, name: 'Centimeter/Second', ratio: 1 },
  { unit: Speed.FTPH, name: 'Foot/Hour', ratio: 118.11023622 },
  { unit: Speed.FTPMIN, name: 'Foot/Minute', ratio: 1.968503937 },
  { unit: Speed.FTPS, name: 'Foot/Second', ratio: 0.032808399 },
  { unit: Speed.KMPH, name: 'Kilometer/Hour', ratio: 0.036 },
  { unit: Speed.KMPMIN, name: 'Kilometer/Minute', ratio: 0.0006 },
  { unit: Speed.KMPS, name: 'Kilometer/Second', ratio: 0.00001 },
  { unit: Speed.MIPH, name: 'Mile/Hour', ratio: 0.0223693629 },
  { unit: Speed.MIPMIN, name: 'Mile/Minute', ratio: 0.0003728227 },
  { unit: Speed.MIPS, name: 'Mile/Second', ratio: 0.0000062137 },
  { unit: Speed.MMPH, name: 'Millimeter/Hour', ratio: 36000 },
  { unit: Speed.MMPMIN, name: 'Millimeter/Minute', ratio: 600 },
  { unit: Speed.MMPS, name: 'Millimeter/Second', ratio: 10 },
  { unit: Speed.MPH, name: 'Meter/Hour', ratio: 36 },
  { unit: Speed.MPMIN, name: 'Meter/Minute', ratio: 0.6 },
  { unit: Speed.MPS, name: 'Meter/Second', ratio: 0.01 },
  { unit: Speed.YDPH, name: 'Yard/Hour', ratio: 39.37007874 },
  { unit: Speed.YDPMIN, name: 'Yard/Minute', ratio: 0.656167979 },
  { unit: Speed.YDPS, name: 'Yard/Second', ratio: 0.010936133 },
]

export default class ConversionsService extends BaseService {
  static getConversionsTable(): Promise<Record<string, ConverstionTableItem[]>> {
    // return this.get('conversions')

    // NOTE: Mockup API
    return Promise.resolve({
      distances,
      areas,
      volumes,
      speeds,
    })
  }
}
