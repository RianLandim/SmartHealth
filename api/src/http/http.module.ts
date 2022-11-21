import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { UsersController } from './controller/user.controller';
import { UsersService } from '../service/user.service';
import { GoogleFitController } from './controller/google-oauth.controller';
import { ActivityController } from './controller/activity.controller';
import { ActivityService } from '../service/activity.service';
import { GoogleFitDataSources } from '../service/google-datasource.service';

@Module({
  imports: [],
  controllers: [UsersController, GoogleFitController, ActivityController],
  providers: [
    UsersService,
    PrismaService,
    ActivityService,
    GoogleFitDataSources,
  ],
})
export class HttpModule {}
