import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptor implements NestInterceptor {
  constructor(private http: HttpService) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const ctx = context.switchToHttp().getRequest();
    const token = ctx.headers.authorization;

    if (token) {
      this.http.axiosRef.defaults.headers.common['authorization'] = token;
    }
    return next.handle().pipe();
  }
}
