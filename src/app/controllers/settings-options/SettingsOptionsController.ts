import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import SettingsOptionsRepository from '../../repositories/settings-options/SettingsOptionsRepository';

class SettingsOptionsController {
  async index(req: Request, res: Response) {
    const settingsOptions = await SettingsOptionsRepository.findAll();
    return res.send({ settingsOptions });
  }

  async store(req: Request, res: Response) {
    const { description } = req.body;

    const someFieldIsEmpty = isSomeEmpty([description]);
    if (someFieldIsEmpty) {
      return res.status(400).send({
        message: 'Campos obrigatórios não foram enviados',
        settingOption: null,
      });
    }

    const settingOptionExists =
      await SettingsOptionsRepository.findByDescription({ description });

    if (settingOptionExists) {
      return res.status(400).send({
        message: 'Opção de configuração já cadastrada',
        settingOption: null,
      });
    }

    const settingOption = await SettingsOptionsRepository.create({
      description,
    });

    return res
      .status(200)
      .json({ message: 'Opção de configuração cadastrada', settingOption });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    const settingOption = await SettingsOptionsRepository.findById(parsedId);
    if (!settingOption) {
      return res.status(400).send({
        message: 'Opção de configuração não encontrada',
        settingOption: null,
      });
    }

    await SettingsOptionsRepository.delete(parsedId);
    return res.sendStatus(200);
  }
}

export default new SettingsOptionsController();
