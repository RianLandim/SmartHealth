import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUser } from '../model/user';
import { UsersService } from '../../service/user.service';
import { Router } from 'express';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() user: CreateUser) {
    return this.usersService.create(user);
  }

  @Get()
  findBasedOnScore() {
    return this.usersService.getBasedOnScore();
  }

  @Get('test')
  test() {
    return 'test';
  }
}
