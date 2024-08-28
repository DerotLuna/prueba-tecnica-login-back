import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  name: string;
  @Column
  last_name: string;
  @Column
  phone: string;
  @Column
  email: string;
  @Column
  password: string;
}
