import { Module } from '@nestjs/common';
import { HttpModule } from './http/http.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [HttpModule, TestModule],
  providers: [],
})
export class AppModule {}
