import { bind, BindingScope, Provider } from '@loopback/core';
import { repository } from "@loopback/repository";
import { UcpComandosRepository } from "../repositories";
import { UcpComandos } from "../models";
import { HttpErrors } from "@loopback/rest";

/*
 * Fix the service type. Possible options can be:
 * - import {Comando} from 'your-module';
 * - export type Comando = string;
 * - export interface Comando {}
 */
export type Comando = unknown;

@bind({scope: BindingScope.TRANSIENT})
export class ComandoProvider implements Provider<Comando> {
  constructor(@repository(UcpComandosRepository) public ucpComandosRepository: UcpComandosRepository) {
  }

  value() {
    // Add your implementation here
    return this;
  }

  private async sendCommand(command: string, params?: string, waitResponse = true, delay?: number, nick?: string): Promise<string | null> {
    const comando = new UcpComandos();

    if (params) {
      comando.comando = `${command} ${params}`;
    } else {
      comando.comando = command;
    }

    if (delay) {
      comando.executarEm = delay;
    }

    if (nick) {
      comando.nick = nick;
    }

    const stored = await this.ucpComandosRepository.save(comando);

    if (waitResponse) {
      return new Promise((resolve, reject) => {
        const id = stored.id;

        let ticks = 1;

        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        const interval: NodeJS.Timeout = setInterval(async () => {
          const retrieve = await this.ucpComandosRepository.findById(id);

          if (retrieve.executado === 1) {
            if (retrieve.resposta === 'NULL') {
              resolve(null);
            } else {
              resolve(retrieve.resposta);
            }
            return clearInterval(interval);
          }

          if (ticks > 10) {
            reject(new HttpErrors.RequestTimeout("O comando não foi executado pelo servidor após 10 tentativas."));
          }

          ++ticks;
        }, 1000);
      });
    } else {
      return null;
    }
  }

  public conectados() {
    return this.sendCommand(TipoComando.CONECTADOS);
  }

  public atualizarbd(tabela: string) {
    return this.sendCommand(TipoComando.ATUALIZAR_BD, tabela);
  }

  public setFileValue(arquivo: string, chave: string, valor: string) {
    return this.sendCommand(TipoComando.SET_FILE_VALUE, [arquivo, chave, valor].join(' '));
  }

  public getFileValue(arquivo: string, chave: string) {
    return this.sendCommand(TipoComando.GET_FILE_VALUE, [arquivo, chave].join(' '));
  }

  public unsetFileValue(arquivo: string, chave: string) {
    return this.sendCommand(TipoComando.UNSET_FILE_VALUE, [arquivo, chave].join(' '));
  }

  public chutar(playerid: number) {
    return this.sendCommand(TipoComando.CHUTAR, playerid + '');
  }

  public banir(nick: string, gamemode: Gamemode) {
    return this.sendCommand(TipoComando.BANIR, [nick, gamemode].join(' '));
  }

  public adicionarDinheiro(nick: string, quantidade: number) {
    return this.sendCommand(TipoComando.ADICIONAR_DINHEIRO, [nick, quantidade].join(' '));
  }

  public adicionarCreditos(nick: string, quantidade: number) {
    return this.sendCommand(TipoComando.ADICIONAR_CREDITOS, [nick, quantidade].join(' '));
  }

  public atribuirBem(tipo: TipoBem, nick: string, idBem: string, tipoValor: TipoValor, valor: number, aVenda: number) {
    return this.sendCommand(TipoComando.ATRIBUIR_BEM, [tipo, nick, idBem, tipoValor, valor, aVenda].join(' '));
  }

  public mensagem(texto: string) {
    return this.sendCommand(TipoComando.MSG, parseCmd(texto));
  }
}

export enum TipoComando {
  CONECTADOS = 'conectados',
  ATUALIZAR_BD = 'atualizarbd',
  SET_FILE_VALUE = 'set',
  GET_FILE_VALUE = 'get',
  UNSET_FILE_VALUE = 'unset',
  CHUTAR = 'chutar',
  BANIR = 'banir',
  CRIAR_ANEXO = 'criaranexo',
  EXCLUIR_ANEXO = 'excluiranexo',
  PERSONALIZAR_SKIN = 'personalizarskin',
  ADICIONAR_CREDITOS = 'ac',
  ADICIONAR_DINHEIRO = 'ad',
  ATRIBUIR_BEM = 'atribuirbem',
  BANIR_IP = 'banirip',
  DESBANIR = 'desbanir',
  RCON = 'rcon',
  DESBANIR_IP = 'desbanirip',
  PAINEL_MSG = 'psay',
  PROXIMO_MINIGAME = 'pmg',
  CHAT_MODERADOR = 'mchat',
  CHAT_FAMILIA = 'fchat',
  DEATH_MESSAGE = 'dmessage',
  MSG = 'msg',
  PLAY_SOUND = 'play',
  DISPLAY = 'display',
  LOAD_FILTERSCRIPT = 'loadfs',
  UNLOAD_FILTERSCRIPT = 'unloadfs',
  RELOAD_FILTERSCRIPT = 'reloadfs',
  MSG_PRIVATE = 'pmsg',
  CREATE_MGS_ACCOUNT = 'rmgs',
  CREATE_RPG_ACCOUNT = 'rrpg',
  CREATE_RPG_ACCOUNT_ESPECIAL = 'rrpgmgs',
  REMOVE_FILE = 'dfile',
  SET_VEHICLE = 'setarveiculos',
}

export enum Gamemode {
  RPG = 0,
  MINIGAMES = 1,
}

export enum TipoBem {
  VEICULO = 1,
  CASA = 2,
  PROPRIEDADE = 3,
}

export enum TipoValor {
  CREDITOS = 1,
  COMUM = 0,
}

export const parseCmd = (cmd: string) => {
  return cmd.replace(/ /g, "|");
}
