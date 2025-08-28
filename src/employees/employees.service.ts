import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class EmployeesService {
  // //! ------------------------------------just for u to know----------------------------------------------
  //? just for u know this one make database service a privet variable                               
  //? thst mean this Databaseservice if its change the change remain in this class and not public    
  //? that help us to have some privacy and protaction agenst attacks                                 
  constructor(private readonly databaseService: DatabaseService) {}                                   
  // //! ----------------------------------------------------------------------------------------------------

  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({
      data: createEmployeeDto,
    });
  }

  //its simple but its not easy 
  // prisma is just a way to connect to database or aka (ORM) stands for (object relation mapping) and i kinda like it
  async findAll(role?:"INTERN"|"ENGINEER"|"ADMIN") {
   if(role) return this.databaseService.employee.findMany({
      where: {
        role,
      },
    });
    return this.databaseService.employee.findMany();
  }



  async findOne(id: number) {
    return this.databaseService.employee.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where: {
        id,
      },
      data:updateEmployeeDto
    });
  }

  async remove(id: number) {
    return this.databaseService.employee.delete({
      where:{
        id
      }
    });
  }
}
