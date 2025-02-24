import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComedianModule } from './comedian/comedian.module';
import { MonitoringModule } from './monitoring/monitoring.module';
import { PrismaModule } from './prisma/prisma.module';
import { JokesModule } from './jokes/jokes.module';
import { ShowPerformanceModule } from './show-performance/show-performance.module';

@Module({
  imports: [
    MonitoringModule,
    ConfigModule.forRoot(),
    PrismaModule,
    ComedianModule,
    JokesModule,
    ShowPerformanceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
