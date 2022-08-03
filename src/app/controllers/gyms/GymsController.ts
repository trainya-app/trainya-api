import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import GymsRepository from '../../repositories/gyms/GymsRepository';

class GymsController {
  async index(req: Request, res: Response) {
    const gyms = await GymsRepository.findAll();

    return res.json({ gyms });
  }

  async store(req: Request, res: Response) {
    const {
      name, email, password, state, city, street, adress_number,
    } = req.body;

    const password_hash = await bcrypt.hash(password, 8);

    const nameExists = await GymsRepository.findByName({ name });
    if (nameExists) {
      return res.json({ message: 'Name already exists' });
    }

    const emailExists = await GymsRepository.findByEmail({ email });
    if (emailExists) {
      return res.json({ message: 'Email already exists' });
    }

    const gym = await GymsRepository.create({
      name, email, password_hash, state, city, street, adress_number,
    });

    return res.json({ gym });
  }

  // update(req: Request, res: Response) {

  // }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);

    const gymExists = await GymsRepository.findById(parsedId);
    if (!gymExists) {
      return res.send({ message: 'Gym not found' });
    }

    await GymsRepository.delete(parsedId);

    return res.sendStatus(200);
  }

  // show(req: Request, res: Response) {

  // }
}

export default new GymsController();
