import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import Content from '../models/Content.entity';
import { QwertBody, QwertQueryParams } from './qwert.dto';
import { QwertService } from './qwert.service';


@Controller('qwert')
export class QwertController {
  constructor(private readonly QwertService: QwertService) { }
  @Get()
  async getPosts(@Query() params: QwertQueryParams): Promise<QwertBody[]> {
    return this.QwertService.getPost(params);
  }


  @Get('/:id')
  async getBooks(@Param('id') id): Promise<QwertBody>{
    return this.QwertService.findOne(id);
  }

  @Post()
  async createBook(@Body() body): Promise<QwertBody>{
    return this.QwertService.createData(body);
  }


  @Put('/:id')
  async updateBook(@Param('id') id, @Body() body): Promise<boolean>{
    try {
      const book = await Content.update(body, {
        where: {
          id: id
        }
      });
      return true;
    } catch (e) {
      return false;
    }
  }


  @Delete()
  async deleteBook(@Body() body): Promise<boolean>{
    try {
      await Content.destroy({
        where: {
          ...body
        }
      });
      return true
    } catch (e) {
      return false
    }
  }
}