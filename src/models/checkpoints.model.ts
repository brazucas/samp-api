import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'checkpoints'}}
})
export class Checkpoints extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'NICK', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nick: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'MINIGAME_ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  minigameId: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'PARTIDA_ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  partidaId: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'CHECKPOINT_ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  checkpointId: number;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'DISTANCIA_DO_ANTERIOR', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  distanciaDoAnterior: number;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'PLAYERX', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  playerx: number;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'PLAYERY', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  playery: number;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'PLAYERZ', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  playerz: number;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'TEMPO', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  tempo: number;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'TEMPO_TRECHO', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  tempoTrecho: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'VELOCIDADE_FUNC', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  velocidadeFunc: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'VELOCIDADE_CALC', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  velocidadeCalc: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'TIMESTAMP', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  timestamp: number;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'HORA', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  hora: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Checkpoints>) {
    super(data);
  }
}

export interface CheckpointsRelations {
  // describe navigational properties here
}

export type CheckpointsWithRelations = Checkpoints & CheckpointsRelations;
