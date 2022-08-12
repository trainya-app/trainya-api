import { PrismaClient } from '@prisma/client';
const { gymEmployee } = new PrismaClient();

interface IGymEmployee {
  gym_id: number;
  employee_id: number;
}

class GymsEmployeesRepository {
  async findAll() {
    const gymEmployees = await gymEmployee.findMany();
    return gymEmployees;
  }

  async create({ gym_id, employee_id }: IGymEmployee) {
    const createdGymEmployee = await gymEmployee.create({
      data: {
        gym_id,
        employee_id,
      },
    });

    return createdGymEmployee;
  }

  async findById(id: number) {
    const gymEmployeeExists = await gymEmployee.findFirst({
      where: {
        id,
      },
    });

    return gymEmployeeExists;
  }

  async delete(id: number) {
    await gymEmployee.delete({
      where: {
        id,
      },
    });

    return true;
  }
}

export default new GymsEmployeesRepository();
