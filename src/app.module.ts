import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComedianModule } from './comedian/comedian.module';
import { MonitoringModule } from './monitoring/monitoring.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    MonitoringModule,
    ConfigModule.forRoot(),
    PrismaModule,
    ComedianModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
