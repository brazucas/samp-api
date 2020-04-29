// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


import { inject } from "@loopback/context";
import { post, Request, requestBody, RestBindings } from "@loopback/rest";
import { Credentials } from "../services";
import { PasswordHasherBindings, TokenServiceBindings, UserServiceBindings } from "../keys";
import { TokenService, UserService } from "@loopback/authentication";
import { ContasRpg } from "../models";
import { PasswordHasher } from "../services/hash.password.bcryptjs";

export class LoginController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request,
              @inject(UserServiceBindings.USER_SERVICE) public userService: UserService<ContasRpg, Credentials>,
              @inject(PasswordHasherBindings.PASSWORD_HASHER) public passwordHasher: PasswordHasher,
              @inject(TokenServiceBindings.TOKEN_SERVICE) public jwtService: TokenService) {
  }

  @post('/login')
  async login(
    @requestBody() credentials: Credentials,
  ): Promise<{ token: string }> {
    // ensure the user exists, and the password is correct
    const user = await this.userService.verifyCredentials(credentials);

    // convert a User object into a UserProfile object (reduced set of properties)
    const userProfile = this.userService.convertToUserProfile(user);

    // create a JSON Web Token based on the user profile
    const token = await this.jwtService.generateToken(userProfile);

    return {token};
  }
}
