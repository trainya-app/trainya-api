import { Request, Response } from 'express';

class EmployeesRatingsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new EmployeesRatingsController();
