import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BorrowRequest, RequestStatus } from './entities/borrow-request.entity';
import { CreateRequestDto } from './dto/create-request.dto';

@Injectable()
export class BorrowRequestsService {
  constructor(
    @InjectRepository(BorrowRequest)
    private requestRepo: Repository<BorrowRequest>,
  ) {}

  async create(createRequestDto: CreateRequestDto): Promise<BorrowRequest> {
    const request = this.requestRepo.create({
      tool_id: createRequestDto.tool_id,
      borrower: { id: parseInt(createRequestDto.borrower_id) } as any,
    });
    return this.requestRepo.save(request);
  }

  async findAll(): Promise<BorrowRequest[]> {
    return this.requestRepo.find({ relations: { borrower: true } });
  }

  async approve(id: string): Promise<BorrowRequest> {
    const request = await this.requestRepo.findOneBy({ id });
    if (!request) throw new NotFoundException('Borrow request not found');

    request.status = RequestStatus.APPROVED;
    return this.requestRepo.save(request);
  }

  async reject(id: string): Promise<BorrowRequest> {
    const request = await this.requestRepo.findOneBy({ id });
    if (!request) throw new NotFoundException('Borrow request not found');

    request.status = RequestStatus.REJECTED;
    return this.requestRepo.save(request);
  }
}