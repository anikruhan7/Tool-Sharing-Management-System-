import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
//   private users = [];
  private users: CreateUserDto[] = [];


  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);

    return {
      message: 'User Created',
      data: createUserDto,
    };
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users[id];
  }

  update(id: number, dto: UpdateUserDto) {
    return {
      message: `User ${id} updated`,
    };
  }

  remove(id: number) {
    return {
      message: `User ${id} deleted`,
    };
  }
}