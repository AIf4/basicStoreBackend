import { PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateTagDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class UpdateTagDto extends PartialType(CreateTagDto) {}
