import { IsUUID, IsNotEmpty } from 'class-validator';

export class TransactionDto {
  @IsUUID()
  @IsNotEmpty()
  transaction_id!: string;
}