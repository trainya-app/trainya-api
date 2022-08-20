import { Request, Response } from 'express';
import { isSomeEmpty } from '../../../utils/isSomeEmpty';
import MembersRepository from '../../repositories/members/MembersRepository';
import MembersSettingsRepository from '../../repositories/members/MembersSettingsRepository';
import SettingsOptionsRepository from '../../repositories/settings-options/SettingsOptionsRepository';

class MembersSettingsController {
  async index(req: Request, res: Response) {
    const memberSettings = await MembersSettingsRepository.findAll();
    return res.send({ memberSettings });
  }

  async store(req: Request, res: Response) {
    const { memberId, settingOptionId, value } = req.body;

    const someFieldIsEmpty = isSomeEmpty([memberId, settingOptionId, value]);
    if (someFieldIsEmpty) {
      return res.status(400).send({
        message: 'Campos obrigatórios não foram preenchidos',
        memberSetting: null,
      });
    }

    const memberExists = await MembersRepository.findById(memberId);
    if (!memberExists) {
      return res.status(400).send({
        message: 'Membro não encontrado',
        memberSetting: null,
      });
    }

    const settingOptionExists = await SettingsOptionsRepository.findById(
      settingOptionId
    );
    if (!settingOptionExists) {
      return res.status(400).send({
        message: 'Opção de configuração não encontrada',
        memberSetting: null,
      });
    }

    const memberSetting = await MembersSettingsRepository.create({
      member_id: memberId,
      settings_option_id: settingOptionId,
      value,
    });
    return res.status(200).send({ memberSetting });
  }
}

export default new MembersSettingsController();
