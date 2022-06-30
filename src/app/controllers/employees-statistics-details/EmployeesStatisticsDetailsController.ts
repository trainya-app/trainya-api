import { Request, Response } from 'express';

class EmployeesStatisticsDetailsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new EmployeesStatisticsDetailsController();
