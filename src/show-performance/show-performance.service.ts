import { Injectable } from '@nestjs/common';
import { ShowPerformance } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ShowPerformanceService {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(
    payload: Omit<ShowPerformance, 'id' | 'createdAt' | 'updatedAt'>,
  ) {
    return await this.prismaService.showPerformance.create({
      data: payload,
    });
  }

  public async findAll() {
    return await this.prismaService.showPerformance.findMany();
  }

  public async findOne(id: string) {
    return await this.prismaService.showPerformance.findUnique({
      where: {
        id,
      },
    });
  }

  public async update(id: string, payload: Partial<ShowPerformance>) {
    return await this.prismaService.showPerformance.update({
      where: {
        id,
      },
      data: payload,
    });
  }

  public async remove(id: string) {
    return await this.prismaService.showPerformance.delete({
      where: {
        id,
      },
    });
  }
}
