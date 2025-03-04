import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ComedianController } from './comedian.controller';
import { ComedianService } from './comedian.service';

@Module({
  imports: [PrismaModule],
  controllers: [ComedianController],
  providers: [ComedianService],
})
export class ComedianModule {}
