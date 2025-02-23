import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateJokeDto } from './dto/create-joke.dto';
import { JokeDto } from './dto/joke.dto';
import { UpdateJokeDto } from './dto/update-joke.dto';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Post()
  create(@Body() createJokeDto: CreateJokeDto) {
    return this.jokesService.create(createJokeDto);
  }

  @Get()
  findAll(): Promise<JokeDto[]> {
    return this.jokesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<JokeDto | null> {
    return this.jokesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJokeDto: UpdateJokeDto) {
    return this.jokesService.update(id, updateJokeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jokesService.remove(id);
  }
}
