import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { BcryptService } from '../bcrypt/bcrypt.service';

@Injectable()
export class SessionsService {
  constructor(
    private readonly usersService: UsersService,
    private readonly bcryptService: BcryptService,
    private jwtService: JwtService
  ) { }
  async create(createSessionDto: CreateSessionDto) {
    const user = await this.usersService.findByEmail(createSessionDto.email)
    if (!user) throw new ForbiddenException()

    const isPasswordValid = await this.bcryptService.compare(createSessionDto.password, user.password)
    if (!isPasswordValid) throw new ForbiddenException()
    const payload = { email: user.email, sub: user.id }
    return { token: await this.jwtService.signAsync(payload, { secret: process.env.JWT_SECRET, expiresIn: '7d' }) }
  }
}
