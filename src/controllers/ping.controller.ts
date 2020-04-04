import { get, Request, ResponseObject, RestBindings } from '@loopback/rest';
import { inject } from '@loopback/context';
import { ContasMgsRepository } from "../repositories";
import { repository } from "@loopback/repository";
import { ContasMgs } from "../models";

/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE: ResponseObject = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'PingResponse',
        properties: {
          greeting: {type: 'string'},
          date: {type: 'string'},
          url: {type: 'string'},
          headers: {
            type: 'object',
            properties: {
              'Content-Type': {type: 'string'},
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};

/**
 * A simple controller to bounce back http requests
 */
export class PingController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request,
              @repository(ContasMgsRepository) public contasMgsRepository: ContasMgsRepository) {
  }

  // Map to `GET /ping`
  @get('/ping', {
    responses: {
      '200': PING_RESPONSE,
    },
  })
  ping(): Promise<ContasMgs | null> {
    // Reply with a greeting, the current time, the url, and request headers
    return this.contasMgsRepository.findOne({where: {__UID: "Mandrakke_Army"}});
  }
}
