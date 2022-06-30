import { Request, Response } from 'express';

class GymsEmployeesRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new GymsEmployeesRepository();
