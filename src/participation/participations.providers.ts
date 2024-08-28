import { Participation } from './participation.entity';

export const participationsProviders = [
  {
    provide: 'PARTICIPATIONS_REPOSITORY',
    useValue: Participation,
  },
];
