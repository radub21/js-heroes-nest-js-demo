import { OmitType } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';
import { ComedianDto } from './comedian.dto';

export class CreateComedianDto extends OmitType(ComedianDto, [
  'createdAt',
  'id',
  'updatedAt',
]) {
  @Transform(({ value }: TransformFnParams) => {
    return new Date(value);
  })
  birthDate: Date;
}
