import { Request, Response, Application } from 'express';

import { getConnection } from '../dbConnection';
import Book from '../entity/Book';
import { Connection } from 'typeorm';

export class Routes {

  connection: Connection;

  constructor() {
    this.getDBConnection();
  }

  private async getDBConnection() {
    this.connection = await getConnection();
  }

  public routes(app: Application): void {
    app.route('/')
      .get((req: Request, res: Response) => {
        res.send({ 
          message: 'Typescript-Express was successful'
        })
      });

    app.route('/createBook')
      .get(async (req: Request, res: Response) => {
        const bookRepo = this.connection.getRepository(Book);
        const book = bookRepo.create({ title: 'Galacticos' });
        await bookRepo.save(book);
        res.send({
          message: `Book created: ${book}`
        });
      });

    app.route('/books')
      .get(async (req: Request, res: Response) => {
        const bookRepo = this.connection.getRepository(Book);
        const books = await bookRepo.find();
        res.send({ books });
      });
  }
}