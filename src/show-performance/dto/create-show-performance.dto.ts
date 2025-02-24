import { OmitType } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { ShowPerformanceDto } from './show-performance.dto';

export class CreateShowPerformanceDto extends OmitType(ShowPerformanceDto, [
  'id',
]) {
  @Transform(({ value }: { value: string }): Date => {
    return new Date(value);
  })
  performanceDate: Date;
}
