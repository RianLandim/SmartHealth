import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

export class GoogleOauthStrategy extends PassportStrategy(Strategy) {
  async validate(_acessToken: string) {
    console.log(_acessToken);
  }
}
