import {
 Injectable,
 UnauthorizedException
} from '@nestjs/common';


import { UsersService } from '../users/users.service';

import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService{


constructor(

private usersService:UsersService,

private jwtService:JwtService

){}



// Register

async register(data:any){


const hashedPassword =
await bcrypt.hash(data.password,10);


const user =
await this.usersService.create({

...data,

password:hashedPassword

});


return {

message:"User registered successfully",

user

};


}



// Login

async login(email:string,password:string){


const user =
await this.usersService.findByEmail(email);



if(!user){

throw new UnauthorizedException(
"Invalid credentials"
);

}



const match =
await bcrypt.compare(
password,
user.password
);



if(!match){

throw new UnauthorizedException(
"Invalid credentials"
);

}



const payload={

sub:user.id,

email:user.email,

role:user.role

};



return {


access_token:

this.jwtService.sign(payload)


};


}



}