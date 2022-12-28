import { Table, Column, Model, HasMany, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';
import Category from './Category.entity';
import Tag from './Tag.entity';
import ContentTag from './ContentTag.entity';

@Table({
  tableName: 'contents',
})
class Content extends Model {
  @Column
  title: string;

  @Column
  body: string;

  @Column
  comment_count: number;

  @Column
  view_count: number;
  
  @Column
  createdAt: Date;
  
  @Column
  updatedAt: Date;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;
    
  @BelongsTo(() => Category, { foreignKey: 'categoryId' })
  category: Category;

  @BelongsToMany(() => Tag, () => ContentTag)
  tags: Array<Tag & { ContentTag: ContentTag }>;
}
export default Content;
