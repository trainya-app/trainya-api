import { Request, Response } from 'express';

class EmployeesController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new EmployeesController();
