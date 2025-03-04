import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class ComedianDto {
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  name: string;

  @IsDate()
  birthDate: Date;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsString()
  bio?: string;
}
