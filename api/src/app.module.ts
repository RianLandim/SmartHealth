import { Module } from '@nestjs/common';
import { HttpModule } from './http/http.module';

@Module({
  imports: [HttpModule],
  providers: [],
})
export class AppModule {}
