import { UnauthorizedException } from '@nestjs/common'
import { UserService } from 'src/user/user.service'
import { AuthService } from './auth.service'

export class AuthServiceImpl extends AuthService {
  constructor(protected userService: UserService) {
    super(userService)
  }

  async signIn(email: string, pass: string): Promise<string> {
    const user = await this.userService.findOne(email)
    if (user?.password !== pass) {
      throw new UnauthorizedException()
    }

    // const { password, ...result } = user
    // TODO
    return pass
  }
}
