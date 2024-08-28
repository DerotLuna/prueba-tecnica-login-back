import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private _usersRepository: typeof User,
  ) {}

  async findOne(email: string): Promise<User | undefined> {
    return await this._usersRepository.findOne({ where: { email } });
  }
}
