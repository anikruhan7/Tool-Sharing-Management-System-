import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionDto } from './dto/transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('return')
  returnTool(@Body() returnToolDto: TransactionDto) {
    return this.transactionsService.returnTool(returnToolDto);
  }

  @Get('history')
  getHistory() {
    return this.transactionsService.getHistory();
  }

  @Get('reports')
  generateReports() {
    return this.transactionsService.generateReports();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionsService.findOne(id);
  }
}