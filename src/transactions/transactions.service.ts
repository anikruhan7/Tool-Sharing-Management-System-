import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction, TransactionStatus } from './entities/transaction.entity';
import { ReturnToolDto } from './dto/return-tool.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepo: Repository<Transaction>,
  ) {}

  async returnTool(returnToolDto: ReturnToolDto): Promise<Transaction> {
    const transaction = await this.transactionRepo.findOneBy({ 
      id: returnToolDto.transaction_id 
    });

    if (!transaction) {
      throw new NotFoundException('Transaction not found');
    }

    transaction.transaction_status = TransactionStatus.RETURNED;
    transaction.return_date = new Date(); 

    return this.transactionRepo.save(transaction);
  }

  async getHistory(): Promise<Transaction[]> {
    return this.transactionRepo.find({ relations: { request: true } });
  }

  async findOne(id: string): Promise<Transaction> {
    const transaction = await this.transactionRepo.findOne({
      where: { id },
      relations: { request: true },
    });

    if (!transaction) throw new NotFoundException('Transaction not found');
    return transaction;
  }
}