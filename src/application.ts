import { BootMixin } from '@loopback/boot';
import { ApplicationConfig } from '@loopback/core';
import { RestExplorerBindings, RestExplorerComponent, } from '@loopback/rest-explorer';
import { RepositoryMixin } from '@loopback/repository';
import { RestApplication } from '@loopback/rest';
import { ServiceMixin } from '@loopback/service-proxy';
import path from 'path';
import { JwtAuthenticationSequence } from './sequence';
import { AuthenticationComponent, registerAuthenticationStrategy } from "@loopback/authentication";
import { JWTAuthenticationStrategy } from "./authentication-strategies/jwt-strategy";
import { PasswordHasherBindings, TokenServiceBindings, TokenServiceConstants, UserServiceBindings } from "./keys";
import { JWTService } from "./services/jwt-service";
import { BcryptHasher } from "./services/hash.password.bcryptjs";
import { BrzUserService } from "./services/user.service";

export class ApiApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    // this.sequence(MySequence);
    this.sequence(JwtAuthenticationSequence);

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    registerAuthenticationStrategy(this, JWTAuthenticationStrategy);

    this.setUpBindings();

    this.bind('datasources.config.mongo').to({
      name: "mongo",
      connector: "mongodb",
      url: process.env.MONGODB_URL,
      host: "localhost",
      port: 27023,
      user: "",
      password: "",
      database: "rpgmgs",
      useNewUrlParser: true,
      debug: true
    });

    this.bind('datasources.config.mysql').to({
      name: "mysql",
      connector: "mysql",
      url: process.env.MYSQL_URL,
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      useNewUrlParser: true,
      debug: true
    });

    this.component(AuthenticationComponent);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }

  setUpBindings(): void {
    // ...

    this.bind(TokenServiceBindings.TOKEN_SECRET).to(
      TokenServiceConstants.TOKEN_SECRET_VALUE,
    );

    this.bind(TokenServiceBindings.TOKEN_EXPIRES_IN).to(
      TokenServiceConstants.TOKEN_EXPIRES_IN_VALUE,
    );

    this.bind(TokenServiceBindings.TOKEN_SERVICE).toClass(JWTService);

    this.bind(PasswordHasherBindings.ROUNDS).to(10);
    this.bind(PasswordHasherBindings.PASSWORD_HASHER).toClass(BcryptHasher);

    this.bind(UserServiceBindings.USER_SERVICE).toClass(BrzUserService);
  }
}
