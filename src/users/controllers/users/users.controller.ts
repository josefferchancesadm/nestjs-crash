import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response, response } from 'express';
import { CreateUser } from 'src/users/Dtos/CreateUser.dto';
import { AuthGuardGuard } from 'src/users/guards/auth-guard/auth-guard.guard';
import { CreateUserPipePipe } from 'src/users/pipes/create-user-pipe/create-user-pipe.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly serviceUser: UsersService) {}
  // @Get()
  // getUsers(@Query('sortBy') sortBy: string) {
  //   console.log(sortBy);
  //   return this.servUser.fethUsers();
  // }
  @Get()
  @UseGuards(AuthGuardGuard)
  getUsers() {
    return this.serviceUser.fethUsers();
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body(CreateUserPipePipe) userData: CreateUser) {
    console.log(`typeof: ${typeof userData.age}`);
    return this.serviceUser.createUser(userData);
  }

  @Get('/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.serviceUser.fethUserById(id);
    if (!user) {
      throw new HttpException('User not fount', HttpStatus.BAD_REQUEST);
    }

    return { user };
  }
}
