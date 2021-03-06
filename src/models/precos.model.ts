import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'UCP_PROD', table: 'precos'}}})
export class Precos extends Entity {
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
    mysql: {columnName: 'PrecoGasolina', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  precoGasolina?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PrecoAlcool', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  precoAlcool?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PrecoDiesel', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  precoDiesel?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PrecoAditivada', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  precoAditivada?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PrecoQuerosene', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  precoQuerosene?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCerveja', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pCerveja?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PRefrigerante', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pRefrigerante?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PWhisky', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pWhisky?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PSanduiche', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pSanduiche?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PBigZuca', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pBigZuca?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PPizza', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pPizza?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PQuentinha', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pQuentinha?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCafe', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pCafe?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PRedBull', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pRedBull?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCaldo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pCaldo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCelular', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pCelular?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PRevisao', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pRevisao?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PFaca', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pFaca?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PTravas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pTravas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PRadio', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pRadio?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PFazerMotor', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pFazerMotor?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PNoteBook', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pNoteBook?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCDPlayer', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pcdPlayer?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PAlarmeR', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pAlarmeR?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PSocoIngles', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pSocoIngles?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PParaquedas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pParaquedas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PFlores', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pFlores?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCamera', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pCamera?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PPatins', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pPatins?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PAlarmeV', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pAlarmeV?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PBateria', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pBateria?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PIscas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pIscas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PImunizantes', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pImunizantes?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PEstepes', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pEstepes?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PSementes', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pSementes?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PTurbo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pTurbo?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PVara', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pVara?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PAntiFurto', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pAntiFurto?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PBlindagem', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pBlindagem?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PPassagem', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pPassagem?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PBengala', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pBengala?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PKatana', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pKatana?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PSerraEletrica', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pSerraEletrica?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PGPS', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pgps?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PAutomatico', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pAutomatico?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PAlarme', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pAlarme?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PRastreador', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pRastreador?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PABS', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pabs?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PLimitador', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pLimitador?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PPa', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pPa?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PVibrador', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pVibrador?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PPneus', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pPneus?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'P9mm', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  p9mm?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'P9mmS', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  p9mmS?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PDesertEagle', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pDesertEagle?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PUzi', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pUzi?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PTec9', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pTec9?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PSMG', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  psmg?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PEscopeta', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pEscopeta?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PEscopetaS', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pEscopetaS?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PEscopetaC', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pEscopetaC?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PAK47', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pak47?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PM4', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pm4?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PRifle', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pRifle?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PSniper', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pSniper?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PGranadas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pGranadas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PMolotov', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pMolotov?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PMina', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pMina?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PFlash', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pFlash?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PDinamites', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pDinamites?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PSmoke', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pSmoke?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PBarril', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pBarril?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PColete', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pColete?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCamuflagem', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pCamuflagem?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PLancaChamas', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pLancaChamas?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PLancaMisseis', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pLancaMisseis?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PExtintor', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pExtintor?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PTacoGolf', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pTacoGolf?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PTacoBilhar', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pTacoBilhar?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PTacoBaseball', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pTacoBaseball?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PPrancha', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pPrancha?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Comissao', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  comissao?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'POculos', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pOculos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCapacete', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pCapacete?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PNeon', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pNeon?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PChapeu', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pChapeu?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PMochila', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pMochila?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PGarra', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pGarra?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PMascara', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pMascara?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCompressor', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pCompressor?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PBalao', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pBalao?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PTeaser', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pTeaser?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PCurativos', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pCurativos?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PTratamento', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pTratamento?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PKitMedico', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pKitMedico?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PGlicose', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pGlicose?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PReanimar', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pReanimar?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'PPlanoDeSaude', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pPlanoDeSaude?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Precos>) {
    super(data);
  }
}

export interface PrecosRelations {
  // describe navigational properties here
}

export type PrecosWithRelations = Precos & PrecosRelations;
