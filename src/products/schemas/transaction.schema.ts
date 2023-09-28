// transaccion-producto.model.ts

import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from './product.schema';

@Schema()
export class Transaction extends Document {
  @Prop({ default: Date.now })
  updateDate: Date;

  @Prop({ enum: ['Cambio de Precio', 'Cambio de Stock'], required: true })
  type: string;

  @Prop()
  previousPrice: number;

  @Prop()
  newPrice: number;

  @Prop()
  previousStock: number;

  @Prop()
  newStock: number;

  @Prop()
  notes: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Product.name,
    required: true,
  })
  product: string;
}

export const TransactionProductSchema =
  SchemaFactory.createForClass(Transaction);
