import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Book {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

}