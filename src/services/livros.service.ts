/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from 'src/models/livro.model';

@Injectable()
export class BooksServices {
  constructor(
    @InjectModel(Book)
    private bookModel: typeof Book,
  ) {}

  public async getAll(): Promise<Book[]> {
    return this.bookModel.findAll();
  }

  public async getOne(id: number): Promise<Book> {
    return this.bookModel.findByPk(id);
  }

  public async create(book: Book) {
    this.bookModel.create(book);
  }

  public async update(book: Book): Promise<[number]> {
    return this.bookModel.update(book, {
      where: {
        id: book.id,
      },
    });
  }

  public async delete(id: number) {
    const livro: Book = await this.getOne(id);
    livro.destroy();
  }
}
