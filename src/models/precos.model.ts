import { Entity, model, property } from '@loopback/repository';

@model({settings: {strict: false}})
export class Precos extends Entity {
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
    type: 'number',
  })
  PrecoGasolina: number;

  @property({
    type: 'number',
  })
  PrecoAlcool: number;

  @property({
    type: 'number',
  })
  PrecoDiesel: number;

  @property({
    type: 'number',
  })
  PrecoAditivada: number;

  @property({
    type: 'number',
  })
  PrecoQuerosene: number;

  @property({
    type: 'number',
  })
  PCerveja: number;

  @property({
    type: 'number',
  })
  PRefrigerante: number;

  @property({
    type: 'number',
  })
  PWhisky: number;

  @property({
    type: 'number',
  })
  PSanduiche: number;

  @property({
    type: 'number',
  })
  PBigZuca: number;

  @property({
    type: 'number',
  })
  PPizza: number;

  @property({
    type: 'number',
  })
  PQuentinha: number;

  @property({
    type: 'number',
  })
  PCafe: number;

  @property({
    type: 'number',
  })
  PRedBull: number;

  @property({
    type: 'number',
  })
  PCaldo: number;

  @property({
    type: 'number',
  })
  PCelular: number;

  @property({
    type: 'number',
  })
  PRevisao: number;

  @property({
    type: 'number',
  })
  PFaca: number;

  @property({
    type: 'number',
  })
  PTravas: number;

  @property({
    type: 'number',
  })
  PRadio: number;

  @property({
    type: 'number',
  })
  PFazerMotor: number;

  @property({
    type: 'number',
  })
  PNoteBook: number;

  @property({
    type: 'number',
  })
  PCDPlayer: number;

  @property({
    type: 'number',
  })
  PAlarmeR: number;

  @property({
    type: 'number',
  })
  PSocoIngles: number;

  @property({
    type: 'number',
  })
  PParaquedas: number;

  @property({
    type: 'number',
  })
  PFlores: number;

  @property({
    type: 'number',
  })
  PCamera: number;

  @property({
    type: 'number',
  })
  PPatins: number;

  @property({
    type: 'number',
  })
  PAlarmeV: number;

  @property({
    type: 'number',
  })
  PBateria: number;

  @property({
    type: 'number',
  })
  PIscas: number;

  @property({
    type: 'number',
  })
  PImunizantes: number;

  @property({
    type: 'number',
  })
  PEstepes: number;

  @property({
    type: 'number',
  })
  PSementes: number;

  @property({
    type: 'number',
  })
  PTurbo: number;

  @property({
    type: 'number',
  })
  PVara: number;

  @property({
    type: 'number',
  })
  PAntiFurto: number;

  @property({
    type: 'number',
  })
  PBlindagem: number;

  @property({
    type: 'number',
  })
  PPassagem: number;

  @property({
    type: 'number',
  })
  PBengala: number;

  @property({
    type: 'number',
  })
  PKatana: number;

  @property({
    type: 'number',
  })
  PSerraEletrica: number;

  @property({
    type: 'number',
  })
  PGPS: number;

  @property({
    type: 'number',
  })
  PAutomatico: number;

  @property({
    type: 'number',
  })
  PAlarme: number;

  @property({
    type: 'number',
  })
  PRastreador: number;

  @property({
    type: 'number',
  })
  PABS: number;

  @property({
    type: 'number',
  })
  PLimitador: number;

  @property({
    type: 'number',
  })
  PPa: number;

  @property({
    type: 'number',
  })
  PVibrador: number;

  @property({
    type: 'number',
  })
  PPneus: number;

  @property({
    type: 'number',
  })
  P9mm: number;

  @property({
    type: 'number',
  })
  P9mmS: number;

  @property({
    type: 'number',
  })
  PDesertEagle: number;

  @property({
    type: 'number',
  })
  PUzi: number;

  @property({
    type: 'number',
  })
  PTec9: number;

  @property({
    type: 'number',
  })
  PSMG: number;

  @property({
    type: 'number',
  })
  PEscopeta: number;

  @property({
    type: 'number',
  })
  PEscopetaS: number;

  @property({
    type: 'number',
  })
  PEscopetaC: number;

  @property({
    type: 'number',
  })
  PAK47: number;

  @property({
    type: 'number',
  })
  PM4: number;

  @property({
    type: 'number',
  })
  PRifle: number;

  @property({
    type: 'number',
  })
  PSniper: number;

  @property({
    type: 'number',
  })
  PGranadas: number;

  @property({
    type: 'number',
  })
  PMolotov: number;

  @property({
    type: 'number',
  })
  PMina: number;

  @property({
    type: 'number',
  })
  PFlash: number;

  @property({
    type: 'number',
  })
  PDinamites: number;

  @property({
    type: 'number',
  })
  PSmoke: number;

  @property({
    type: 'number',
  })
  PBarril: number;

  @property({
    type: 'number',
  })
  PColete: number;

  @property({
    type: 'number',
  })
  PCamuflagem: number;

  @property({
    type: 'number',
  })
  PLancaChamas: number;

  @property({
    type: 'number',
  })
  PLancaMisseis: number;

  @property({
    type: 'number',
  })
  PExtintor: number;

  @property({
    type: 'number',
  })
  PTacoGolf: number;

  @property({
    type: 'number',
  })
  PTacoBilhar: number;

  @property({
    type: 'number',
  })
  PTacoBaseball: number;

  @property({
    type: 'number',
  })
  PPrancha: number;

  @property({
    type: 'number',
  })
  Comissao: number;

  @property({
    type: 'number',
  })
  POculos: number;

  @property({
    type: 'number',
  })
  PCapacete: number;

  @property({
    type: 'number',
  })
  PCurativos: number;

  @property({
    type: 'number',
  })
  PTratamento: number;

  @property({
    type: 'number',
  })
  PKitMedico: number;

  @property({
    type: 'number',
  })
  PGlicose: number;

  @property({
    type: 'number',
  })
  PReanimar: number;

  @property({
    type: 'number',
  })
  PPlanoDeSaude: number;

  @property({
    type: 'number',
  })
  PNeon: number;

  @property({
    type: 'number',
  })
  PChapeu: number;

  @property({
    type: 'number',
  })
  PMochila: number;

  @property({
    type: 'number',
  })
  PGarra: number;

  @property({
    type: 'number',
  })
  PMascara: number;

  @property({
    type: 'number',
  })
  PCompressor: number;

  @property({
    type: 'number',
  })
  PBalao: number;

  @property({
    type: 'number',
  })
  PTeaser: number;

  constructor(data?: Partial<Precos>) {
    super(data);
  }
}

export interface PrecosRelations {
  // describe navigational properties here
}

export type PrecosWithRelations = Precos & PrecosRelations;
