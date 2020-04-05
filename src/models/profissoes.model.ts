import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Profissoes extends Entity {
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
  DESEMPREGADO?: number;

  @property({
    type: 'number',
  })
  TAXISTA?: number;

  @property({
    type: 'number',
  })
  VENDEDOR_CARROS?: number;

  @property({
    type: 'number',
  })
  CORRETOR?: number;

  @property({
    type: 'number',
  })
  ASSASSINO?: number;

  @property({
    type: 'number',
  })
  PROMOTER?: number;

  @property({
    type: 'number',
  })
  JUIZ?: number;

  @property({
    type: 'number',
  })
  SEGURANÇA?: number;

  @property({
    type: 'number',
  })
  MOTORISTA_PARTICULAR?: number;

  @property({
    type: 'number',
  })
  POLICIAL_CIVIL?: number;

  @property({
    type: 'number',
  })
  DETRAN?: number;

  @property({
    type: 'number',
  })
  POLICIAL_FEDERAL?: number;

  @property({
    type: 'number',
  })
  CAMELO?: number;

  @property({
    type: 'number',
  })
  ADVOGADO?: number;

  @property({
    type: 'number',
  })
  INSTRUTOR?: number;

  @property({
    type: 'number',
  })
  COVEIRO?: number;

  @property({
    type: 'number',
  })
  PILOTO?: number;

  @property({
    type: 'number',
  })
  JORNALISTA?: number;

  @property({
    type: 'number',
  })
  ENFERMEIRO?: number;

  @property({
    type: 'number',
  })
  BOMBEIRO?: number;

  @property({
    type: 'number',
  })
  PIZZABOY?: number;

  @property({
    type: 'number',
  })
  TRAFICANTE?: number;

  @property({
    type: 'number',
  })
  LIXEIRO?: number;

  @property({
    type: 'number',
  })
  FRENTISTA?: number;

  @property({
    type: 'number',
  })
  LOCADOR_CARROS?: number;

  @property({
    type: 'number',
  })
  VENDEDOR_ARMAS?: number;

  @property({
    type: 'number',
  })
  MECANICO?: number;

  @property({
    type: 'number',
  })
  BANCARIO?: number;

  @property({
    type: 'number',
  })
  INVESTIGADOR?: number;

  @property({
    type: 'number',
  })
  MOTORISTA_PUBLICO?: number;

  @property({
    type: 'number',
  })
  HACKER?: number;

  @property({
    type: 'number',
  })
  CAMINHONEIRO?: number;

  @property({
    type: 'number',
  })
  AGRICULTOR?: number;

  @property({
    type: 'number',
  })
  CORREGEDORIA?: number;

  @property({
    type: 'number',
  })
  PREFEITO?: number;

  @property({
    type: 'number',
  })
  MAFIA?: number;

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Profissoes>) {
    super(data);
  }
}

export interface ProfissoesRelations {
  // describe navigational properties here
}

export type ProfissoesWithRelations = Profissoes & ProfissoesRelations;
