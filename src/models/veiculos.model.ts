import { Entity, model, property } from '@loopback/repository';

@model({settings: {strict: false}, name: "veiculos"})
export class Veiculos extends Entity {
  static variaveisPublicas = [
    "__UID", "sx", "sy", "sz", "sa", "propriedade", "dono", "modelo", "cor1", "cor2", "valor", "ValorOriginal"
  ];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

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
    type: 'string',
  })
  propriedade: string;

  @property({
    type: 'number',
  })
  dono: number;

  @property({
    type: 'number',
  })
  modelo: number;

  @property({
    type: 'number',
  })
  sx: number;

  @property({
    type: 'number',
  })
  sy: number;

  @property({
    type: 'number',
  })
  sz: number;

  @property({
    type: 'number',
  })
  sa: number;

  @property({
    type: 'number',
  })
  cor1: number;

  @property({
    type: 'number',
  })
  cor2: number;

  @property({
    type: 'number',
  })
  comp1: number;

  @property({
    type: 'number',
  })
  comp2: number;

  @property({
    type: 'number',
  })
  comp3: number;

  @property({
    type: 'number',
  })
  comp4: number;

  @property({
    type: 'number',
  })
  comp5: number;

  @property({
    type: 'number',
  })
  comp6: number;

  @property({
    type: 'number',
  })
  comp7: number;

  @property({
    type: 'number',
  })
  comp8: number;

  @property({
    type: 'number',
  })
  comp9: number;

  @property({
    type: 'number',
  })
  comp10: number;

  @property({
    type: 'number',
  })
  comp11: number;

  @property({
    type: 'number',
  })
  comp12: number;

  @property({
    type: 'number',
  })
  comp13: number;

  @property({
    type: 'number',
  })
  comp14: number;

  @property({
    type: 'number',
  })
  comp15: number;

  @property({
    type: 'number',
  })
  comp16: number;

  @property({
    type: 'number',
  })
  comp17: number;

  @property({
    type: 'number',
  })
  grafite: number;

  @property({
    type: 'number',
  })
  Gasolina: number;

  @property({
    type: 'number',
  })
  Oleo: number;

  @property({
    type: 'number',
  })
  Radiador: number;

  @property({
    type: 'number',
  })
  valor: number;

  @property({
    type: 'number',
  })
  ValorOriginal: number;

  @property({
    type: 'number',
  })
  Seguro: number;

  @property({
    type: 'number',
  })
  BancoSeguro: number;

  @property({
    type: 'number',
  })
  VeiculoDaPropriedade: number;

  @property({
    type: 'number',
  })
  Interior: number;

  @property({
    type: 'number',
  })
  VirtualWorld: number;

  @property({
    type: 'number',
  })
  Rastreador: number;

  @property({
    type: 'number',
  })
  CDPlayer: number;

  @property({
    type: 'number',
  })
  VeiculoTrancado: number;

  @property({
    type: 'number',
  })
  Quilometragem: number;

  @property({
    type: 'number',
  })
  Bateria: number;

  @property({
    type: 'number',
  })
  GasTanque: number;

  @property({
    type: 'number',
  })
  TurboTempo: number;

  @property({
    type: 'number',
  })
  Pneu0: number;

  @property({
    type: 'number',
  })
  Pneu1: number;

  @property({
    type: 'number',
  })
  Pneu2: number;

  @property({
    type: 'number',
  })
  Pneu3: number;

  @property({
    type: 'number',
  })
  Blindagem: number;

  @property({
    type: 'number',
  })
  TravaAutomatica: number;

  @property({
    type: 'number',
  })
  AptoMulta: number;

  @property({
    type: 'number',
  })
  Multas: number;

  @property({
    type: 'number',
  })
  ApreendidoDETRAN: number;

  @property({
    type: 'number',
  })
  sxA: number;

  @property({
    type: 'number',
  })
  syA: number;

  @property({
    type: 'number',
  })
  szA: number;

  @property({
    type: 'number',
  })
  saA: number;

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
  NoDeposito: number;

  @property({
    type: 'number',
  })
  GPS: number;

  @property({
    type: 'number',
  })
  ABS: number;

  constructor(data?: Partial<Veiculos>) {
    super(data);
  }
}

export interface VeiculosRelations {
  // describe navigational properties here
}

export type VeiculosWithRelations = Veiculos & VeiculosRelations;
