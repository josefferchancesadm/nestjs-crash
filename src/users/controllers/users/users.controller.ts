import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response, response } from 'express';
import { CreateUser } from 'src/users/Dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return { name: 'joseffer', sobrenome: 'chances' };
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUser) {
    console.log(userData);
    return {};
  }

  @Get('/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return { id };
  }
}
