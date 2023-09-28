import { PartialType } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsDate()
  updateDate: Date;

  @IsString()
  type: string;

  @IsNumber()
  previousPrice: number;

  @IsNumber()
  newPrice: number;

  @IsNumber()
  previousStock: number;

  @IsNumber()
  newStock: number;

  @IsString()
  notes: string;

  @IsString()
  product: string;
}

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {}
