import { Injectable, NotFoundException } from '@nestjs/common';
import { Tag } from '../schemas/tag.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTagDto, UpdateTagDto } from '../dto/tag.dto';

@Injectable()
export class TagsService {
  constructor(@InjectModel(Tag.name) private tagModel: Model<Tag>) {}

  async create(createTagDto: CreateTagDto) {
    console.log(createTagDto);
    const createdTag = new this.tagModel(createTagDto);
    return createdTag.save();
  }

  async findByName(tagsNames: string[]) {
    const tagsFinds = await this.tagModel
      .find({ name: { $in: tagsNames } })
      .select('_id')
      .lean();
    if (!tagsFinds) new NotFoundException('Tag no encontrado!');
    return tagsFinds;
  }

  async findAll() {
    return await this.tagModel.find().lean();
  }

  async findOne(_id: number) {
    return await this.tagModel.findById(_id);
  }

  async update(_id: number, updateTagDto: UpdateTagDto) {
    const tagFind = await this.tagModel.findById(_id);
    if (!tagFind) new NotFoundException('Tag no encontrado!');
    return await this.tagModel.findByIdAndUpdate({ _id }, { updateTagDto });
  }

  async remove(_id: number) {
    const tagFind = await this.tagModel.findById(_id);
    if (!tagFind) new NotFoundException('Tag no encontrado!');
    return await this.tagModel.findByIdAndDelete({ _id });
  }
}
