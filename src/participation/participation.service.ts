import { Inject, Injectable } from '@nestjs/common';
import { Participation } from './participation.entity';

@Injectable()
export class ParticipationService {
  constructor(
    @Inject('PARTICIPATIONS_REPOSITORY')
    private _participationsRepository: typeof Participation,
  ) {}

  async add(
    name: string,
    last_name: string,
    phone: string,
  ): Promise<Participation> {
    const participation = this._participationsRepository.build({
      name,
      last_name,
      phone,
    });
    await participation.save();
    return participation;
  }
}
