import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'uuid' })
  request_id!: string;

  @CreateDateColumn()
  borrowed_date!: Date;

  @Column({ type: 'timestamp', nullable: true })
  return_date!: Date;

  @Column({ type: 'varchar', default: 'Active' })
  transaction_status!: string;
}