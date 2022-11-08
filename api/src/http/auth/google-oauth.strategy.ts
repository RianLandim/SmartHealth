import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-google-oauth20';

export class GoogleOauthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    console.log(process.env.CLIENT_ID);
    super({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackUrl: process.env.REDIRECT_URL,
      scope: ['email', 'profile'],
    });
  }

  async validate(_acessToken: string, _refreshToken: string, profile: Profile) {
    const { id, name, emails } = profile;

    console.log(_acessToken, _refreshToken);

    return {
      provider: 'google',
      providerId: id,
      name: name.givenName,
      username: emails[0].value,
    };
  }
}
