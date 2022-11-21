import { Module } from '@nestjs/common';
import { GoogleFitController } from '../controller/google-oauth.controller';
import { GoogleOauthStrategy } from './google-oauth.strategy';

@Module({
  controllers: [GoogleFitController],
  providers: [GoogleOauthStrategy],
})
export class GoogleOauthModule {}
