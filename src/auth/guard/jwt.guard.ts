import {
CanActivate,
ExecutionContext,
Injectable
}
from '@nestjs/common';


import { JwtService } from '@nestjs/jwt';


@Injectable()

export class JwtGuard implements CanActivate{


constructor(
private jwtService:JwtService
){}



canActivate(
context:ExecutionContext
){


const request =
context.switchToHttp()
.getRequest();



const token =
request.headers.authorization
?.split(" ")[1];



if(!token)
return false;



const user =
this.jwtService.verify(token);



request.user=user;



return true;


}



}