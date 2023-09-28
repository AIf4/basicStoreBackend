import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { TagsService } from './services/tags.service';
import { Tag, TagSchema } from './schemas/tag.schema';
import { TagsController } from './controllers/tags.controller';
import { Transaction } from './schemas/transaction.schema';
import { TransactionsController } from './controllers/transactions.controller';
import { TransactionsService } from './services/transactions.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
      {
        name: Tag.name,
        schema: TagSchema,
      },
      {
        name: Transaction.name,
        schema: TagSchema,
      },
    ]),
  ],
  controllers: [ProductsController, TagsController, TransactionsController],
  providers: [ProductsService, TagsService, TransactionsService],
})
export class ProductsModule {}
