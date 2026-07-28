import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { BorrowRequest } from '../../borrow-requests/entities/borrow-request.entity';

export enum TransactionStatus {
  BORROWED = 'Borrowed',
  RETURNED = 'Returned',
}

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToOne(() => BorrowRequest)
  @JoinColumn({ name: 'request_id' })
  request!: BorrowRequest;

  @CreateDateColumn({ type: 'date' })
  borrowed_date!: Date;

  @Column({ type: 'date', nullable: true })
  return_date?: Date | null;

  @Column({
    type: 'enum',
    enum: TransactionStatus,
    default: TransactionStatus.BORROWED,
  })
  transaction_status: TransactionStatus = TransactionStatus.BORROWED;
}