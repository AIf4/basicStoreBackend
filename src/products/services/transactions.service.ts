import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from '../schemas/transaction.schema';
import {
  CreateTransactionDto,
  UpdateTransactionDto,
} from '../dto/transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<Transaction>,
  ) {}

  async create(createTagDto: CreateTransactionDto) {
    const createdTransaction = new this.transactionModel(createTagDto);
    return createdTransaction.save();
  }

  async findAll() {
    return await this.transactionModel.find().lean();
  }

  async findOne(_id: number) {
    return await this.transactionModel.findById(_id);
  }

  async update(_id: number, updateTransactionDto: UpdateTransactionDto) {
    const transactionFind = await this.transactionModel.findById(_id);
    if (!transactionFind) new NotFoundException('Transaction no encontrado!');
    return await this.transactionModel.findByIdAndUpdate(
      { _id },
      { updateTransactionDto },
    );
  }

  async remove(_id: number) {
    const transactionFind = await this.transactionModel.findById(_id);
    if (!transactionFind) new NotFoundException('Transaction no encontrado!');
    return await this.transactionModel.findByIdAndDelete({ _id });
  }
}
