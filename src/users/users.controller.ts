import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getAll(@Query("role") role?:"INTERN"|"ENGINEER"|"ADMIN") {
        return 'Hello World!';
    }

    @Post()
    create(@Body() user:{}){
        return user
    }

    @Patch(':id')
    update(@Param("id") id:string, @Body() user:{}){
        return {id , ...user}
    }
    

    // so there is a little order in this thing
    // first we use dynamic routes
    // then we use nested routes
    // @Get('path')
    // get(): string {
    //     return 'get';
    // }

    @Get(':id')
    getOne(){
        return 'getOne';
    }

}
