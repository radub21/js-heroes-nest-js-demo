import { Injectable } from '@nestjs/common';
import { Joke } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class JokesService {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(payload: Omit<Joke, 'id' | 'createdAt' | 'updatedAt'>) {
    return await this.prismaService.joke.create({
      data: payload,
    });
  }

  public async findAll(): Promise<Joke[]> {
    return await this.prismaService.joke.findMany();
  }

  public async findOne(id: string): Promise<Joke | null> {
    return await this.prismaService.joke.findUnique({
      where: {
        id,
      },
    });
  }

  public async update(id: string, payload: Partial<Joke>) {
    return await this.prismaService.joke.update({
      where: {
        id,
      },
      data: payload,
    });
  }

  public async remove(id: string): Promise<Joke> {
    return await this.prismaService.joke.delete({
      where: {
        id,
      },
    });
  }
}
