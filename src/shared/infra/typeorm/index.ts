import { createConnection } from 'typeorm';

createConnection();
// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// const Options: TypeOrmModuleOptions = {
//   driver: process.env.DB_DRIVER,
//   host: process.env.DB_HOST,
//   port: +process.env.DB_PORT,
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   synchronize: process.env.DB_SYNC == "true",
//   logging: false,
//   "entities": [
//     "@modules/**/infra/typeorm/entities/*.ts"
//   ],
//   "migrations": [
//     "@shared/infra/typeorm/migrations/*.ts"
//   ],
//   "cli": {
//     "migrationsDir": "@shared/infra/typeorm/migrations"
//   }
// }

// module.exports = Options;