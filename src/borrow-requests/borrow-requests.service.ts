import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BorrowRequest } from './entities/borrow-request.entity';
import { CreateRequestDto } from './dto/create-request.dto'; 

@Injectable()
export class BorrowRequestsService {
  constructor(
    @InjectRepository(BorrowRequest)
    private requestRepository: Repository<BorrowRequest>,
  ) {}

  async create(createRequestDto: CreateRequestDto): Promise<BorrowRequest> {
    const request = this.requestRepository.create({
      ...createRequestDto,
      borrower_id: Number(createRequestDto.borrower_id),
    });
    return await this.requestRepository.save(request);
  }

  async findAll(): Promise<BorrowRequest[]> {
    return await this.requestRepository.find();
  }

  async approve(id: string): Promise<BorrowRequest> {
    const request = await this.requestRepository.findOneBy({ id });
    if (!request) {
      throw new NotFoundException('Borrow request not found');
    }
    request.status = 'Approved';
    return await this.requestRepository.save(request);
  }

  async reject(id: string): Promise<BorrowRequest> {
    const request = await this.requestRepository.findOneBy({ id });
    if (!request) {
      throw new NotFoundException('Borrow request not found');
    }
    request.status = 'Rejected';
    return await this.requestRepository.save(request);
  }
}