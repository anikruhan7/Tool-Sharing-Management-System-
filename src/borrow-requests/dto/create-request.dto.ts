import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateRequestDto {
  @IsUUID()
  @IsNotEmpty()
  tool_id!: string;

  @IsUUID()
  @IsNotEmpty()
  borrower_id!: string;
}