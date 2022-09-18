import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import EmployeesRepository from '../../repositories/employees/EmployeesRepository';
import WorkoutsRepository from '../../repositories/workouts/WorkoutsRepository';

class WorkoutsController {
  async index(req: Request, res: Response) {
    const workouts = await WorkoutsRepository.findAll();
    res.send({ workouts });
  }

  async store(req: Request, res: Response) {
    const {
      employeeId,
      title,
      description,
      type,
      previewImageUrl,
      videoUrl,
      level,
      duration,
    } = req.body;

    const someFieldIsEmpty = isSomeEmpty([employeeId, title, duration]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram preenchidos',
        workout: null,
      });
    }

    const employeeExists = await EmployeesRepository.findById(employeeId);
    if (!employeeExists) {
      return res.status(400).json({
        message: 'Funcionário não encontrado',
        workout: null,
      });
    }

    const titleExists = await WorkoutsRepository.findByTitle(title);
    if (titleExists) {
      return res.status(400).json({
        message: 'Este treino já existe',
        workout: null,
      });
    }

    const workout = await WorkoutsRepository.create({
      employee_id: employeeId,
      title,
      description,
      type,
      preview_image_url: previewImageUrl,
      video_url: videoUrl,
      level,
      duration,
    });
    res.status(200).json({ message: 'Treino criado', workout });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const workoutExists = await WorkoutsRepository.findById(parsedId);
    if (!workoutExists) {
      return res.status(400).json({
        message: 'Treino não encontrado',
        workout: null,
      });
    }

    await WorkoutsRepository.delete(parsedId);
    return res.sendStatus(200);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const workoutExists = await WorkoutsRepository.findById(parsedId);
    if (!workoutExists) {
      return res.status(400).json({
        message: 'Treino não encontrado',
        workout: null,
      });
    }

    res.status(200).send({ workout: workoutExists });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const {
      employeeId,
      title,
      description,
      type,
      previewImageUrl,
      videoUrl,
      level,
      duration,
    } = req.body;

    const someFieldIsEmpty = isSomeEmpty([
      employeeId,
      title,
      description,
      type,
      previewImageUrl,
      videoUrl,
      level,
      duration,
    ]);
    if (someFieldIsEmpty) {
      return res.status(400).json({
        message: 'Campos obrigatórios não foram preenchidos',
        workout: null,
      });
    }

    const employeeExists = await EmployeesRepository.findById(employeeId);
    if (!employeeExists) {
      return res.status(400).json({
        message: 'Funcionário não encontrado',
        workout: null,
      });
    }

    const workoutExists = await WorkoutsRepository.findById(parsedId);
    if (!workoutExists) {
      return res.status(400).json({
        message: 'Treino não encontrado',
        workout: null,
      });
    }

    const titleExists = await WorkoutsRepository.findByTitle(title);
    if (titleExists) {
      let id = titleExists.id;
      if (id !== parsedId) {
        return res.status(400).json({
          message: 'Este treino já existe',
          workout: null,
        });
      }
    }

    const employee_id = Number.isNaN(Number(employeeId))
      ? undefined
      : Number(employeeId);

    const workout = await WorkoutsRepository.update({
      id: parsedId,
      employee_id,
      title,
      description,
      type,
      preview_image_url: previewImageUrl,
      video_url: videoUrl,
      level,
      duration,
    });
    res.status(200).json({ message: 'Treino atualizado', workout });
  }
}

export default new WorkoutsController();
