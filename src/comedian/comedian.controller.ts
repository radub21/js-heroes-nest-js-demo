import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ComedianService } from './comedian.service';
import { ComedianDto } from './dto/comedian.dto';
import { CreateComedianDto } from './dto/create-comedian.dto';
import { UpdateComedianDto } from './dto/update-comedian.dto';

@Controller('comedian')
export class ComedianController {
  constructor(private readonly comedianService: ComedianService) {}

  @Get('/:id')
  public async getComedianById(
    @Param('id') id: string,
  ): Promise<ComedianDto | null> {
    return await this.comedianService.getComedianById(id);
  }

  @Get()
  public async getAllComedians(): Promise<ComedianDto[]> {
    return await this.comedianService.getAllComedians();
  }

  @Post()
  public async createComedian(@Body() newComedian: CreateComedianDto) {
    await this.comedianService.createComedian(newComedian);
  }

  @Patch(':id')
  public async updateComedian(
    @Param('id') id: string,
    @Body() updatedComedian: UpdateComedianDto,
  ) {
    await this.comedianService.updateComedian(id, updatedComedian);
  }

  @Delete(':id')
  public async deleteComedian(@Param('id') id: string) {
    await this.comedianService.deleteComedian(id);
  }
}
