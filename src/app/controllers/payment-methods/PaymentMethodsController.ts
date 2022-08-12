import { Request, Response } from 'express';

class PaymentMethodsController {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new PaymentMethodsController();
