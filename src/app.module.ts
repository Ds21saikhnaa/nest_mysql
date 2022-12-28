import { forwardRef, MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { DatabaseModule } from './database/database.module';
import { QwertController } from './qwert/qwert.controller';
import { QwertService } from './qwert/qwert.service';
import { AuthMiddleware } from './auth.middleware';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';

@Module({
  imports: [BooksModule, DatabaseModule],
  controllers: [AppController, QwertController, CategoryController],
  providers: [AppService, QwertService, CategoryService],
})
  
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('/book');
  }
}