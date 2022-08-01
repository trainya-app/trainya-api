import { Request, Response } from 'express';

class EmployeesRatingsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new EmployeesRatingsRepository();
