import { PrismaClient } from '@prisma/client';
import { Employee } from '@prisma/client';
const { employee } = new PrismaClient();

interface IEmployee {
  roll_id: number;
  name: string;
  birth_date: string;
  daily_workload: number;
  weekdays_workload: number;
  phone: number;
  email: string;
  password: string;
}

class EmployeesRepository {
  async findAll() {
    const employees = await employee.findMany();
    return employees;
  }

  async findByEmail({ email }: { email: string }) {
    const employeeExists = await employee.findFirst({
      where: {
        email,
      },
    });

    return employeeExists;
  }

  async create({
    roll_id,
    name,
    birth_date,
    daily_workload,
    weekdays_workload,
    phone,
    email,
    password,
  }: IEmployee) {
    const createdEmployee = await employee.create({
      data: {
        roll_id,
        name,
        birth_date,
        daily_workload,
        weekdays_workload,
        phone,
        email,
        password,
      },
      select: {
        roll_id: true,
        name: true,
        birth_date: true,
        daily_workload: true,
        weekdays_workload: true,
        phone: true,
        email: true,
        password: true,
      },
    });

    return createdEmployee;
  }
}

export default new EmployeesRepository();
