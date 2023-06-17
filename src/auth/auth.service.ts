/* eslint-disable no-useless-constructor */

import { UserService } from 'src/user/user.service'

export abstract class AuthService {
  constructor(protected userService: UserService) {}

  abstract signIn(email: string, pass: string): Promise<string>
}
