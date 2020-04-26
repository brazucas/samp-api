import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'BLOQUEIO_POSICOES'}}
})
export class BloqueioPosicoes extends Entity {
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
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'MINIGAME', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  minigame?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: 'POSX', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  posx?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: 'POSY', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  posy?: number;

  @property({
    type: 'number',
    precision: 12,
    mysql: {columnName: 'POSZ', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'Y'},
  })
  posz?: number;

  @property({
    type: 'date',
    mysql: {columnName: 'DATA', dataType: 'timestamp', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  data?: string;

  @property({
    type: 'string',
    length: 45,
    mysql: {columnName: 'NICK', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nick?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BloqueioPosicoes>) {
    super(data);
  }
}

export interface BloqueioPosicoesRelations {
  // describe navigational properties here
}

export type BloqueioPosicoesWithRelations = BloqueioPosicoes & BloqueioPosicoesRelations;
