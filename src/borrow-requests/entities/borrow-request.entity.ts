import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

export enum RequestStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
}

@Entity('borrow_requests')
export class BorrowRequest {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('uuid')
  tool_id!: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'borrower_id' })
  borrower!: User;

  @CreateDateColumn({ type: 'date' })
  request_date!: Date;

  @Column({
    type: 'enum',
    enum: RequestStatus,
    default: RequestStatus.PENDING,
  })
  status: RequestStatus = RequestStatus.PENDING;
}