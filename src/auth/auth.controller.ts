/* eslint-disable no-useless-constructor */
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { SignInDto } from './dto/signInDto'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    this.authService = authService
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(
    @Body()
    signInDto: SignInDto,
  ) {
    return this.authService.signIn(signInDto.email, signInDto.password)
  }
}
