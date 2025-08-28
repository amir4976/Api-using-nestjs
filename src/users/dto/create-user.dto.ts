// class validators are simple they act like yup or zad 
// they used like decorators
import { IsEmail, IsEnum, IsString } from "class-validator";
// dto stands for data transfer object
export class createUserDTO {
    @IsString()
    name:string;
   
   
    @IsEmail()
    email:string;
   
   
    @IsEnum(["INTERN" , "ENGINEER" , "ADMIN"],{
        message:"valid role requsted"
    })
    role:"INTERN" | "ENGINEER" | "ADMIN";
}