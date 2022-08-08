import { PrismaClient } from '@prisma/client';
import { Employee } from '@prisma/client';
const { employee } = new PrismaClient();

class EmployeesRepository {
  findAll() {
    const employees = employee.findMany();
    return employees;
  }
}

export default new EmployeesRepository();
