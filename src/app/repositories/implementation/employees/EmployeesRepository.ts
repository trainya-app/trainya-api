import { Request, Response } from 'express';

class EmployeesRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new EmployeesRepository();
