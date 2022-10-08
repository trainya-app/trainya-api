import { PrismaClient } from '@prisma/client';
const { employeeClass } = new PrismaClient();

class EmployeesClassesRepository {
  async findAll() {
    return await employeeClass.findMany({
      select: {
        id: true,
        class_id: true,
        class: {
          select: {
            title: true,
          },
        },
        employee_id: true,
        employee: {
          select: {
            name: true,
          },
        },
        comments: true,
        rating: true,
      },
    });
  }

  async create({
    employee_id,
    class_id,
    rating,
    comments,
  }: {
    employee_id: number;
    class_id: number;
    rating: number;
    comments: string;
  }) {
    return await employeeClass.create({
      data: {
        employee_id,
        class_id,
        rating,
        comments,
      },
    });
  }

  async findByClassId(class_id: number) {
    return await employeeClass.findMany({
      where: {
        class_id,
      },
    });
  }
}

export default new EmployeesClassesRepository();
