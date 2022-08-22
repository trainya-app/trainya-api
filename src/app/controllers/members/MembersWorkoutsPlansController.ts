import { Request, Response } from 'express';
import MembersWorkoutsPlansRepository from '../../repositories/members/MembersWorkoutsPlansRepository';

class MembersWorkoutsPlansController {
  async index(req: Request, res: Response) {
    const memberWorkoutPlans = await MembersWorkoutsPlansRepository.findAll();
    return res.send({ memberWorkoutPlans });
  }
}

export default new MembersWorkoutsPlansController();
