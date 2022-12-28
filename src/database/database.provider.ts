import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import Content from '../models/Content.entity';
import * as config from '../../config/config.json';
import Category from 'src/models/Category.entity';
import ContentTag from 'src/models/ContentTag.entity';
import Tag from 'src/models/Tag.entity';

export const databaseProviders = [
  {
    provide: Sequelize,
    useFactory: async () => {
      const sequelize = new Sequelize(config.development as SequelizeOptions);
      sequelize.addModels([Content, Category, ContentTag, Tag]);
      // Comment it after alteration table
      //   await sequelize.sync({ alter: true });
      //   await sequelize.sync({ force: true });
      //   await sequelize.sync();
      return sequelize;
    },
  },
];
