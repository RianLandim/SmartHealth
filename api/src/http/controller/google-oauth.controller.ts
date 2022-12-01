import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { GoogleFitDataSources } from '../../service/google-datasource.service';
import { HttpInterceptor } from '../../utils/google.intercept';

@UseInterceptors(HttpInterceptor)
@Controller('datasource')
export class GoogleFitController {
  constructor(private googleFitService: GoogleFitDataSources) {}

  @Get()
  getDataSources() {
    return this.googleFitService.getDataSourcers();
  }

  @Post('data')
  getDataSourceData(@Body() data: { dataSourceId: string }) {
    return this.googleFitService.getSpecificDataSource(data.dataSourceId);
  }
}
