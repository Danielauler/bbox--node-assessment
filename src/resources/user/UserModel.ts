import { IsEmail, IsString } from 'class-validator';

export class UserModel {
  readonly uuid: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  password: string;
}