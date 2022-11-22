import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class GoogleFitDataSources {
  constructor(private http: HttpService) {}

  async getDataSoucers() {
    const { data } = await this.http.axiosRef.get(
      'https://www.googleapis.com/fitness/v1/users/me/dataSources',
    );
    console.log(data);
    return data;
  }
}
