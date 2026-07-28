import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { OneToMany } from 'typeorm';
import { Tool } from '../../tools/entities/tool.entity';

export enum UserRole {
  ADMIN = 'Admin',
  OWNER = 'Owner',
  BORROWER = 'Borrower',
}

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.BORROWER,
  })
  role: UserRole;


  
  @OneToMany(
()=>Tool,
tool=>tool.owner
)
tools:Tool[];
 
}