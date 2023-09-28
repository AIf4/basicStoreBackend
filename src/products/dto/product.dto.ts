import { PartialType } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  sku: string;

  @IsString()
  imageurl: string;

  @IsNumber()
  price: number;

  @IsNumber()
  stock: number;

  @IsOptional()
  @IsArray()
  tags: string[];
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
