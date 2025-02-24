import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Comedian } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { StorageLocalService } from '../storage/storage-local/storage-local.service';
import { StorageProductionService } from '../storage/storage-production/storage-production.service';

@Injectable()
export class ComedianService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly storageLocalService: StorageLocalService,
    private readonly storageProductionService: StorageProductionService,
    private readonly configService: ConfigService<NodeJS.ProcessEnv>,
  ) {}

  private storageService() {
    if (this.configService.get('NODE_ENV') === 'development') {
      return this.storageLocalService;
    }

    return this.storageProductionService;
  }

  public async createComedian(
    payload: Omit<Comedian, 'id' | 'createdAt' | 'updatedAt'>,
  ) {
    this.storageService().writeFile('test.txt', 'test');
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
