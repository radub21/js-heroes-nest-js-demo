import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BaseStorage } from '../storage/base-storage';
import { STORAGE_PROVIDER } from '../storage/storage.module';
import { ComedianService } from './comedian.service';
import { CreateComedianDto } from './dto/create-comedian.dto';
import { UpdateComedianDto } from './dto/update-comedian.dto';

@Controller('comedian')
export class ComedianController {
  constructor(
    private readonly comedianService: ComedianService,
    @Inject(STORAGE_PROVIDER)
    private readonly storageService: BaseStorage,
  ) {}

  @Post()
  create(@Body() createComedianDto: CreateComedianDto) {
    this.storageService.read('yolo');
    return this.comedianService.create(createComedianDto);
  }

  @Get()
  findAll() {
    return this.comedianService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comedianService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateComedianDto: UpdateComedianDto,
  ) {
    return this.comedianService.update(+id, updateComedianDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comedianService.remove(+id);
  }
}
