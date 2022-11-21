import { Controller, Get } from '@nestjs/common';
import { GoogleFitDataSources } from '../../service/google-datasource.service';
import { Token } from '../auth/decorator/current-token';

@Controller('datasource')
export class GoogleFitController {
  constructor(private googleFitService: GoogleFitDataSources) {}

  @Get()
  async getDataSources(@Token() token: string) {
    return this.googleFitService.getDataSoucers(token);
  }
}
