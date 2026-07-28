import { Controller, Get, Post, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { ReturnToolDto } from './dto/return-tool.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('return')
  returnTool(@Body() returnToolDto: ReturnToolDto) {
    return this.transactionsService.returnTool(returnToolDto);
  }

  @Get('history')
  getHistory() {
    return this.transactionsService.getHistory();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.transactionsService.findOne(id);
  }
}