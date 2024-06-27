import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { BcryptService } from '../bcrypt/bcrypt.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly bcryptService: BcryptService,
  ) { }
  async create(createUserDto: CreateUserDto) {
    const password = await this.bcryptService.hash(createUserDto.password)
    const user = this.usersRepository.create({ email: createUserDto.email, password })
    return await this.usersRepository.save(user);
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ where: { email } })
    if (!user) throw new NotFoundException()
    return user;
  }
}
