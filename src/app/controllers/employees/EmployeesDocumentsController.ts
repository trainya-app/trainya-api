import { Request, Response } from 'express';

class EmployeesDocumentsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new EmployeesDocumentsController();
