import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TagsService } from '../services/tags.service';
import { CreateTagDto, UpdateTagDto } from '../dto/tag.dto';

@ApiTags('tags')
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  @Get()
  findAll() {
    return this.tagsService.findAll();
  }

  @Post('/by-name')
  findByName(@Body() tagsNames: []) {
    return this.tagsService.findByName(tagsNames);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tagsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateTagDto) {
    return this.tagsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagsService.remove(+id);
  }
}
