
// import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

// @Injectable()
// export class UsersService {
// //   private users = [];
//   private users: CreateUserDto[] = [];


//   create(createUserDto: CreateUserDto) {
//     this.users.push(createUserDto);

//     return {
//       message: 'User Created',
//       data: createUserDto,
//     };
//   }

//   findAll() {
//     return this.users;
//   }

//   findOne(id: number) {
//     return this.users[id];
//   }

//   update(id: number, dto: UpdateUserDto) {
//     return {
//       message: `User ${id} updated`,
//     };
//   }

//   remove(id: number) {
//     return {
//       message: `User ${id} deleted`,
//     };
//   }
// }

// importand code
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

// import { User } from './entities/user.entity';
// import { CreateUserDto } from './dto/create-user.dto';


// @Injectable()
// export class UsersService {

//   constructor(
//     @InjectRepository(User)
//     private userRepository: Repository<User>,
//   ){}


//   async create(createUserDto: CreateUserDto){

//     const user = this.userRepository.create(createUserDto);

//     return this.userRepository.save(user);
//   }


//   async findByEmail(email:string){

//     return this.userRepository.findOne({
//       where:{
//         email
//       }
//     });

//   }


//   async findAll(){

//     return this.userRepository.find();

//   }


//   async findOne(id:number){

//     return this.userRepository.findOne({
//       where:{id}
//     });

//   }

// }



/////////

import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { User } from './entities/user.entity';

import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {


constructor(
@InjectRepository(User)
private userRepository:Repository<User>,
){}



async create(createUserDto:CreateUserDto){

const user =
this.userRepository.create(createUserDto);


return this.userRepository.save(user);

}



async findByEmail(email:string){

return this.userRepository.findOne({
where:{
email
}
});

}



async findAll(){

return this.userRepository.find();

}



async findOne(id:number){

return this.userRepository.findOne({
where:{
id
}
});

}



// UPDATE USER

async update(id:number,dto:any){

await this.userRepository.update(id,dto);


return {
message:"User updated successfully"
};

}



// DELETE USER

async remove(id:number){

await this.userRepository.delete(id);


return {
message:"User deleted successfully"
};

}


}