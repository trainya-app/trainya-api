import { Request, Response } from 'express';

class EmployeesStatisticsDetailsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new EmployeesStatisticsDetailsRepository();
