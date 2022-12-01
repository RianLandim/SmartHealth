import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { DataSource } from '../http/model/data-stream';

@Injectable()
export class GoogleFitDataSources {
  constructor(private http: HttpService) {}

  async getDataSourcers(): Promise<DataSource> {
    const { data } = await this.http.axiosRef.get(
      process.env.FITNESS_API_URL + 'dataSources',
    );
    return data.dataSource as DataSource;
  }

  async getSpecificDataSource(dataSourceId: string) {
    const { data } = await this.http.axiosRef.get(
      process.env.FITNESS_API_URL +
        `dataSources/${dataSourceId}/dataPointChanges`,
    );

    return data;
  }
}
