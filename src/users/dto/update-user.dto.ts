import { createUserDTO } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';
// dto stands for data transfer object
// its basicly a type for our request body
// so we create a create dto and in this one we just extands it 
// to have the same properties but with a different name
// we use the PartialType from the nestjs/mapped-types package 
export class updateUserDTO extends PartialType(createUserDTO){}


