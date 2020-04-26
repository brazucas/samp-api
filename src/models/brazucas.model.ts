import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'brazucas'}}})
export class Brazucas extends Entity {
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
    length: 50,
    mysql: {columnName: 'Gamemode', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  gamemode?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Dia', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  dia?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Hora', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  hora?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PremioAcumulado', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  premioAcumulado?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ArrecadacaoR', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  arrecadacaoR?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Arrecadacao', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  arrecadacao?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Hospitalizados', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  hospitalizados?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Crimes', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  crimes?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Dias', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  dias?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Semanas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  semanas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PontosGrove', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pontosGrove?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PontosVagos', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pontosVagos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PontosAztecas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pontosAztecas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PontosBallas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pontosBallas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PontosRifas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pontosRifas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PontosTriads', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pontosTriads?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Mortes', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  mortes?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'BrazucasAutos', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  brazucasAutos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'BrazucasImoveis', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  brazucasImoveis?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Presos', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  presos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'ArrecadacaoD', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  arrecadacaoD?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Meses', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  meses?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PrefeitoAtual', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  prefeitoAtual?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Candidato1', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  candidato1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Candidato2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  candidato2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Candidato3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  candidato3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Candidatos', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  candidatos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Votos', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  votos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'VotosCandidato1', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  votosCandidato1?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'VotosCandidato2', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  votosCandidato2?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'VotosCandidato3', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  votosCandidato3?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PeriodoEleitoral', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  periodoEleitoral?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'DiasDoPeriodo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  diasDoPeriodo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Anos', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  anos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Automacao', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  automacao?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'AutomacaoHr', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  automacaoHr?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'minigame', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  minigame?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Fuso', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  fuso?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area4MinX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area4MinX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area4MinY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area4MinY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area4MaxX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area4MaxX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area4MaxY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area4MaxY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area6MinX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area6MinX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area6MinY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area6MinY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area6MaxX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area6MaxX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area6MaxY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area6MaxY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area1MinX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area1MinX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area1MinY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area1MinY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area1MaxX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area1MaxX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area1MaxY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area1MaxY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area5MinX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area5MinX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area5MinY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area5MinY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area5MaxX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area5MaxX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area5MaxY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area5MaxY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area2MinX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area2MinX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area2MinY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area2MinY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area2MaxX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area2MaxX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area2MaxY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area2MaxY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area3MinX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area3MinX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area3MinY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area3MinY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area3MaxX', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area3MaxX?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Area3MaxY', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  area3MaxY?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TempBan_ID_0_UnbanTime', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tempBanId_0UnbanTime?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'CheckPing', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  checkPing?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'MusicaTocando', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  musicaTocando?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TempBan_ID_0', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tempBanId_0?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TempBan_ID_0_IP', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tempBanId_0Ip?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'TempBan_ID_0_Name', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tempBanId_0Name?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'URLRadio', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  urlRadio?: string;

  // Define well-known properties here

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
