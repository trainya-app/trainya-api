import { Request, Response } from 'express';

class EmployeesClassesController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new EmployeesClassesController();
