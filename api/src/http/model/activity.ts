import { ActivityType } from '@prisma/client';

export class CreateActivity {
  type: ActivityType;
  time: number;
  startTime: Date;
  endTime: Date;
}
