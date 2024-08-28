import { Module } from '@nestjs/common';
import { ParticipationController } from './participation.controller';
import { ParticipationService } from './participation.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../auth/auth.guard';
import { DatabaseModule } from '../core/database.module';
import { participationsProviders } from './participations.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ParticipationController],
  providers: [
    ParticipationService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    ...participationsProviders,
  ],
})
export class ParticipationModule {}
