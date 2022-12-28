import { Table, Column, Model, HasMany, ForeignKey } from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';
import Content from './Content.entity';
import Tag from './Tag.entity';

@Table({
  tableName: 'content_tag',
})
class ContentTag extends Model {
  
  @ForeignKey(() => Content)
  @Column
  contentId: number;

  @ForeignKey(() => Tag)
  @Column
  tagId: number;

}
export default ContentTag;
