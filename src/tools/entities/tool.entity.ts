import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,CreateDateColumn,} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('tools')
export class Tool {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  tool_name!: string;

  @Column()
  description!: string;

  @Column()
  category!: string;

  @Column({ default: true })
  availability!: boolean;

  @ManyToOne(() => User, (user) => user.tools, { eager: true })
  owner!: User;

  @CreateDateColumn()
  created_at!: Date;
}