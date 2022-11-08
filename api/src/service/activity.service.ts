import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateActivity } from '../http/model/activity';

@Injectable()
export class ActivityService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateActivity) {
    data.startTime = new Date(data.startTime);
    data.endTime = new Date(data.endTime);

    const score = (data.time / 60) * 5;

    await this.prisma.user.update({
      where: { id: data.userId },
      data: {
        score,
      },
    });

    return await this.prisma.activity.create({
      data,
    });
  }
}
