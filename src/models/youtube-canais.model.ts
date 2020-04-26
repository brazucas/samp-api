import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'youtube_canais'}}
})
export class YoutubeCanais extends Entity {
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
    type: 'string',
    required: true,
    length: 45,
    mysql: {columnName: 'YT_USER', dataType: 'varchar', dataLength: 45, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  ytUser: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'YT_PASS', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  ytPass: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'YT_SOURCE', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  ytSource: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'CANAL_KEY', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  canalKey: string;

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

  constructor(data?: Partial<YoutubeCanais>) {
    super(data);
  }
}

export interface YoutubeCanaisRelations {
  // describe navigational properties here
}

export type YoutubeCanaisWithRelations = YoutubeCanais & YoutubeCanaisRelations;
