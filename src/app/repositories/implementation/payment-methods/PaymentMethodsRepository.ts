import { Request, Response } from 'express';

class PaymentMethodsRepository {
  index(req: Request, res: Response) {
    res.send('index');
  }
}

export default new PaymentMethodsRepository();
