import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Casas extends Entity {
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
  px: number;

  @property({
    type: 'number',
  })
  py: number;

  @property({
    type: 'number',
  })
  pz: number;

  @property({
    type: 'number',
  })
  pa: number;

  @property({
    type: 'number',
  })
  AV: number;

  @property({
    type: 'number',
  })
  Especial: number;

  @property({
    type: 'string',
  })
  Proprietario: string;

  @property({
    type: 'string',
  })
  Referencia: string;

  @property({
    type: 'number',
  })
  ValorOriginal: number;

  @property({
    type: 'number',
  })
  ValorDeVenda: number;

  @property({
    type: 'number',
  })
  Vila: number;

  @property({
    type: 'string',
  })
  Chave1: string;

  @property({
    type: 'string',
  })
  Chave2: string;

  @property({
    type: 'string',
  })
  Chave3: string;

  @property({
    type: 'number',
  })
  Saidax: number;

  @property({
    type: 'number',
  })
  Saiday: number;

  @property({
    type: 'number',
  })
  Saidaz: number;

  @property({
    type: 'number',
  })
  Saidaa: number;

  @property({
    type: 'number',
  })
  PortaEntradax: number;

  @property({
    type: 'number',
  })
  PortaEntraday: number;

  @property({
    type: 'number',
  })
  PortaEntradaz: number;

  @property({
    type: 'number',
  })
  Entradax: number;

  @property({
    type: 'number',
  })
  Entraday: number;

  @property({
    type: 'number',
  })
  Entradaz: number;

  @property({
    type: 'number',
  })
  PortaSaidax: number;

  @property({
    type: 'number',
  })
  PortaSaiday: number;

  @property({
    type: 'number',
  })
  PortaSaidaz: number;

  @property({
    type: 'number',
  })
  Interior: number;

  @property({
    type: 'number',
  })
  Entradaa: number;

  @property({
    type: 'number',
  })
  VirtualWorld: number;

  @property({
    type: 'number',
  })
  CasaDaPropriedade: number;

  @property({
    type: 'number',
  })
  Arma_Slot_5: number;

  @property({
    type: 'number',
  })
  Balas_Slot_5: number;

  @property({
    type: 'number',
  })
  Trancada: number;

  @property({
    type: 'number',
  })
  CompradoImobiliaria: number;

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Casas>) {
    super(data);
  }
}

export interface CasasRelations {
  // describe navigational properties here
}

export type CasasWithRelations = Casas & CasasRelations;
