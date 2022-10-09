/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Book extends Model<Book> {
  @Column({
    type: DataType.STRING(60),
    allowNull: false, // Define o campo da tabela como obrigatorio
  })
  codigo: string;
  @Column({
    type: DataType.STRING,
    allowNull: false, // Define o campo da tabela como obrigatorio
  })
  nome: string;
  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false, // Define o campo da tabela como obrigatorio
  })
  preco: number;
}
