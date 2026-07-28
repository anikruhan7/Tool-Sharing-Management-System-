import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { TransactionDto } from './dto/transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {}

  async returnTool(returnToolDto: TransactionDto): Promise<Transaction> {
    const transaction = await this.transactionRepository.findOneBy({ 
      id: returnToolDto.transaction_id 
    });

    if (!transaction) {
      throw new NotFoundException('Transaction not found');
    }

    transaction.return_date = new Date();
    transaction.transaction_status = 'Returned'; // Changed to align with Borrowed/Returned enum requirement

    return await this.transactionRepository.save(transaction);
  }

  async getHistory(): Promise<Transaction[]> {
    return await this.transactionRepository.find();
  }

  async findOne(id: string): Promise<Transaction> {
    const transaction = await this.transactionRepository.findOneBy({ id });
    if (!transaction) {
      throw new NotFoundException('Transaction not found');
    }
    return transaction;
  }
  async generateReports() {
    const totalTransactions = await this.transactionRepository.count();
    const activeBorrows = await this.transactionRepository.countBy({ transaction_status: 'Borrowed' });
    const returnedTools = await this.transactionRepository.countBy({ transaction_status: 'Returned' });

    return {
      message: 'Transaction Report Generated',
      total_transactions: totalTransactions,
      currently_borrowed: activeBorrows,
      successfully_returned: returnedTools
    };
  }
}