import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComedianModule } from './comedian/comedian.module';
import { JokesModule } from './jokes/jokes.module';
import { MonitoringModule } from './monitoring/monitoring.module';
import { PrismaModule } from './prisma/prisma.module';
import { ShowPerformanceModule } from './show-performance/show-performance.module';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [
    MonitoringModule,
    ConfigModule.forRoot(),
    PrismaModule,
    ComedianModule,
    JokesModule,
    ShowPerformanceModule,
    StorageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
