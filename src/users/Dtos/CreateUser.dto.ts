import { IsEmail, IsNotEmpty, isNotEmpty } from 'class-validator';

export class CreateUser {
  @IsNotEmpty()
  username: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  age: number;
}
