import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { UsersController } from './controller/user.controller';
import { UsersService } from '../service/user.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class HttpModule {}
