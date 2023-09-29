import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { Model } from 'mongoose';
import { Product } from '../schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private producModel: Model<Product>) {}

  create(createProductDto: CreateProductDto) {
    const createdProduct = new this.producModel(createProductDto);
    return createdProduct.save();
  }

  async findAll() {
    return await this.producModel
      .find({ delete: false })
      .populate('tags')
      .lean();
  }

  async findAllByParams(params: string) {
    const regex = new RegExp(params, 'i');
    return await this.producModel
      .find({ name: { $regex: regex }, delete: false })
      .populate('tags')
      .lean();
  }

  async findAllByPriceRange(min: number, max: number) {
    return await this.producModel
      .find({ price: { $gte: min, $lte: max }, delete: false })
      .populate('tags')
      .lean();
  }

  async findOne(_id: number) {
    return await this.producModel.findById({ _id: _id, delete: false });
  }

  async update(_id: string, updateProductDto: UpdateProductDto) {
    const productFind = await this.producModel.findById(_id);
    if (!productFind) throw new NotFoundException('Producto no encontrado!');
    console.log(_id, updateProductDto);
    const result = await this.producModel.updateOne(
      { _id },
      { ...updateProductDto },
    );
    return result;
  }

  async remove(_id: string) {
    const productFind = await this.producModel.findById(_id);
    if (!productFind) throw new NotFoundException('Producto no encontrado!');
    return await this.producModel.findByIdAndUpdate(
      { _id: _id },
      { delete: true },
    );
  }
}
