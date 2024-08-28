import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ParticipationModule } from './participation/participation.module';
import { DatabaseModule } from './core/database.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [AuthModule, UsersModule, ParticipationModule, DatabaseModule, DashboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
