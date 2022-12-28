import { Controller, Get } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  hello(): string {
    return 'Hello';
  }
}
