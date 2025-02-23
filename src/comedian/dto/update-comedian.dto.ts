import { PartialType } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { CreateComedianDto } from './create-comedian.dto';

export class UpdateComedianDto extends PartialType(CreateComedianDto) {
  @Transform(({ value }: { value: string }) => new Date(value))
  birthDate: Date;
}
