import {
Controller,
Get,
Post,
Patch,
Delete,
Body,
Param,
UseGuards,
Request
}
from '@nestjs/common';



import { ToolsService } from './tools.service';


import { CreateToolDto } from './dto/create-tool.dto';

import { UpdateToolDto } from './dto/update-tool.dto';


import { JwtGuard } from '../auth/guard/jwt.guard';

import { RolesGuard } from '../auth/guard/roles.guard';

import { Roles } from '../auth/decorators/roles.decorator';



@Controller('tools')
export class ToolsController{


constructor(
private toolsService:ToolsService
){}




// Only Owner can create tool

@Post()

@UseGuards(JwtGuard,RolesGuard)

@Roles('Owner')

create(

@Body() dto:CreateToolDto,

@Request() req

){


return this.toolsService.create(

dto,

req.user

);

}





@Get()

findAll(){

return this.toolsService.findAll();

}





@Get(':id')

findOne(
@Param('id') id:string
){

return this.toolsService.findOne(+id);

}






@Patch(':id')

@UseGuards(JwtGuard,RolesGuard)

@Roles('Owner')

update(

@Param('id') id:string,

@Body() dto:UpdateToolDto

){


return this.toolsService.update(
+id,
dto
);

}





@Delete(':id')

@UseGuards(JwtGuard,RolesGuard)

@Roles('Owner')

remove(
@Param('id') id:string
){


return this.toolsService.remove(+id);

}



}