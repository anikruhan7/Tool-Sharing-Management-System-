import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tool } from './entities/tool.entity';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';

@Injectable()
export class ToolsService {
  constructor(
    @InjectRepository(Tool)
    private toolRepository: Repository<Tool>,
  ) {}

  async create(dto: CreateToolDto, owner: any) {
    const tool = this.toolRepository.create({
      ...dto,
      owner,
    });
    return this.toolRepository.save(tool);
  }

  findAll() {
    return this.toolRepository.find();
  }

  findOne(id: string) {
    return this.toolRepository.findOne({
      where: { id },
    });
  }
  async update(id: string, dto: UpdateToolDto) {
    await this.toolRepository.update(id, dto);
    return {
      message: 'Tool updated successfully',
    };
  }
  async remove(id: string) {
    await this.toolRepository.delete(id);
    return {
      message: 'Tool deleted successfully',
    };
  }
}