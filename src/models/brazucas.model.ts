import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}, name: "brazucas"})
export class Brazucas extends Entity {
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
  ArrecadacaoR: number;

  @property({
    type: 'number',
  })
  Arrecadacao: number;

  @property({
    type: 'number',
  })
  TempBan_ID_0_UnbanTime: number;

  @property({
    type: 'number',
  })
  Gamemode: number;

  @property({
    type: 'number',
  })
  BondeParado: number;

  @property({
    type: 'number',
  })
  Crimes: number;

  @property({
    type: 'number',
  })
  TempoEstacao: number;

  @property({
    type: 'number',
  })
  BrazucasAutos: number;

  @property({
    type: 'number',
  })
  PrefeitoAtual: number;

  @property({
    type: 'number',
  })
  Candidato1: number;

  @property({
    type: 'number',
  })
  Candidato2: number;

  @property({
    type: 'number',
  })
  Candidato3: number;

  @property({
    type: 'number',
  })
  Candidatos: number;

  @property({
    type: 'number',
  })
  Votos: number;

  @property({
    type: 'number',
  })
  VotosCandidato1: number;

  @property({
    type: 'number',
  })
  VotosCandidato2: number;

  @property({
    type: 'number',
  })
  VotosCandidato3: number;

  @property({
    type: 'number',
  })
  PeriodoEleitoral: number;

  @property({
    type: 'number',
  })
  DiasDoPeriodo: number;

  @property({
    type: 'number',
  })
  ArrecadacaoD: number;

  @property({
    type: 'number',
  })
  Hospitalizados: number;

  @property({
    type: 'number',
  })
  Mortes: number;

  @property({
    type: 'number',
  })
  BrazucasImoveis: number;

  @property({
    type: 'number',
  })
  Presos: number;

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Brazucas>) {
    super(data);
  }
}

export interface BrazucasRelations {
  // describe navigational properties here
}

export type BrazucasWithRelations = Brazucas & BrazucasRelations;
