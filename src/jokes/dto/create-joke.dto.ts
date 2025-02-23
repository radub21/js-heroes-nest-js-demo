import { OmitType } from '@nestjs/swagger';
import { JokeDto } from './joke.dto';

export class CreateJokeDto extends OmitType(JokeDto, ['id']) {}
