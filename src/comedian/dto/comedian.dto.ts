import { IsDate, IsOptional, IsString } from 'class-validator';

export class ComedianDto {
  @IsString({ message: 'ID must be a string' })
  id: string;

  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsDate({ message: 'Birth date must be a valid date' })
  birthDate: Date;

  @IsDate({ message: 'Created at must be a valid date' })
  createdAt: Date;

  @IsDate({ message: 'Updated at must be a valid date' })
  updatedAt: Date;

  @IsString({ message: 'Bio must be a string when provided' })
  @IsOptional()
  bio: string | null;
}
