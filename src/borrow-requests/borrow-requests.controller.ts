import { Controller, Post, Get, Patch, Body, Param } from '@nestjs/common';
import { BorrowRequestsService } from './borrow-requests.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Controller('requests')
export class BorrowRequestsController {
  constructor(private readonly borrowRequestsService: BorrowRequestsService) {}

  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.borrowRequestsService.create(createRequestDto);
  }

  @Get()
  findAll() {
    return this.borrowRequestsService.findAll();
  }

  @Patch(':id/approve')
  approve(@Param('id') id: string) {
    return this.borrowRequestsService.approve(id);
  }

  @Patch(':id/reject')
  reject(@Param('id') id: string) {
    return this.borrowRequestsService.reject(id);
  }
}