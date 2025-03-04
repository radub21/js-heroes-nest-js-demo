import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateComedianDto } from './dto/create-comedian.dto';
import { UpdateComedianDto } from './dto/update-comedian.dto';

@Injectable()
export class ComedianService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(payload: CreateComedianDto) {
    return await this.prismaService.comedian.create({
      data: payload,
    });
  }

  findAll() {
    return `This action returns all comedian`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comedian`;
  }

  update(id: number, updateComedianDto: UpdateComedianDto) {
    return `This action updates a #${id} comedian`;
  }

  remove(id: number) {
    return `This action removes a #${id} comedian`;
  }
}
