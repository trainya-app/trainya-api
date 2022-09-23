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
    const memberId = req.userId;
    const { settingOptionId, value } = req.body;

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

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    if (Number.isNaN(id)) {
      return res.status(400).send({
        message: 'ID inválido',
        memberSetting: null,
      });
    }

    const memberSettingExists = await MembersSettingsRepository.findById(
      parsedId
    );
    if (!memberSettingExists) {
      return res.status(400).send({
        message: 'Configuração de membro não encontrada',
        memberSetting: null,
      });
    }

    return res.status(200).json({
      message: 'Configuração de membro encontrada',
      memberSetting: memberSettingExists,
    });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);

    if (Number.isNaN(id)) {
      return res.status(400).send({
        message: 'ID inválido',
        memberSetting: null,
      });
    }

    const memberSettingExists = await MembersSettingsRepository.findById(
      parsedId
    );
    if (!memberSettingExists) {
      return res.status(400).send({
        message: 'Configuração de membro não encontrada',
        memberSetting: null,
      });
    }

    await MembersSettingsRepository.delete(parsedId);
    return res.sendStatus(200);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const parsedId = Number(id);
    const { memberId, settingOptionId, value } = req.body;

    if (Number.isNaN(id)) {
      return res.status(400).send({
        message: 'ID inválido',
        memberSetting: null,
      });
    }

    const memberSettingExists = await MembersSettingsRepository.findById(
      parsedId
    );
    if (!memberSettingExists) {
      return res.status(400).send({
        message: 'Configuração de membro não encontrada',
        memberSetting: null,
      });
    }

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

    const member_id = Number.isNaN(Number(memberId))
      ? undefined
      : Number(memberId);
    const settings_option_id = Number.isNaN(Number(settingOptionExists))
      ? undefined
      : Number(memberId);

    const memberSetting = await MembersSettingsRepository.update({
      id: parsedId,
      member_id,
      settings_option_id,
      value,
    });
    return res.status(200).send({ memberSetting });
  }
}

export default new MembersSettingsController();
