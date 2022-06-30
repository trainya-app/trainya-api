import { Request, Response } from 'express';

class EmployeesStatisticsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new EmployeesStatisticsController();
