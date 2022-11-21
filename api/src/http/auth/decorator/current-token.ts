import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export const Token = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    if (!req.headers.authorization) {
      throw new UnauthorizedException('Request without token');
    }
    return req.headers.authorization?.split('Bearer')[1].trim();
  },
);
