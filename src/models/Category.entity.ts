import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';
import Content from './Content.entity';

@Table({
  tableName: 'category',
})
class Category extends Model {
  @Column
  title: string;

  @HasMany(() => Content)
  contents: Content[];
}
export default Category;
