import { Inject, Injectable } from '@nestjs/common';
import { Comedian } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { STORAGE_SERVICE } from '../storage/storage.module';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class ComedianService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject(STORAGE_SERVICE)
    private readonly storageService: StorageService,
  ) {}

  public async createComedian(
    payload: Omit<Comedian, 'id' | 'createdAt' | 'updatedAt'>,
  ) {
    this.storageService.writeFile('test.txt', 'test');
    return await this.prismaService.comedian.create({ data: payload });
  }

  public async getAllComedians() {
    return await this.prismaService.comedian.findMany();
  }

  public async getComedianById(id: string) {
    return await this.prismaService.comedian.findUnique({
      where: {
        id,
      },
    });
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
