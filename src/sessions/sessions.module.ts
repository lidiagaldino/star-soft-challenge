import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { JwtService } from '@nestjs/jwt';
import { BcryptService } from '../bcrypt/bcrypt.service';
import { UsersService } from '../users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [SessionsController],
  providers: [JwtService, BcryptService, SessionsService, UsersService],
})
export class SessionsModule { }
