import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('borrow_requests')
export class BorrowRequest {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'uuid' })
  tool_id!: string;

  @Column({ type: 'int' })
  borrower_id!: number;

  @Column({ type: 'varchar', default: 'Pending' })
  status!: string;

  @CreateDateColumn()
  request_date!: Date;
}