import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GoogleFitDataSources {
  async getDataSoucers(token: string) {
    axios.defaults.headers.common.authorization = token;
    const { data } = await axios.get(
      process.env.FITNESS_API_URL + 'dataSources',
    );
    return data;
  }
}
