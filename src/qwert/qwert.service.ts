import { Injectable, Query } from '@nestjs/common';
import Content from 'src/models/Content.entity';
import { QwertBody, QwertQueryParams } from './qwert.dto';
import Category from 'src/models/Category.entity';
import Tag from 'src/models/Tag.entity';
import redisClient from 'src/redis';

@Injectable()
export class QwertService {
  async getPost(query: QwertQueryParams): Promise<QwertBody[]>{
    const orderBy: string = query.orderBy || 'id';
    const orderType: string = query.orderType || 'desc';
    const limit: number = Number(query.limit) || 1;
    const offset: number = Number(query.offset) || 0;
    const combinedKey =
      'orderBy' +
      orderBy +
      'orderType' +
      orderType +
      'limit' +
      limit +
      'offset' +
      offset;

        console.log('READ cache missed');
        const contents = await Content.findAll({
          order: [[orderBy, orderType]],
          limit: limit,
          offset,
          include: [Category, Tag]
        });
        await redisClient.hset(
          'contentList',
          combinedKey,
          JSON.stringify(contents),
        );
        // return contents;

    const cacheResult = await redisClient.hget('contentList', combinedKey);
    if (cacheResult) {
      console.log(cacheResult);
      console.log("unRead");
      return JSON.parse(cacheResult) as Content[];
    } else {
      console.log('READ cache missed');
      const contents = await Content.findAll({
        order: [[orderBy, orderType]],
        limit: limit,
        offset,
        include: [Category, Tag]
      });
      await redisClient.hset(
        'contentList',
        combinedKey,
        JSON.stringify(contents),
      );
      return contents;
    }
  }

  async findOne(id: number): Promise<QwertBody> {
    const project = await Content.findByPk(id);
    return project;
  }

  async createData(body: any): Promise<QwertBody>{
    const book = await Content.create(body);
    await redisClient.del('contentList');
    return book;
  }
}
