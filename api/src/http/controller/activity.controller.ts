import { Body, Controller, Post } from '@nestjs/common';
import { ActivityService } from '../../service/activity.service';
import { CreateActivity } from '../model/activity';

@Controller('activity')
export class ActivityController {
  constructor(private activityService: ActivityService) {}

  @Post()
  create(@Body() data: CreateActivity) {
    return this.activityService.create(data);
  }
}
