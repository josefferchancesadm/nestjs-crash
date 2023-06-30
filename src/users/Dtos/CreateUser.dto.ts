import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUser {
  @IsNotEmpty()
  username: string;
  @IsEmail()
  email: string;
}
