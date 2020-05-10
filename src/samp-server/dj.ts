import { ApiApplication } from "../application";
import { RadioInfoRepository, UcpComandosRepository } from "../repositories";
import { RadioInfo, UcpComandos } from "../models";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import * as IcecastMonitor from "icecast-monitor";
import { parseCmd } from "../services";

export async function radioMonitor(app: ApiApplication) {
  const ucpComandos = await app.getRepository(UcpComandosRepository);
  const radioInfoRepository = await app.getRepository(RadioInfoRepository);
  // const contasMgsRepository = await app.getRepository(ContasMgsRepository);
  // const contasRpgRepository = await app.getRepository(ContasRpgRepository);

  const monitor = new IcecastMonitor.default({
    host: process.env.RADIO_HOST,
    port: process.env.RADIO_PORT,
    user: process.env.RADIO_ADMIN,
    password: process.env.RADIO_ADMIN_PASSWORD,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getSource = (source: string): any => {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any,no-shadow
      monitor.getSource(source, (err: any, source: any) => {
        if (err) return reject(err);

        resolve(source);
      })
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  monitor.createFeed((err: any, feed: any) => {
    if (err) return console.error('>> monitor.createFeed ', err);

    // Handle wildcard events
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    feed.on('*', (event: any, data: any, raw: any) => {
      // console.log('>>>>>> event ', event, data, raw);
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    feed.on('mount.artist', async (data: any, artist: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const source = await getSource('/brz');

      await updateRadioInfo({
        musicaAtual: source.title,

      }, radioInfoRepository);

      await sendCommand(ucpComandos, `msg ${parseCmd(`[Rádio BRZ] Tocando agora: ${artist} - ${source.title} (Digite /radiobrz para ouvir)`)}`);
    });

    // Handle usual events
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    feed.on('mount.listeners', async (listeners: any, raw: any) => {
      await updateRadioInfo({
        ouvintes: listeners,
      }, radioInfoRepository);
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    feed.on('server.sources', async (sources: any) => {
      if (sources > 0) {
        await updateRadioInfo({
          radioLigada: '1',
          dj: 'BRZ',
        }, radioInfoRepository);

        await sendCommand(ucpComandos, `msg ${parseCmd(`[Rádio BRZ] Um novo DJ acabou de iniciar a transmissão. (Digite /radiobrz para ouvir)`)}`);
        await sendCommand(ucpComandos, `msg ${parseCmd(`Utilize o comando /dj solicitar para pedir músicas`)}`);
      } else {
        await updateRadioInfo({
          radioLigada: '0',
          dj: '',
        }, radioInfoRepository);

        await sendCommand(ucpComandos, `msg ${parseCmd(`[Rádio BRZ] O DJ desligou a transmissão :(`)}`);
      }
    });
  });

  // const buscarConta = async (where: object) => {
  //   const contaMgs = await contasMgsRepository.findOne({where: where});
  //   const contaRpg = await contasRpgRepository.findOne({where: where});
  //
  //   if (contaMgs) {
  //     return contaMgs;
  //   } else if (contaRpg) {
  //     return contaRpg;
  //   }
  //
  //   return null;
  // }
}

const sendCommand = (ucpComandos: UcpComandosRepository, cmd: string) => {
  const comando = new UcpComandos();
  comando.comando = cmd;

  return ucpComandos.save(comando);
}

const updateRadioInfo = async (radioInfo: {
  radioTitulo?: string;
  musicaAtual?: string;
  ouvintes?: string;
  maximoOuvintes?: string;
  ouvintesLista?: string;
  totalVisitas?: string;
  radioLigada?: string;
  dj?: string;
  djIp?: string;
}, radioInfoRepository: RadioInfoRepository) => {
  const infos = await radioInfoRepository.find();
  let info: RadioInfo;

  if (infos?.length) {
    info = infos[0];
  } else {
    info = new RadioInfo();
  }

  if (radioInfo.radioTitulo) {
    info.radioTitulo = radioInfo.radioTitulo;
  }

  if (radioInfo.musicaAtual) {
    info.musicaAtual = radioInfo.musicaAtual;
  }

  if (radioInfo.ouvintes) {
    info.ouvintes = radioInfo.ouvintes;
  }

  if (radioInfo.maximoOuvintes) {
    info.maximoOuvintes = radioInfo.maximoOuvintes;
  }

  if (radioInfo.ouvintesLista) {
    info.ouvintesLista = radioInfo.ouvintesLista;
  }

  if (radioInfo.totalVisitas) {
    info.totalVisitas = radioInfo.totalVisitas;
  }

  if (radioInfo.radioLigada) {
    info.radioLigada = radioInfo.radioLigada;
  }

  if (radioInfo.dj) {
    info.dj = radioInfo.dj;
  }

  if (radioInfo.djIp) {
    info.djIp = radioInfo.djIp;
  }

  return radioInfoRepository.save(info);
}
