import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}, name: "configs"})
export class Configs extends Entity {
  // Define well-known properties here

  @property({
    type: 'number',
    generated: true,
    required: true,
    id: true,
  })
  _id: string;

  @property({
    type: 'string',
    generated: false,
    required: true,
  })
  __UID: string;

  @property({
    type: 'number',
  })
  Automacao: number;

  @property({
    type: 'number',
  })
  AutomacaoHr: number;

  @property({
    type: 'number',
  })
  PremioAcumulado: number;

  @property({
    type: 'number',
  })
  BilheteAcumulado: number;

  @property({
    type: 'number',
  })
  Dia: number;

  @property({
    type: 'number',
  })
  Hora: number;

  @property({
    type: 'number',
  })
  Dias: number;

  @property({
    type: 'number',
  })
  Meses: number;

  @property({
    type: 'number',
  })
  Anos: number;

  @property({
    type: 'number',
  })
  Semanas: number;

  @property({
    type: 'number',
  })
  MelhorFamiliaProp: number;

  @property({
    type: 'number',
  })
  UltimoMarcado: number;

  @property({
    type: 'number',
  })
  UltimoMarcado2: number;

  @property({
    type: 'number',
  })
  UltimoMarcado3: number;

  @property({
    type: 'number',
  })
  Policiais: number;

  @property({
    type: 'number',
  })
  Criminosos: number;

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Configs>) {
    super(data);
  }
}

export interface ConfigsRelations {
  // describe navigational properties here
}

export type ConfigsWithRelations = Configs & ConfigsRelations;
