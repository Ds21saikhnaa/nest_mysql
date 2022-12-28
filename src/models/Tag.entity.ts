import { Table, Column, Model, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';
import Content from './Content.entity';
import ContentTag from './ContentTag.entity';

@Table({
  tableName: 'tag',
})
class Tag extends Model {
  @Column
  name: string;

  @BelongsToMany(() => Content,  () => ContentTag )
  contents: Array<Content & { ContentTag: ContentTag }>;

}
export default Tag;
