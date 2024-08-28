import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/user.entity';
import { Participation } from '../participation/participation.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3307,
        username: 'root',
        password: 'S1st3m45',
        database: 'andromeda',
      });
      sequelize.addModels([User, Participation]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
