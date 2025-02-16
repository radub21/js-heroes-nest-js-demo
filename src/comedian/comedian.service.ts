import { Injectable } from '@nestjs/common';
import { Comedian } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ComedianService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getComedianById(id: string) {
    return await this.prismaService.comedian.findUnique({
      where: {
        id,
      },
    });
  }

  public async getAllComedians() {
    return await this.prismaService.comedian.findMany();
  }

  public async createComedian(
    payload: Omit<Comedian, 'id' | 'createdAt' | 'updatedAt'>,
  ) {
    return await this.prismaService.comedian.create({ data: payload });
  }

  public async updateComedian(id: Comedian['id'], payload: Partial<Comedian>) {
    return await this.prismaService.comedian.update({
      where: {
        id,
      },
      data: payload,
    });
  }

  public async deleteComedian(id: Comedian['id']) {
    return await this.prismaService.comedian.delete({
      where: {
        id,
      },
    });
  }
}
