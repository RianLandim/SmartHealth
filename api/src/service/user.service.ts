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

  async getBasedOnScore() {
    return await this.prisma.user.findMany({
      orderBy: {
        score: 'desc',
      },
      take: 10,
    });
  }
}
