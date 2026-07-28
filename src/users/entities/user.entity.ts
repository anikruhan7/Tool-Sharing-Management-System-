import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Tool } from '../../tools/entities/tool.entity';

export enum UserRole {
  ADMIN = 'Admin',
  OWNER = 'Owner',
  BORROWER = 'Borrower',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ type: 'varchar', nullable: true })
  phone!: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.BORROWER,
  })
  role!: UserRole;

  @CreateDateColumn()
  created_at!: Date;

  @OneToMany(() => Tool, (tool) => tool.owner)
  tools!: Tool[];
}