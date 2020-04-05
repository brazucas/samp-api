import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}, name: "impostos"})
export class Impostos extends Entity {
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
  DiaDoIPTU: number;

  @property({
    type: 'number',
  })
  DiaDoSeguro: number;

  @property({
    type: 'number',
  })
  DiaDoPlanoDeSaude: number;

  @property({
    type: 'number',
  })
  DiaDoEmprestimo: number;

  @property({
    type: 'number',
  })
  DiaDoCartao: number;

  @property({
    type: 'number',
  })
  DiaDoIPVA: number;

  @property({
    type: 'number',
  })
  DiaDoIR: number;

  @property({
    type: 'number',
  })
  HoraDoIR: number;

  @property({
    type: 'number',
  })
  HoraDoIPTU: number;

  @property({
    type: 'number',
  })
  HoraDoSeguro: number;

  @property({
    type: 'number',
  })
  HoraDoPlanoDeSaude: number;

  @property({
    type: 'number',
  })
  HoraDoEmprestimo: number;

  @property({
    type: 'number',
  })
  HoraDoCartao: number;

  @property({
    type: 'number',
  })
  HoraDoIPVA: number;

  @property({
    type: 'number',
  })
  IPVA: number;

  @property({
    type: 'number',
  })
  IPTU: number;

  @property({
    type: 'number',
  })
  IR_PJ: number;

  @property({
    type: 'number',
  })
  IR_PF: number;

  @property({
    type: 'number',
  })
  SEGURO_VEICULOS: number;

  @property({
    type: 'number',
  })
  SEGURO_PROPRIEDADES: number;

  @property({
    type: 'number',
  })
  PLANO_DE_SAUDE: number;

  @property({
    type: 'number',
  })
  TRATAMENTO_MEDICO: number;

  @property({
    type: 'number',
  })
  TARIFA_AUTOTAXI: number;

  @property({
    type: 'number',
  })
  TARIFA_DEPOSITO: number;

  @property({
    type: 'number',
  })
  CARTAO: number;

  @property({
    type: 'number',
  })
  MULTAS_TRANSITO: number;

  @property({
    type: 'number',
  })
  TAXA_HOTEL: number;

  @property({
    type: 'number',
  })
  PREMIO_PARK: number;

  @property({
    type: 'number',
  })
  EXTRA: number;

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Impostos>) {
    super(data);
  }
}

export interface ImpostosRelations {
  // describe navigational properties here
}

export type ImpostosWithRelations = Impostos & ImpostosRelations;
