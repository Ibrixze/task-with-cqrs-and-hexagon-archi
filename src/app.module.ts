import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskEntity } from './task/infrastructure/orm-entites/task.entity';
import { TaskSchema } from './task/infrastructure/orm-entites/task.schema';
import { TaskModule } from './task/task.module';

@Module({
  imports: [TaskModule, TypeOrmModule.forRoot({
      // type: 'postgres',
      // host: 'localhost',
      // port: 5432,
      // username: 'postgres',
      // password: 'root',
      // database: 'djamo_task_test',
      // entities: [TaskSchema],
      // synchronize: true,
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'djamo_task_test',
      entities: [TaskEntity],
      synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
