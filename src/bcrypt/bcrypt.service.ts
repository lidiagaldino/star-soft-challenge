import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
  salt: number = 8

  async hash(password: string) {
    return await bcrypt.hash(password, this.salt)
  }

  async compare(password: string, hash: string) {
    return await bcrypt.compare(password, hash)
  }
}
