import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateUser } from '../http/model/user';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUser) {
    return await this.prisma.user.create({
      data,
    });
  }
}
