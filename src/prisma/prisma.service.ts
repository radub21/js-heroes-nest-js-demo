import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(private readonly prismaClient: PrismaClient) {
    super();
  }

  public async onModuleInit() {
    await this.prismaClient.$connect();
  }
}
