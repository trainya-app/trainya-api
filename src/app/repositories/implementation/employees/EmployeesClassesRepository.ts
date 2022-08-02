import { Request, Response } from 'express';

class EmployeesClassesRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new EmployeesClassesRepository();
