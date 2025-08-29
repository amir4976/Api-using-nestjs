import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    EmployeesModule,

    //? for better security add a guard to check the request rate
    //? many attacks are like send 10000 requests in a second
    //? so we need to limit the number of requests to a certain time period 
    //* yeh fuck u hackers 😎
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 100 }]),

    
  ],
  providers: [DatabaseService],
})
export class AppModule {}
