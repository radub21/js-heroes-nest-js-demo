import { OmitType } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { ComedianDto } from './comedian.dto';

export class CreateComedianDto extends OmitType(ComedianDto, [
  'id',
  'createdAt',
  'updatedAt',
]) {
  @Transform(({ value }: { value: string }): Date => {
    return new Date(value);
  })
  birthDate: Date;
}
