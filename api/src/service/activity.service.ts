import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateActivity } from '../http/model/activity';

@Injectable()
export class ActivityService {
  constructor(private prisma: PrismaClient) {}

  async create(data: CreateActivity) {
    return await this.prisma.activity.create({
      data,
    });
  }
}
