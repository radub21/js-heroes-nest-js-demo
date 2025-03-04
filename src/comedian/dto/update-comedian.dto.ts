import { PartialType } from '@nestjs/mapped-types';
import { CreateComedianDto } from './create-comedian.dto';

export class UpdateComedianDto extends PartialType(CreateComedianDto) {}
