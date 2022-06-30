import { Request, Response } from 'express';

class EmployeesStatisticsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new EmployeesStatisticsRepository();
