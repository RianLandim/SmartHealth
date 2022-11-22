import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { GoogleFitDataSources } from '../../service/google-datasource.service';
import { HttpInterceptor } from '../../utils/api';

@Controller('datasource')
export class GoogleFitController {
  constructor(private googleFitService: GoogleFitDataSources) {}

  @Get()
  @UseInterceptors(HttpInterceptor)
  async getDataSources() {
    return this.googleFitService.getDataSoucers();
  }
}
