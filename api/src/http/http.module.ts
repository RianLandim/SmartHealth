import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { UsersController } from './controller/user.controller';
import { UsersService } from '../service/user.service';
import { GoogleOauthController } from './controller/google-oauth.controller';
import { ActivityController } from './controller/activity.controller';
import { ActivityService } from '../service/activity.service';

@Module({
  imports: [],
  controllers: [UsersController, GoogleOauthController, ActivityController],
  providers: [UsersService, PrismaService, ActivityService],
})
export class HttpModule {}
