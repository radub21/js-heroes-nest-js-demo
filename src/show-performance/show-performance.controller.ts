import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateShowPerformanceDto } from './dto/create-show-performance.dto';
import { UpdateShowPerformanceDto } from './dto/update-show-performance.dto';
import { ShowPerformanceService } from './show-performance.service';

@Controller('show-performance')
export class ShowPerformanceController {
  constructor(
    private readonly showPerformanceService: ShowPerformanceService,
  ) {}

  @Post()
  create(@Body() createShowPerformanceDto: CreateShowPerformanceDto) {
    return this.showPerformanceService.create(createShowPerformanceDto);
  }

  @Get()
  findAll() {
    return this.showPerformanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.showPerformanceService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShowPerformanceDto: UpdateShowPerformanceDto,
  ) {
    return this.showPerformanceService.update(id, updateShowPerformanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.showPerformanceService.remove(id);
  }
}
