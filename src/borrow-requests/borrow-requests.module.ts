import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BorrowRequestsService } from './borrow-requests.service';
import { BorrowRequestsController } from './borrow-requests.controller';
import { BorrowRequest } from './entities/borrow-request.entity';

@Module({

  imports: [TypeOrmModule.forFeature([BorrowRequest])], 
  controllers: [BorrowRequestsController], 
  providers: [BorrowRequestsService], 
  
})
export class BorrowRequestsModule {}