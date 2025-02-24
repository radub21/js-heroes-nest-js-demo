import { PartialType } from '@nestjs/swagger';
import { CreateShowPerformanceDto } from './create-show-performance.dto';

export class UpdateShowPerformanceDto extends PartialType(
  CreateShowPerformanceDto,
) {}
