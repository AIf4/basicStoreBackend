import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Tag } from './tag.schema';

@Schema()
export class Product extends Document {
  @Prop()
  name: string;

  @Prop()
  description: number;

  @Prop()
  sku: string;

  @Prop()
  imageurl: string;

  @Prop()
  precio: string;

  @Prop()
  stock: string;

  @Prop({
    type: [
      {
        type: Types.ObjectId,
        ref: Tag.name,
      },
    ],
  })
  tags: Tag[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
