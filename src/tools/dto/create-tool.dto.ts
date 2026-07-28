import {
IsString,
IsNotEmpty
}
from 'class-validator';


export class CreateToolDto{


@IsString()
@IsNotEmpty()
tool_name:string;



@IsString()
description:string;



@IsString()
category:string;


}