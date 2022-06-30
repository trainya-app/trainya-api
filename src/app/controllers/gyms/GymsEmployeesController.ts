import { Request, Response } from 'express';

class GymsEmployeesController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new GymsEmployeesController();
