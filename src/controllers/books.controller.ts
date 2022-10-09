/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksServices } from 'src/services/livros.service';

import { Book } from '../models/livro.model';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksServices) {}

  @Get()
  public async getAllProduct(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  public async getOneProduct(@Param() params): Promise<Book> {
    return this.booksService.getOne(params.id);
  }

  @Post()
  public async createProduct(@Body() book: Book) {
    this.booksService.create(book);
  }

  @Put()
  public async updateProduct(@Body() book: Book) {
    return this.booksService.update(book);
  }

  @Delete(':id')
  public async deleteProduct(@Param() params) {
    this.booksService.delete(params.id);
  }
}
