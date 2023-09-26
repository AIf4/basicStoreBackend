import { PartialType } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    description: number;
  
    @IsString()
    sku: string;
  
    @IsString()
    imageurl: string;
  
    @IsString()
    precio: string;
  
    @IsString()
    stock: number;

    @IsArray()
    tags: [];
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}


