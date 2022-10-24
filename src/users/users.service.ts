import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
  //   const promise: Promise<string> = new Promise<string>((resolve, reject) => {
  //     setTimeout(() => {
  //       reject('rejected');
  //     }, 1000);
  //   });
  //   try {
  //     const str = await promise;
  //     console.log(str);
  //   } catch (e) {
  //     return e;
  //   }
  //   return 'ok';
  // }

  //   const function1 = (id: number) => {
  //     return id + 1;
  //   };
  //   const bigFunction = (func) => {
  //     console.log(3);
  //     return 'ok';
  //   };
  // setTimeout ((id: number) => {
  //   return id + 1;
  // }, 3000)
  //   return bigFunction(function1);

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
