import { PrismaClient } from '@prisma/client';
import { Employee } from '@prisma/client';
import gymEmployeesRoutes from '../../../routes/GymEmployees.routes';
import { DocumentsTypes } from '../../contants/documents.token';
const { employee } = new PrismaClient();

interface IUpdateEmployee {
  role_id?: number;
  name?: string;
  birth_date?: string;
  daily_workload?: number;
  weekdays_workload?: number;
  phone: string;
  wage?: number;
  profile_img: string;
  email?: string;
  payment_date: string;
  password?: string;
}

interface IEmployee {
  role_id: number;
  name: string;
  birth_date: string;
  daily_workload: number;
  weekdays_workload: number;
  wage: number;
  profile_img: string;
  phone: string;
  email: string;
  payment_date: string;
  password: string;
  documentTypeId: DocumentsTypes;
  document: string;
  gymId: number;
}

class EmployeesRepository {
  async findAll() {
    const employees = await employee.findMany({
      select: {
        id: true,
        name: true,
        birth_date: true,
        daily_workload: true,
        weekdays_workload: true,
        phone: true,
        email: true,
        password: true,
        wage: true,
        payment_date: true,
        profile_img: true,
        role_id: true,
        role: {
          select: {
            title: true,
            access_level: true,
          },
        },
      },
    });
    return employees;
  }

  async findByEmail({ email }: { email: string }) {
    const employeeExists = await employee.findFirst({
      where: {
        email,
      },
      include: {
        role: {
          select: {
            access_level: true,
          },
        },
      },
    });

    return employeeExists;
  }

  async findById(id: number) {
    const employeeExists = await employee.findFirst({
      where: {
        id,
      },
      include: {
        gymEmployee: {
          select: {
            gym_id: true,
            gym: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    const formatted = {
      ...employeeExists,
      gymEmployee: {
        gym_id: employeeExists?.gymEmployee[0]?.gym_id,
        gym: { name: employeeExists?.gymEmployee[0]?.gym?.name },
      },
    };

    return formatted;
  }

  async create({
    role_id,
    name,
    birth_date,
    daily_workload,
    weekdays_workload,
    phone,
    email,
    password,
    wage,
    payment_date,
    profile_img,
    document,
    documentTypeId,
    gymId,
  }: IEmployee) {
    const createdEmployee = await employee.create({
      data: {
        role_id: Number(role_id),
        name,
        birth_date,
        phone,
        email,
        password,
        wage: Number(wage),
        payment_date: !payment_date ? undefined : payment_date,
        profile_img,
        employeeDocument: {
          create: {
            document_id: documentTypeId,
            value: document,
          },
        },
        gymEmployee: {
          create: {
            gym_id: gymId,
          },
        },
      },
      select: {
        id: true,
        role_id: true,
        name: true,
        birth_date: true,
        daily_workload: true,
        weekdays_workload: true,
        phone: true,
        email: true,
        password: true,
        wage: true,
        payment_date: true,
        profile_img: true,
        role: {
          select: {
            title: true,
            access_level: true,
          },
        },
        gymEmployee: {
          select: {
            gym_id: true,
          },
        },
      },
    });

    const formatted = {
      ...createdEmployee,
      gymEmployee: { gym_id: createdEmployee.gymEmployee[0]?.gym_id },
    };

    return formatted;
  }
  
  async createWithGym({name, email, password, gymId}:{name: string, email: string, password: string, gymId: number}){
    return await employee.create({
      data:{
        name,
        email,
        password,
        role_id: 1,
        gymEmployee: {
          create: {
            gym_id: gymId,
          },
        },
      }
    })
  }

  async delete(id: number) {
    await employee.delete({
      where: {
        id,
      },
    });

    return true;
  }
  async findPasswordById(id: number) {
    const password = await employee.findFirst({
      where: {
        id,
      },
      select: {
        password: true,
      },
    });

    return password as { password: string };
  }

  async updatePassword({ id, password }: { id: number; password: string }) {
    const updatedPassword = await employee.update({
      data: {
        password,
      },
      where: {
        id,
      },
    });
    return updatedPassword;
  }

  async updateEmployee(
    id: number,
    {
      role_id,
      name,
      birth_date,
      daily_workload,
      weekdays_workload,
      phone,
      email,
      wage,
      payment_date,
      profile_img,
    }: IUpdateEmployee
  ) {
    const updatedEmployee = await employee.update({
      data: {
        role_id,
        name,
        birth_date,
        daily_workload,
        weekdays_workload,
        phone,
        email,
        wage,
        payment_date,
        profile_img,
      },
      where: {
        id,
      },
    });
    return updatedEmployee;
  }

  async findIdByEmail(email: string) {
    const id = await employee.findFirst({
      where: {
        email,
      },
    });

    return id as { id: number };
  }
}

export default new EmployeesRepository();
