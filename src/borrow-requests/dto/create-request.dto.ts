import { IsUUID, IsNotEmpty, IsInt } from 'class-validator';

export class CreateRequestDto {
  @IsInt()
  @IsNotEmpty()
  tool_id!: string;

  @IsInt()
  @IsNotEmpty()
  borrower_id!: string; 
}