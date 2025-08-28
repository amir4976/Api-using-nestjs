import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe
} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDTO } from './dto/create-user.dto';
import { updateUserDTO } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  //&  get requst


  @Get()
  getAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  //*   post request


  @Post()
  create(
    @Body(ValidationPipe)
    createUserDto: createUserDTO,
  ) {
    return this.usersService.create(createUserDto);
  }


// ?  update / patch request


  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    updateUserDto: updateUserDTO,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  // so there is a little order in this thing
  // first we use dynamic routes
  // then we use nested routes
  // @Get('path')
  // get(): string {
  //     return 'get';
  // }

//^  get user/id requst /// get


  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }



//!  delete requst


  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
