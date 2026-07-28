import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

import { User } from '../../users/entities/user.entity';


@Entity()
export class Tool {


  @PrimaryGeneratedColumn()
  id:number;


  @Column()
  tool_name:string;


  @Column()
  description:string;


  @Column()
  category:string;


  @Column({
    default:true
  })
  availability:boolean;



  @ManyToOne(
    ()=>User,
    user=>user.tools,
    {
      eager:true
    }
  )
  owner:User;



  @CreateDateColumn()
  created_at:Date;


}