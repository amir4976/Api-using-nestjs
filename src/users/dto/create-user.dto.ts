// class validators are simple they act like yup or zad
// they used like decorators
import { IsEmail, IsEnum, IsString, IsNotEmpty } from 'class-validator';
// dto stands for data transfer object
export class createUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'valid role requsted',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
