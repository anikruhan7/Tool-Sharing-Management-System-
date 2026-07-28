import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Tool } from './entities/tool.entity';

import { ToolsController } from './tools.controller';

import { ToolsService } from './tools.service';

import { AuthModule } from '../auth/auth.module';



@Module({

imports:[

TypeOrmModule.forFeature([Tool]),

AuthModule

],


controllers:[
ToolsController
],


providers:[
ToolsService
]


})

export class ToolsModule {}