import { Request, Response } from 'express';
import GymsRepository from '../../repositories/gyms/GymsRepository';

class GymsController {
  async index(req: Request, res: Response) {
    const gyms = await GymsRepository.findAll();

    return res.json({ gyms });
  }

  // store(req: Request, res: Response) {

  // }

  // update(req: Request, res: Response) {

  // }

  // delete(req: Request, res: Response) {

  // }

  // show(req: Request, res: Response) {

  // }
}

export default new GymsController();
