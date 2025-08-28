import { Injectable } from '@nestjs/common';
import { createUserDTO } from './dto/create-user.dto';
import { updateUserDTO, UpdateUserDTO } from './dto/update-user.dto';


@Injectable()
export class UsersService {
  private user = [
    {
      id: 1,
      name: 'Prisma1',
      email: 'prisma.gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 2,
      name: 'Prisma2',
      email: 'prisma.gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Prisma3',
      email: 'prisma.gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Prisma4',
      email: 'prisma.gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Prisma5',
      email: 'prisma.gmail.com',
      role: 'ENGINEER',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.user.filter((user) => user.role === role);
    }
    return this.user;
  }

  findOne(id: number) {
    const user = this.user.find((user) => user.id === id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  create(user: createUserDTO) {
    const userByHighestId = [...this.user].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...user,
    };
    this.user.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: updateUserDTO
  ) {
    this.user = this.user.map((user)=>{
        if(user.id === id){
            return {...user,...updatedUser}
        }
        return user;
    })
    return this.findOne(id);
  }




  delete(id:number){
    const removeUser = this.findOne(id);
    this.user =this.user.filter((user)=>{
        return user.id !== id;
    })
    return removeUser;
  }
}
