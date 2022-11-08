import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { GoogleOauthGuard } from '../auth/google-oauth.guard';

@Controller('auth')
export class GoogleOauthController {
  @Get()
  @UseGuards(GoogleOauthGuard)
  async googleAuth(@Req() _req: any) {
    return _req;
  }

  @Get('redirect')
  @UseGuards(GoogleOauthGuard)
  async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    // For now, we'll just show the user object
    return req.user;
  }
}
