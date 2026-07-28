import { Controller, Get, Post, Body, Patch, Param, ParseUUIDPipe } from '@nestjs/common';
import { BorrowRequestsService } from './borrow-requests.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Controller('requests')
export class BorrowRequestsController {
  constructor(private readonly requestsService: BorrowRequestsService) {}

  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestsService.create(createRequestDto);
  }

  @Get()
  findAll() {
    return this.requestsService.findAll();
  }

  @Patch(':id/approve')
  approve(@Param('id', ParseUUIDPipe) id: string) {
    return this.requestsService.approve(id);
  }

  @Patch(':id/reject')
  reject(@Param('id', ParseUUIDPipe) id: string) {
    return this.requestsService.reject(id);
  }
}