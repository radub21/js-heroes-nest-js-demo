import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';

@Module({
  controllers: [JokesController],
  providers: [JokesService, PrismaService],
})
export class JokesModule {}
