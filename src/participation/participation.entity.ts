import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class Participation extends Model {
  @Column
  name: string;
  @Column
  last_name: string;
  @Column
  phone: string;
}
