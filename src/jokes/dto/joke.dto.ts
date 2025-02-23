import { IsString } from 'class-validator';

export class JokeDto {
  @IsString()
  id: string;

  @IsString()
  comedianId: string;

  @IsString()
  content: string;
}
