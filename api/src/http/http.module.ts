import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { UsersController } from './controller/user.controller';
import { UsersService } from '../service/user.service';
import { GoogleOauthController } from './controller/google-oauth.controller';

@Module({
  imports: [],
  controllers: [UsersController, GoogleOauthController],
  providers: [UsersService, PrismaService],
})
export class HttpModule {}
