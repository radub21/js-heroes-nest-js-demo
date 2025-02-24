import { IsDate, IsString } from 'class-validator';

export class ShowPerformanceDto {
  @IsString()
  id: string;

  @IsString()
  jokeId: string;

  @IsString()
  comedianId: string;

  @IsDate()
  performanceDate: Date;
}
