import { IsUUID, IsNotEmpty } from 'class-validator';

export class ReturnToolDto {
  @IsUUID()
  @IsNotEmpty()
  transaction_id!: string;
}