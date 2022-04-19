import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CoreModule, AuthModule, CatsModule, UsersModule, TasksModule],
})
export class AppModule {}
