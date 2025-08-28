import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [UsersModule, DatabaseModule, EmployeesModule],
  providers: [DatabaseService],
})
export class AppModule {}
 